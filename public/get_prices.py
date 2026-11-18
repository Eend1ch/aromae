import os
import re
import json
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import concurrent.futures
from urllib.parse import urljoin
import time
import logging
import random
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

# Настройка логирования
logging.basicConfig(filename='parser.log', level=logging.INFO, format='%(asctime)s - %(message)s')

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

TYPE_MAPPING = {
    "парфумерний екстракт": "еліксир",
    "парфумована вода": "парфумована вода",
    "туалетна вода": "туалетна вода",
    "еліксир": "еліксир",
    "parfum": "парфуми",
    "eau de parfum": "парфумована вода",
    "eau de toilette": "туалетна вода",
    "elixir": "еліксир"
}

# Чтение URL из файла
with open(f"{SCRIPT_DIR}\\urls.txt", "r") as url_file:
    urls = [i.strip() for i in url_file.readlines()]

# Ротация User-Agent
USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0"
]

HEADERS = {
    "User-Agent": random.choice(USER_AGENTS),
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Referer": "https://www.brocard.ua/",
    "Connection": "keep-alive",
    "Upgrade-Insecure-Requests": "1"
}

# Чтение aliases.json
try:
    with open(os.path.join(SCRIPT_DIR, "aliases.json"), "r", encoding="utf-8") as f:
        ALIASES = json.load(f)
except FileNotFoundError:
    logging.error("Помилка: aliases.json не знайдено.")
    ALIASES = {}

if not ALIASES:
    logging.warning("Тимчасовий мапінг для тестування")
    temp_mapping = {
        "stronger-with-you-absolutely": ["brocard-137420"],
        "stronger-with-you-amber": ["notino-16264803"],
        "acqua-di-gio-toilette": ["notino-16231211", "brocard-172188"],
        "acqua-di-gio-elixir": ["notino-16289594", "brocard-188759"],
        "stronger-with-you-intensely": ["notino-16286591", "brocard-068434"],
        "tobacco-vanille": ["brocard-001787"]
    }
    ALIASES = {}
    for name, ids in temp_mapping.items():
        for id_val in ids:
            ALIASES[name] = ALIASES.get(name, []) + [id_val]

def extract_brocard_id(url):
    match = re.search(r'[-](\d+)(?:\?|$)', url)
    if not match:
        match = re.search(r'ml-(\d+)(?:\?|$)', url)
    return f"brocard-{match.group(1)}" if match else None

def extract_notino_id(url):
    match = re.search(r'/p-(\d+)/', url)
    return f"notino-{match.group(1)}" if match else None

def find_perfume_id(brocard_id=None, notino_id=None):
    if brocard_id:
        for name, aliases in ALIASES.items():
            if brocard_id in aliases:
                return name
        logging.warning(f"Не знайдено perfume_name для brocard_id {brocard_id}")
    if notino_id:
        for name, aliases in ALIASES.items():
            if notino_id in aliases:
                return name
        logging.warning(f"Не знайдено perfume_name для notino_id {notino_id}")
    return None

def parse_price(tag):
    if not tag:
        return None
    return "".join(tag.stripped_strings)

def parse_brocard(url):
    logging.info(f"Парсинг Brocard: {url}")
    time.sleep(2)
    try:
        HEADERS["User-Agent"] = random.choice(USER_AGENTS)
        resp = requests.get(url, headers=HEADERS, timeout=15)
        if resp.status_code != 200:
            logging.error(f"Помилка доступу до Brocard {url}: HTTP {resp.status_code}")
            return None, None
        resp.raise_for_status()
        soup = BeautifulSoup(resp.text, "html.parser")

        unavailable = soup.find('div', class_='stock unavailable')
        if unavailable:
            brocard_id = extract_brocard_id(url)
            if not brocard_id:
                logging.error(f"Не вдалося отримати ID для Brocard {url}")
                return None, None
            perfume_name = find_perfume_id(brocard_id=brocard_id) or f"perfume-{brocard_id.split('-')[1]}"
            logging.info(f"Продукт недоступний на Brocard {url}")
            return brocard_id, {
                "name": perfume_name,
                "fullName": "unknown",
                "parfumType": "",
                "site": "brocard",
                "variations": [{"defaultPrice": "Немає в наявності"}]
            }

        title_el = soup.select_one(".page-title") or soup.select_one("h1")
        real_name = title_el.get_text(strip=True) if title_el else "unknown"

        raw_type = parse_price(soup.select_one(".item-type-custom")) or ""
        parfum_type = TYPE_MAPPING.get(raw_type.lower(), raw_type)

        brocard_id = extract_brocard_id(url)
        if not brocard_id:
            logging.error(f"Не вдалось отримати ID для Brocard {url}")
            return None, None

        perfume_name = find_perfume_id(brocard_id=brocard_id)
        if not perfume_name:
            perfume_name = f"perfume-{brocard_id.split('-')[1]}"
            logging.info(f"Тимчасова назва для {brocard_id}: {perfume_name}")
        
        variations = []
        label = soup.find(string=re.compile(r"Вибір[:\s]"))
        ul = label.find_next("ul") if label else None

        def parse_variant(variant_url, size):
            HEADERS["User-Agent"] = random.choice(USER_AGENTS)
            vr = requests.get(variant_url, headers=HEADERS, timeout=15)
            vr.raise_for_status()
            vsoup = BeautifulSoup(vr.text, "html.parser")
            unavailable_variant = vsoup.find('div', class_='stock unavailable')
            if unavailable_variant:
                return None
            discount_tag = vsoup.select_one(".product-price__price") or vsoup.select_one(".price")
            default_tag = vsoup.select_one("span.wysiwyg")
            default_price = parse_price(default_tag)
            discount_price = parse_price(discount_tag)
            if not size or size == "Невідомий об'єм" or not (default_price or discount_price):
                logging.warning(f"Пропущено варіант для Brocard {variant_url}: size {size}, price {default_price}")
                return None
            result = {"size": size, "url": variant_url}
            if discount_price and discount_price != default_price:
                result["defaultPrice"] = default_price
                result["discountPrice"] = discount_price
            else:
                result["price"] = default_price
            return result

        if ul:
            for a in ul.select("li a[href]"):
                size = a.get_text(strip=True)
                variant_url = urljoin(url, a["href"])
                variant = parse_variant(variant_url, size)
                if variant:
                    variations.append(variant)
        else:
            discount_tag = soup.select_one(".product-price__price") or soup.select_one(".price")
            default_tag = soup.select_one("span.wysiwyg")
            size = parse_price(soup.select_one("span.swatch-label")) or "Невідомий об'єм"
            default_price = parse_price(default_tag)
            discount_price = parse_price(discount_tag)
            if size != "Невідомий об'єм" and (default_price or discount_price):
                variation = {"size": size, "url": url}
                if discount_price and discount_price != default_price:
                    variation["defaultPrice"] = default_price
                    variation["discountPrice"] = discount_price
                else:
                    variation["price"] = default_price
                variations.append(variation)

        if not variations:
            variations = [{"defaultPrice": "Немає в наявності"}]

        logging.info(f"Успішно спарсено Brocard {url}: {real_name}")
        return brocard_id, {
            "name": perfume_name,
            "fullName": real_name,
            "parfumType": parfum_type,
            "site": "brocard",
            "variations": variations
        }
    except Exception as e:
        logging.error(f"Помилка при парсингу Brocard {url}: {e}")
        return None, None

def parse_notino(url):
    logging.info(f"Парсинг Notino: {url}")
    time.sleep(2)
    try:
        options = Options()
        options.add_argument('--headless')
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        options.add_argument(f'user-agent={random.choice(USER_AGENTS)}')

        driver = webdriver.Chrome(options=options)
        try:
            driver.set_page_load_timeout(30)
            driver.get(url)
            WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CLASS_NAME, 'sc-3sotvb-4'))
            )
            soup = BeautifulSoup(driver.page_source, 'html.parser')
        except Exception as e:
            logging.error(f"Помилка завантаження Notino {url}: {e}")
            return None, None
        finally:
            driver.quit()

        title_el = soup.find('span', class_='sc-3sotvb-4 iNFxEg')
        real_name = title_el.get_text(strip=True) if title_el else "unknown"

        parfum_type_el = soup.find('span', class_='sc-3sotvb-6 kCrZPi') or soup.find('div', class_='sc-3sotvb-7 kkhHKo')
        raw_type = parfum_type_el.get_text(strip=True).lower() if parfum_type_el else ""
        parfum_type = TYPE_MAPPING.get(raw_type, raw_type)

        notino_id = extract_notino_id(url)
        if not notino_id:
            logging.error(f"Не вдалось отримати ID для Notino {url}")
            return None, None

        perfume_name = find_perfume_id(notino_id=notino_id)
        if not perfume_name:
            perfume_name = f"perfume-{notino_id.split('-')[1]}"
            logging.info(f"Тимчасова назва для {notino_id}: {perfume_name}")

        variants_list = soup.find('ul', class_='sc-1hj58ih-6 PKROl')
        variations = []

        def check_unavailable(variant_soup):
            unavailable_span = variant_soup.find('span', class_='sc-mu8uqe-4 eeZVta')
            return unavailable_span and unavailable_span.get_text(strip=True) == "Зараз цей продукт недоступний"

        if variants_list:
            for variant in variants_list.find_all('li', class_='sc-1hj58ih-0 kHEoba'):
                if check_unavailable(variant):
                    variations.append({"defaultPrice": "Немає в наявності"})
                    continue

                volume_elem = variant.find('div', class_='sc-1hj58ih-3 iOprUs pd-variant-label')
                volume = volume_elem.text.strip().replace('мл', 'ML') if volume_elem else "Невідомий об'єм"
                price_elem = variant.find('span', {'data-testid': 'price-variant'})
                price = f"{price_elem.text.strip().replace(' ', ' ')} ₴" if price_elem else "Невідома ціна"
                variation_url = variant.find('a', href=True)['href'] if variant.find('a', href=True) else url

                unpacked = variant.find('div', class_='pd-variant-tag-РОЗПАКОВАНО')
                damaged = variant.select_one('div.pd-variant-tag-Пошкоджена.упаковка')
                status = 'РОЗПАКОВАНО' if unpacked else "Пошкоджена упаковка" if damaged else 'Новий'

                if volume != "Невідомий об'єм" and price != "Невідома ціна":
                    variations.append({
                        "size": volume,
                        "price": price,
                        "url": urljoin(url, variation_url),
                        "unpacked": status
                    })
        else:
            if check_unavailable(soup):
                variations.append({"defaultPrice": "Немає в наявності"})
            else:
                volume_elem = soup.find('div', class_='sc-h83s98-4 iyAOHo')
                volume = volume_elem.find('span').text.strip().replace('мл', 'ML') if volume_elem and volume_elem.find('span') else "Невідомий об'єм"
                price_elem = soup.find('span', {"data-testid": "pd-price"})
                price = f"{price_elem.text.strip().replace(' ', ' ')} ₴" if price_elem else "Невідома ціна"

                unpacked = soup.find('div', class_='pd-variant-tag-РОЗПАКОВАНО')
                damaged = soup.select_one('div.pd-variant-tag-Пошкоджена.упаковка')
                status = 'РОЗПАКОВАНО' if unpacked else "Пошкоджена упаковка" if damaged else 'Новий'

                if volume != "Невідомий об'єм" and price != "Невідома ціна":
                    variations.append({
                        "size": volume,
                        "price": price,
                        "url": url,
                        "unpacked": status
                    })

        if not variations:
            variations = [{"defaultPrice": "Немає в наявності"}]

        logging.info(f"Успішно спарсено Notino {url}: {real_name}")
        return notino_id, {
            "name": perfume_name,
            "fullName": real_name,
            "parfumType": parfum_type,
            "site": "notino",
            "variations": variations
        }
    except Exception as e:
        logging.error(f"Помилка при парсингу Notino {url}: {e}")
        return None, None

def is_variant_equal(v1, v2):
    keys_to_compare = ["size", "url", "unpacked", "price", "defaultPrice", "discountPrice"]
    for key in keys_to_compare:
        if v1.get(key) != v2.get(key):
            return False
    return True

def merge_data(existing_data, new_key, new_data):
    if not new_key or not new_data:
        logging.warning(f"Пропущено об'єднання для ключа {new_key}")
        return existing_data

    logging.info(f"Об'єднання даних для {new_key}: сайт {new_data.get('site')}")
    site = new_data.get("site")
    new_variations = new_data.get("variations", [])

    if new_key in existing_data:
        existing_item = existing_data[new_key]
        if new_data.get("parfumType") and new_data["parfumType"] != "":
            existing_item["parfumType"] = new_data["parfumType"]
        if new_data.get("fullName") and new_data["fullName"] != "unknown":
            existing_item["fullName"] = new_data["fullName"]
        if new_data.get("name") and new_data["name"] != existing_item.get("name"):
            existing_item["name"] = new_data["name"]

        existing_variations = existing_item.get("variations", [])
        existing_variations = [v for v in existing_variations if v.get("site") != site]

        for nv in new_variations:
            nv["site"] = site
            if not any(is_variant_equal(nv, ev) for ev in existing_variations):
                existing_variations.append(nv)
        existing_item["variations"] = existing_variations
    else:
        existing_data[new_key] = {
            "name": new_data.get("name", ""),
            "fullName": new_data.get("fullName", "unknown"),
            "parfumType": new_data.get("parfumType", ""),
            "site": site,
            "variations": [{**v, "site": site} for v in new_variations]
        }

    return existing_data

def main():
    out = os.path.join(SCRIPT_DIR, "data.json")
    results = {}
    if os.path.exists(out):
        try:
            with open(out, "r", encoding="utf-8") as f:
                results = json.load(f)
            logging.info(f"Завантажено data.json із {len(results)} записами")
        except Exception as e:
            logging.error(f"Помилка читання data.json: {e}")

    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as ex:
        futures = []
        for url in urls:
            logging.info(f"Обробка URL: {url}")
            if "brocard.ua" in url:
                futures.append(ex.submit(parse_brocard, url))
            elif "notino.ua" in url:
                futures.append(ex.submit(parse_notino, url))

        for future in concurrent.futures.as_completed(futures):
            key, data = future.result()
            if key and data:
                results = merge_data(results, key, data)

    try:
        with open(out, "w", encoding="utf-8") as f:
            json.dump(results, f, ensure_ascii=False, indent=2)
        logging.info(f"data.json записано з {len(results)} записами")
    except Exception as e:
        logging.error(f"Помилка запису data.json: {e}")

if __name__ == "__main__":
    main()