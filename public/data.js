const brands = {
  "Giorgio Armani": [
    "stronger-with-you-absolutely",
    "stronger-with-you-intensely",
    "stronger-with-you",
    "stronger-with-you-only",
    "stronger-with-you-parfum",
    "because-its-you",
    "stronger-with-you-amber",
    "stronger-with-you-leather",
    "acqua-di-gio-elixir",
    "acqua-di-gio-profondo",
    "acqua-di-gio-profondo-parfum",
    "acqua-di-gio-toilette"
  ],
  "Tom Ford": [
    "private-blend-tobacco-vanille",
    "private-blend-lost-cherry",
    "black-orchid-parfum",
    "ombre-leather"
  ],
  "Dior": [
    "homme-intense"
  ],
  "Creed": [
    "aventus"
  ],
  "Orto Parisi": [
    "megamare",
    "cuoium",
    "boccanera"
  ],
  "Dsquared2": [
    "Red-wood"
  ],
  "Essential Parfums": [
    "bois-imperial"
  ],
  "Givenchy": [
    "gentleman-toilette"
  ],
  "Lancome": [
    "la-vie-est-belle"
  ],
  "Yves Saint Laurent": [
    "libre",
    "y-eau-de-parfum"
  ],
  "Maison Francis Kurkdjian": [
    "baccarat-rouge-540-extrait-de-parfum"
  ],
  "Carolina Herrera": [
    "good-girl"
  ],
};

const perfumes = {
  "stronger-with-you-intensely": {
    name: "Stronger With You Intensely",
    fullName: "Emporio Armani Stronger With You Intensely",
    brand: "Giorgio Armani",
    year: 2019,
    line: 'Stronger with you',
    description: `
      <p>Stronger With You Intensely — східно-фужерний аромат від Giorgio Armani, що поєднує свіжість ялівцю й рожевого перцю з пряною лавандою та шавлією.</p>
      <p>В базі — тепло амбри, ванілі і каштану з тонкими деревно-смолистими відтінками, які дарують елегантний, стійкий шлейф.</p>    `,
    rating: 4.6,
    image: ["images/perfumes/stronger-with-you-intensely/stronger-with-you-intensely.jpg",
      "images/perfumes/stronger-with-you-intensely/stronger-with-you-intensely-7.png",
      "images/perfumes/stronger-with-you-intensely/stronger-with-you-intensely-8.png",
    ],
    gender: "For Men",
    type: "Eau de Parfum",
    group: "Східні, Пряні",
    sillage: "Висока",
    notes: {
     "Верхні ноти": [
    "Рожевий перець", "Ялівець", "Фіалка"
  ],
  "Середні ноти": [
    "Тофі","Кориця","Лаванда","Шавлія"
  ],
  "Базові ноти": [
    "Ваніль","Амбра","Боби Тонка","Замша"
  ],

    },
    images: [
      "images/perfumes/stronger-with-you-intensely/stronger-with-you-intensely-1.png",
      "images/perfumes/stronger-with-you-intensely/stronger-with-you-intensely-2.png",
      "images/perfumes/stronger-with-you-intensely/stronger-with-you-intensely-3.png",
      "images/perfumes/stronger-with-you-intensely/stronger-with-you-intensely-4.png",
      "images/perfumes/stronger-with-you-intensely/stronger-with-you-intensely-5.png"
    ],
    shops: [
      { name: "Brocard", url: "https://www.brocard.ua/ua/product/parfumovana-voda-giorgio-armani-stronger-with-you-intensely-30-ml-068434?gad_source=1&gclid=CjwKCAjw8IfABhBXEiwAxRHlsPkysiVE_2astyXjrAeaPlB6-5X18z0rVBt1KG8ZHphl9Ycgw2J7xRoCG-EQAvD_BwE", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
      { name: "Notino", url: "https://www.notino.ua/armani/emporio-stronger-with-you-intensely-parfumovana-voda-dlja-cholovikiv/?gad_source=1&gclid=Cj0KCQjwzYLABhD4ARIsALySuCSdeUnDtteBDnIUcPBwT6Gj8oPmFD_mXLSv86E5TiK7G-xnlLHVb6AaAtCaEALw_wcB", logo: "images/shops/notino.png", tooltip: "Європейський магазин парфумерії, найнижчі ціни" },
      { name: "Ilya Parfumer", url: "https://ilyaparfumer.com.ua/tproduct/727629340-937322994691-giorgio-armani-emporio-armani-stronger-w", logo: "images/shops/ilyaparfumer.png", tooltip: "Є можливість замовити пробники" },
      { name: "aromateque", url: "https://aromateque.com.ua/ua/giorgio-armani-stronger-with-you-intensely?search=stronger%20with%20you%20in", logo: "images/shops/aromateque.png", tooltip: "Низькі ціни та надійність, можливість спробувати аромат вживу у магазині"  }
    ],
    season: { spring: 2, summer: 1, autumn: 4, winter: 5 },
    daytime: { day: 3, night: 5 },

  },
  "stronger-with-you-absolutely": {
    name: "Stronger With You Absolutely",
    fullName: "Emporio Armani Stronger With You Absolutely",
    brand: "Giorgio Armani",
    line: 'Stronger with you',
    year: 2021,
    description: `
    <p>Stronger With You Absolutely — амброво-фужерний аромат Emporio Armani, який поєднує солодкість глазурованого каштана і ванілі з пряними акордами рому й бергамоту.</p>
    <p>Серце з лаванди й давани доповнене димними деревними відтінками кедра й пачулі, створюючи теплий, виразний шлейф.</p>    `,
    rating: 4.6,
    image: ["images/perfumes/stronger-with-you-absolutely/stronger-with-you-absolutely.jpg",
      "images/perfumes/stronger-with-you-absolutely/stronger-with-you-absolutely-6.png",
    ],
    gender: "For Men",
    type: "Parfum",
    group: "Східні, фужерний",
    sillage: "Висока",
    notes: {
      "Верхні ноти": [
        "Ром", "Елемі", "Бергамот"
      ],
      "Середні ноти": [
        "Лаванда", "Давана"
      ],
      "Базові ноти": [
        "Ваніль","Кінський каштан","Кедр","Пачулі"
      ]
    },
    images: [
      "images/perfumes/stronger-with-you-absolutely/stronger-with-you-absolutely-1.png",
      "images/perfumes/stronger-with-you-absolutely/stronger-with-you-absolutely-2.png",
      "images/perfumes/stronger-with-you-absolutely/stronger-with-you-absolutely-3.png",
      "images/perfumes/stronger-with-you-absolutely/stronger-with-you-absolutely-4.png",
      "images/perfumes/stronger-with-you-absolutely/stronger-with-you-absolutely-5.png"
    ],
    shops: [
      { name: "Brocard", url: "https://www.brocard.ua/ru/product/duhi-giorgio-armani-stronger-with-you-absolutely-100-ml-137420", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
      { name: "Notino", url: "https://www.notino.ua/armani/emporio-stronger-with-you-absolutely-parfumi-dlja-cholovikiv/p-16067692/?gad_source=1&gbraid=0AAAAADRCXFm_-Wwp1IJ1HD_rwzU9gGvYK&gclid=Cj0KCQjw_JzABhC2ARIsAPe3ynrNyui34GczI7BcDTqHCpD3FVYAwz1EiSZeCU_RG1DkHpg2RtoeGAEaAqxAEALw_wcB", logo: "images/shops/notino.png", tooltip: "Європейський магазин парфумерії, найнижчі ціни" },
      { name: "aromateque", url: "https://aromateque.com.ua/ua/giorgio-armani-stronger-with-you-absolutely?gad_source=1&gbraid=0AAAAADmbqPJ9ea9Ql27_LFhLYSpnWJrnC&gclid=Cj0KCQjw_JzABhC2ARIsAPe3ynqDPGY7z3QD8ezSQzeBlxPh5qpkXorFqOvxSjmhhcljFHX1y9Lc5nAaAhUOEALw_wcB", logo: "images/shops/aromateque.png", tooltip: "Низькі ціни та надійність, можливість спробувати аромат вживу у магазині"  }
    ],
    season: { spring: 2, summer: 1, autumn: 4, winter: 5 },
    daytime: { day: 3, night: 5 },

  },

  "stronger-with-you": {
    name: "Stronger With You",
    fullName: "Emporio Armani Stronger With You",
    brand: "Giorgio Armani",
    line: 'Stronger with you',
    year: 2017,
    description: `
      <p>Stronger With You — чоловіча фужерно-деревна туалетна вода, створена як доповнення до жіночого аромату Because It’s You. Вони гармонійно поєднуються, як дві частини одного цілого.</p>
      <p>Аромат відкривається пряними нотами шавлії, перцю й кардамону, що переходять у теплу базу з ванілі та каштана. Композиція підкреслює впевненість, енергію та харизму сучасного чоловіка.</p>
   `,
    rating: 4.3,
    image: ["images/perfumes/stronger-with-you/stronger-with-you.png",
      "images/perfumes/stronger-with-you/stronger-with-you-6.png",
      "images/perfumes/stronger-with-you/stronger-with-you-7.png"
    ],
    gender: "For Men",
    type: "Eau de Toillete",
    group: "Ароматичні",
    sillage: "Середня",
    notes: {
      "Верхні ноти": [
      "Каштан", "Цукор"
    ],
    "Середні ноти": [
      "Шавлія", "Лаванда"
    ],
    "Базові ноти": [
      "Ваніль", "Дим"
    ],

      
    },
    images: [
      "images/perfumes/stronger-with-you/stronger-with-you-1.png",
      "images/perfumes/stronger-with-you/stronger-with-you-2.png",
      "images/perfumes/stronger-with-you/stronger-with-you-3.png",
      "images/perfumes/stronger-with-you/stronger-with-you-4.png",
      "images/perfumes/stronger-with-you/stronger-with-you-5.png"
    ],
    shops: [
      { name: "Brocard", url: "https://www.brocard.ua/ua/product/tualetna-voda-giorgio-armani-stronger-with-you-100-ml-000785?gad_source=1&gbraid=0AAAAADF0uBIHPfksEwOk6hp5KPC-jQUVh&gclid=CjwKCAjwn6LABhBSEiwAsNJrjoRCohD2KK-N4U106_3rM14-Tqtt0iessxkrppyHq_X2UGmfBOjhOhoC6DQQAvD_BwE", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
      { name: "Notino", url: "https://www.notino.ua/armani/emporio-stronger-with-you-tualetna-voda-dlja-cholovikiv/p-650688/", logo: "images/shops/notino.png", tooltip: "Європейський магазин парфумерії, найнижчі ціни" },
      { name: "aromateque", url: "https://aromateque.com.ua/ua/giorgio-armani-stronger-with-you?gad_source=1&gbraid=0AAAAADmbqPI-BFrkX9vHOpCYvCSQBvgND&gclid=CjwKCAjwn6LABhBSEiwAsNJrju70pzDzVz3cop6Ii_rZr01lVCAABP30Q0plmdjxnW2oYNhkhZwWAxoC_5IQAvD_BwE", logo: "images/shops/aromateque.png", tooltip: "Низькі ціни та надійність, можливість спробувати аромат вживу у магазині"  },
    { name: "Ilya Parfumer", url: "https://ilyaparfumer.com.ua/tproduct/727629340-883045619981-giorgio-armani-emporio-armani-stronger-w", logo: "images/shops/ilyaparfumer.png", tooltip: "Є можливість замовити пробники" },
    ],
    season: { spring: 2, summer: 1, autumn: 5, winter: 5 },
    daytime: { day: 3, night: 5 },
  },
  "stronger-with-you-only": {
    name: "Stronger With You Only",
    fullName: "Emporio Armani Stronger With You Only",
    brand: "Giorgio Armani",

    line: 'Stronger with you',
    year: 2022,
    description: `
      <p>Stronger With You Only — фужерний східний аромат для чоловіків, сповнений енергії, елегантності та життєрадісного італійського темпераменту. Він легкий, самовпевнений та харизматичний.</p>
      <p>Композиція відкривається цитрусовим акордом, у серці — лаванда, мадагаскарська герань і фруктові ноти лічі. База поєднує мадагаскарську ваніль, шкіряні нюанси та фірмовий каштан.</p>
   `,
    rating: 4,
    image: ["images/perfumes/stronger-with-you-only/stronger-with-you-only.png",
      "images/perfumes/stronger-with-you-only/stronger-with-you-only-5.png",
      "images/perfumes/stronger-with-you-only/stronger-with-you-only-6.png",
    ],
    gender: "For Men",
    type: "Eau de Toilette",
    group: "Цитрусові",
    sillage: "Середня",
    notes: {
      "Верхні ноти": [
        "Грейпфрут"
      ],
      "Середні ноти": [
        "Лаванда","Герань"
      ],
      "Базові ноти": [
        "Ваніль","Кінський каштан","Лабданум"
      ]
    },
    images: [
      "images/perfumes/stronger-with-you-only/stronger-with-you-only-1.png",
      "images/perfumes/stronger-with-you-only/stronger-with-you-only-2.png",
      "images/perfumes/stronger-with-you-only/stronger-with-you-only-3.png",
      "images/perfumes/stronger-with-you-only/stronger-with-you-only-4.png",
    ],
    shops: [
      { name: "Brocard", url: "https://www.brocard.ua/ua/product/tualetna-voda-giorgio-armani-stronger-with-you-only-100-ml-147348", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
      { name: "Notino", url: "https://www.notino.ua/armani/emporio-stronger-with-you-only-tualetna-voda-dlja-cholovikiv/p-16112475/", logo: "images/shops/notino.png", tooltip: "Європейський магазин парфумерії, найнижчі ціни" },
      { name: "aromateque", url: "https://aromateque.com.ua/ua/giorgio-armani-stronger-with-you-only?search=stronger%20with%20you%20only", logo: "images/shops/aromateque.png", tooltip: "Низькі ціни та надійність, можливість спробувати аромат вживу у магазині"  },
    ],
    season: { spring: 5, summer: 3, autumn: 5, winter: 3 },
    daytime: { day: 5, night: 3 },
  },
  "stronger-with-you-parfum": {
    name: "Stronger With You Parfum",
    fullName: "Emporio Armani Stronger With You Parfum",
    brand: "Giorgio Armani",

    line: 'Stronger with you',
    year: 2025,
    description: `
      <p>Stronger With You Parfum — глибокий фужерно-амбровий аромат із виразними шкіряними акцентами. Мандарин і рожевий перець відкривають композицію яскраво та пряно, серце з шавлії та лаванди додає ароматичної свіжості, а база з бурбонської ванілі, зацукрованого каштана, шкіри й кедра звучить тепло та чуттєво.</p>
      <p>Флакон з градієнтним бурштиновим лакуванням та фірмовими переплетеними кільцями підкреслює стиль і єдність лінійки Stronger With You.</p>
    `,
    rating: 4.1,
    image: ["images/perfumes/stronger-with-you-parfum/stronger-with-you-parfum.png",
            "images/perfumes/stronger-with-you-parfum/stronger-with-you-parfum-1.png",
            "images/perfumes/stronger-with-you-parfum/stronger-with-you-parfum-2.png"
    ],
    gender: "For Men",
    type: "Eau de Parfum",
    group: "Пряні",
    sillage: "Сильна",
    notes: {
      "Верхні ноти": ["Рожевий перець","Мандарин"],
      "Середні ноти": ["Лаванда","Шавлія"],
      "Базові ноти": ["Кінський Каштан","Ваніль"]
    },
    images: [
      "images/perfumes/stronger-with-you-parfum/stronger-with-you-parfum-3.png",
      "images/perfumes/stronger-with-you-parfum/stronger-with-you-parfum-4.png",
      "images/perfumes/stronger-with-you-parfum/stronger-with-you-parfum-5.png",
      "images/perfumes/stronger-with-you-parfum/stronger-with-you-parfum-6.png"
    ],
    shops: [
      { name: "Brocard", url: "https://www.brocard.ua/ua/product/parfumi-armani-emporio-armani-stronger-with-you-50-ml-187509?q=stronger%20with%20you%20parfum", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
      { name: "Notino", url: "https://www.notino.ua/armani/emporio-stronger-with-you-parfum-parfumi-dlja-cholovikiv/p-16286107/", logo: "images/shops/notino.png", tooltip: "Європейський магазин парфумерії, найнижчі ціни" },
    ],
    season: { spring: 2, summer: 1, autumn: 5, winter: 5 },
    daytime: { day: 2, night: 4 },
  },
  "because-its-you": {
    name: "Because It's You",
    fullName: "Emporio Armani Because It's You",
    brand: "Giorgio Armani",
    line: '',
    year: 2017,
    description: `
      <p>Because It's You — жіноча квіткова парфумована вода з грайливим характером. Солодка малина й витончений неролі створюють чарівний вступ, розкішна троянда додає глибини, а ваніль із мускусом завершують композицію спокусливим, магнетичним шлейфом.</p>
      <p>Аромат створений як ідеальне доповнення до чоловічого Stronger With You — разом вони утворюють гармонійну, чуттєву пару.</p>
   `,
    rating: 3.8,
    image: ["images/perfumes/because-its-you/because-its-you.png",
            "images/perfumes/because-its-you/because-its-you-1.png",
            "images/perfumes/because-its-you/because-its-you-2.png"
    ],
    gender: "For Women",
    type: "Eau de Parfum",
    group: "Фруктові , Квіткові",
    sillage: "Легка",
    notes: {
      "Верхні ноти": ["Малина", "Лимон", "Неролі"],
      "Середні ноти": ["Троянда"],
      "Базові ноти": ["Ваніль", "Мускус", "Амбервуд"]
    },
    images: [
      "images/perfumes/because-its-you/because-its-you-3.png",
      "images/perfumes/because-its-you/because-its-you-4.png",
      "images/perfumes/because-its-you/because-its-you-5.png",
      "images/perfumes/because-its-you/because-its-you-6.png",
      "images/perfumes/because-its-you/because-its-you-7.png"
    ],
    shops: [
      { name: "Brocard", url: "https://www.brocard.ua/ua/product/parfumovana-voda-giorgio-armani-because-it-s-you-100-ml-001050", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
      { name: "Notino", url: "https://www.notino.ua/armani/emporio-because-its-you-parfumovana-voda-dlja-zhinok/p-652813/", logo: "images/shops/notino.png", tooltip: "Європейський магазин парфумерії, найнижчі ціни" },
      { name: "aromateque", url: "https://aromateque.com.ua/ua/giorgio-armani-because-it-s-you?search=because%20it", logo: "images/shops/aromateque.png", tooltip: "Низькі ціни та надійність, можливість спробувати аромат вживу у магазині"  }
    ],
    season: { spring: 2, summer: 1, autumn: 5, winter: 5 },
    daytime: { day: 2, night: 4 },
  },
  "stronger-with-you-amber": {
    name: "Stronger With You Amber",
    fullName: "Emporio Armani Stronger With You Amber",
    brand: "Giorgio Armani",
    line: 'Stronger with you',
    year: 2023,
    description: `
      <p>Парфумована вода Armani Emporio Stronger With You Amber є універсальним ароматом, який ідеально підходить як для жінок, так і для чоловіків, підкреслюючи індивідуальність кожного.</p>
    `,
    rating: 4.3,
    image: ["images/perfumes/stronger-with-you-amber/stronger-with-you-amber.png",
            "images/perfumes/stronger-with-you-amber/stronger-with-you-amber-1.png",
    ],
    gender: "For Women and Men",
    type: "Eau de Parfum",
    group: "Фужерний",
    sillage: "Сильна",
    notes: {"":["Амбра","Ваніль","Лаванда"]},
    images: [
      "images/perfumes/stronger-with-you-amber/stronger-with-you-amber-2.png",
      "images/perfumes/stronger-with-you-amber/stronger-with-you-amber-3.png",
      "images/perfumes/stronger-with-you-amber/stronger-with-you-amber-4.png",
    ],
    shops: [
      { name: "Notino", url: "https://www.notino.ua/armani/emporio-stronger-with-you-amber-parfumovana-voda-uniseks/p-16264803/", logo: "images/shops/notino.png", tooltip: "Європейський магазин парфумерії, найнижчі ціни" },
    ],
    season: { spring: 3, summer: 1, autumn: 5, winter: 5 },
    daytime: { day: 3, night: 5 },
  },
  "stronger-with-you-leather": {
    name: "Stronger With You Leather",
    fullName: "Emporio Armani Stronger With You Leather",
    brand: "Giorgio Armani",
    line: 'Stronger with you',
    year: 2020,
    description: `
    <p>Незалежно від того, якими високими є ваші цілі, жодна з них не буде недосяжною. Парфумована вода для чоловіків Armani Emporio Stronger With You Leather втілює неймовірну рішучість, яка прихована в кожній краплі. Її аромат надасть вам сміливість зробити наступний крок на шляху до здійснення своїх мрій.</p>`,
    rating: 4.5,
    image: ["images/perfumes/stronger-with-you-leather/stronger-with-you-leather.png",
            "images/perfumes/stronger-with-you-leather/stronger-with-you-leather-1.png",
    ],
    gender: "For Men",
    type: "Eau de Parfum",
    group: "Шкіряні",
    sillage: "Середня",
    notes: {
      "Верхні ноти": ["Кінський Каштан", "Спеції", "Елемі"],
      "Середні ноти": ["Лаванда", "Шавлія"],
      "Базові ноти": ["Ваніль", "Шкіра", "Дерево Гуаяк", "Дерево Агар"]
    },
    images: [
      "images/perfumes/stronger-with-you-leather/stronger-with-you-leather-2.png",
      "images/perfumes/stronger-with-you-leather/stronger-with-you-leather-3.png",
      "images/perfumes/stronger-with-you-leather/stronger-with-you-leather-4.png",
      "images/perfumes/stronger-with-you-leather/stronger-with-you-leather-5.png",
      "images/perfumes/stronger-with-you-leather/stronger-with-you-leather-6.png",
    ],
    shops: [
    ],
    season: { spring: 2, summer: 1, autumn: 5, winter: 5 },
    daytime: { day: 3, night: 5 },
  },
  "acqua-di-gio-elixir": {
    name: "Acqua di Giò Elixir",
    fullName: "Acqua di Gio Elixir Giorgio Armani",
    brand: "Giorgio Armani",
    line: 'Acqua di Giò',
    year: 2025,
    description: `
    <p>Acqua di Giò Elixir — це свіже, інтенсивне та глибоке переосмислення легендарного аромату від Armani. Він створений для сучасного чоловіка, який поєднує внутрішню силу з невимушеною елегантністю. Аромат відкривається яскравим бергамотом і мандарином, у серці відчувається прозора морська прохолода, а завершують композицію теплі деревні та шкіряні акорди. Elixir — це енергія водної стихії у витонченому, харизматичному звучанні.</p>
    `,
    rating: 4,
    image: ["images/perfumes/acqua-di-gio-elixir/acqua-di-gio-elixir.png",
            "images/perfumes/acqua-di-gio-elixir/acqua-di-gio-elixir-1.png",
            "images/perfumes/acqua-di-gio-elixir/acqua-di-gio-elixir-2.png",
            "images/perfumes/acqua-di-gio-elixir/acqua-di-gio-elixir-3.png",
            "images/perfumes/acqua-di-gio-elixir/acqua-di-gio-elixir-4.png",
    ],
    gender: "For Men",
    type: "Elixir",
    group: "Морський",
    sillage: "Висока",
    notes: {
      "Верхні ноти": ["Бергамот", "Зелений Мандарин", "Мускатний горіх"],
      "Середні ноти": ["Лист Фіалки", "Водяні Ноти"],
      "Базові ноти": ["Шкіра", "Пачулі", "Ветивер", "Лабданум"]
    },
    images: [
    ],
    shops: [
      { name: "Brocard", url: "https://www.brocard.ua/ua/product/eliksir-armani-acqua-di-gio-50-ml-188759", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },

    ],
    season: { spring: 5, summer: 5, autumn: 4, winter: 2 },
    daytime: { day: 5, night: 4 },
  },
  "acqua-di-gio-profondo": {
    name: "Acqua di Giò Profondo",
    fullName: "Acqua di Gio Profondo Giorgio Armani",
    brand: "Giorgio Armani",
    line: 'Acqua di Giò',
    year: 2020,
    description: `
      <p>Аромат Acqua di Gio Profondo втілює прохолоду океанських вод і свіжість цитрусових з трав'яними нотами лаванди та кипариса. Чуттєві акорди мускусу та амбри надають відчуття впевненості та сили.</p> <p>Цей аромат підкреслює мужність і харизму чоловіка. Стильний флакон із синього матового скла відображає елегантність аромату.</p>   `,
    rating: 4.4,
    image: ["images/perfumes/acqua-di-gio-profondo/acqua-di-gio-profondo.png",
            "images/perfumes/acqua-di-gio-profondo/acqua-di-gio-profondo-1.png",
            "images/perfumes/acqua-di-gio-profondo/acqua-di-gio-profondo-2.png",
    ],
    gender: "For Men",
    type: "Eau de Parfum",
    group: "Водні, Фужерний",
    sillage: "Середня",
    notes: {
      "Верхні ноти": ["Морські Ноти", "Aquozone", "Бергамот", "Зелений Мандарин"],
      "Середні ноти": ["Розмарин", "Лаванда", "Кипарис", "Мастикове Дерево"],
      "Базові ноти": ["Мінеральні Ноти", "Мускус", "Пачулі", "Амбра"]
    },
    images: [
            "images/perfumes/acqua-di-gio-profondo/acqua-di-gio-profondo-3.png",
            "images/perfumes/acqua-di-gio-profondo/acqua-di-gio-profondo-4.png",
            "images/perfumes/acqua-di-gio-profondo/acqua-di-gio-profondo-5.png",
            "images/perfumes/acqua-di-gio-profondo/acqua-di-gio-profondo-6.png",
            "images/perfumes/acqua-di-gio-profondo/acqua-di-gio-profondo-7.png",
            "images/perfumes/acqua-di-gio-profondo/acqua-di-gio-profondo-8.png",
    ],
    shops: [
      { name: "Brocard", url: "https://www.brocard.ua/ua/product/parfumovana-voda-giorgio-armani-acqua-di-gio-profondo-75-ml-085406", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
      { name: "Notino", url: "https://www.notino.ua/armani/acqua-di-gio-profondo-parfumovana-voda-dlja-cholovikiv/p-16016202/", logo: "images/shops/notino.png", tooltip: "Європейський магазин парфумерії, найнижчі ціни" },

    ],
    season: { spring: 4, summer: 5, autumn: 2, winter: 1 },
    daytime: { day: 5, night: 2 },
  },
  "acqua-di-gio-profondo-parfum": {
    name: "Acqua di Giò Profondo Parfum",
    fullName: "Acqua di Gio Profondo Parfum Giorgio Armani",
    brand: "Giorgio Armani",
    line: 'Acqua di Giò',
    year: 2024,
    description: `
      <p>Аромат Acqua di Gio Profondo втілює прохолоду океанських вод і свіжість цитрусових з трав'яними нотами лаванди та кипариса. Чуттєві акорди мускусу та амбри надають відчуття впевненості та сили.</p> <p>Цей аромат підкреслює мужність і харизму чоловіка. Стильний флакон із синього матового скла відображає елегантність аромату.</p>   `,
    rating: 4,
    image: ["images/perfumes/acqua-di-gio-profondo-parfum/acqua-di-gio-profondo-parfum.png",
            "images/perfumes/acqua-di-gio-profondo-parfum/acqua-di-gio-profondo-parfum-1.png",
            "images/perfumes/acqua-di-gio-profondo-parfum/acqua-di-gio-profondo-parfum-2.png",
    ],
    gender: "For Men",
    type: "Eau de Parfum",
    group: "Водні, Фужерний",
    sillage: "Висока",
    notes: {
      "Верхні ноти": ["Морські Ноти", "Зелений Мандарин"],
      "Середні ноти": ["Мімоза"],
      "Базові ноти": ["Пачулі", "Лабданум"]
    },
    images: [
            "images/perfumes/acqua-di-gio-profondo-parfum/acqua-di-gio-profondo-parfum-3.png",
            "images/perfumes/acqua-di-gio-profondo-parfum/acqua-di-gio-profondo-parfum-4.png",
            "images/perfumes/acqua-di-gio-profondo-parfum/acqua-di-gio-profondo-parfum-5.png",
    ],
    shops: [
      { name: "Brocard", url: "https://www.brocard.ua/ua/product/parfumovana-voda-armani-acqua-di-gio-profondo-100-ml-172769", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
      { name: "Notino", url: "https://www.notino.ua/armani/acqua-di-gio-profondo-parfum-parfumi-dlja-cholovikiv/p-16233729/", logo: "images/shops/notino.png", tooltip: "Європейський магазин парфумерії, найнижчі ціни" },
      { name: "aromateque", url: "https://aromateque.com.ua/ua/giorgio-armani-acqua-di-gio-profondo-parfum?search=acqua%20di%20gio", logo: "images/shops/aromateque.png", tooltip: "Низькі ціни та надійність, можливість спробувати аромат вживу у магазині"  },
    ],
    season: { spring: 5, summer: 5, autumn: 2, winter: 1 },
    daytime: { day: 5, night: 3 },
  },
  "acqua-di-gio-toilette": {
    name: "Acqua di Giò",
    fullName: "Acqua di Gio Giorgio Armani",
    brand: "Giorgio Armani",
    line: 'Acqua di Giò',
    year: 1996,
    description: `
      <p>Туалетна вода Acqua di Giò від Giorgio Armani втілює дух Середземномор'я. Її аромат відкривається свіжими морськими нотами з бергамотом, створюючи культову легкість. У серці поєднуються жасмин, кедр і розмарин, що нагадують про середземноморські пейзажі. Білий мускус і пачулі в базі додають маскулінної сили.</p> <p>Флакон аромату зберігає класичний стиль з матовим склом і поступово прозорою основою. Тепер його можна легко наповнювати повторно за допомогою рефіл-наповнювача 150 мл, що продається окремо.</p>
      `,
    rating: 4.1,
    image: ["images/perfumes/acqua-di-gio/acqua-di-gio.png",
            "images/perfumes/acqua-di-gio/acqua-di-gio-1.png",
            "images/perfumes/acqua-di-gio/acqua-di-gio-2.png",
            "images/perfumes/acqua-di-gio/acqua-di-gio-3.png",
            "images/perfumes/acqua-di-gio/acqua-di-gio-4.png",
    ],
    gender: "For Men",
    type: "Eau de Toilette",
    group: "Водні, Древесний, Цитрусові",
    sillage: "Легка",
    notes: {
      "Верхні ноти": ["Лайм", "Лимон", "Бергамот", "Жасмин", "Апельсин", "Мандарин", "Неролі"],
      "Середні ноти": ["Морські Ноти", "Жасмин", "Calone", "Розмарин", "Персик", "Фрезія", "Гіацинт", "Цикламен", "Фіалка", "Коріандр", "Троянда", "Мускатний горіх", "Резеда"],
      "Базові ноти": ["Білий Мускус", "Кедр", "Дубовий Мох", "Пачулі", "Амбра"]
    },
    images: [
            "images/perfumes/acqua-di-gio/acqua-di-gio-6.png",
            "images/perfumes/acqua-di-gio/acqua-di-gio-7.png",
            "images/perfumes/acqua-di-gio/acqua-di-gio-8.png",
            "images/perfumes/acqua-di-gio/acqua-di-gio-9.png",
            "images/perfumes/acqua-di-gio/acqua-di-gio-10.png",
    ],
    shops: [
      { name: "Brocard", url: "https://www.brocard.ua/ua/product/tualetna-voda-armani-acqua-di-gio-100-ml-172188?q=acqua%20di%20gi", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
      { name: "Notino", url: "https://www.notino.ua/armani/acqua-di-gio-tualetna-voda-z-mozhlivistju-povtornogo-napovnennja-dlja-cholovikiv/p-16231209/", logo: "images/shops/notino.png", tooltip: "Європейський магазин парфумерії, найнижчі ціни" },
      { name: "Ilya Parfumer", url: "https://ilyaparfumer.com.ua/tproduct/727629340-780072340591-giorgio-armani-acqua-di-gio", logo: "images/shops/ilyaparfumer.png", tooltip: "Є можливість замовити пробники" },

    ],
    season: { spring: 4, summer: 5, autumn: 1, winter: 1 },
    daytime: { day: 5, night: 1 },
  },
  "private-blend-tobacco-vanille": {
    name: "Tobacco Vanille",
    fullName: "Tom Ford Tobacco Vanille",
    brand: "Tom Ford",
    line: 'Private Blend',
    year: 2007,
    description: `
      <p>Tobacco Vanille від Tom Ford переосмислює класичний тютюновий аромат, надаючи йому сучасного та розкішного звучання. Насичене поєднання тютюну, ванілі, бобів тонка і сухофруктів створює глибокий, теплий характер із солодкими деревними й пряними відтінками.</p> 
      <p>Аромат викликає асоціації з елегантним джентльменським клубом і дарує відчуття сили, впевненості та чарівності. Це культова композиція, що залишає незабутнє враження.</p>
      `,
    rating: 4.21,
    image: ["images/perfumes/tobacco-vanille/tobacco-vanille.png",
    ],
    gender: "For Women and Men",
    type: "Eau de Parfum",
    sillage: "Висока",
    notes: {
      "Верхні ноти": ["Лист Тютюну", "Спецієві Ноти"],
      "Середні ноти": ["Ваніль", "Какао", "Боби тонка", "Цвіт Тютюну"],
      "Базові ноти": ["Сухофрукти", "Деревні Ноти"]
    },
    images: [
            
            "images/perfumes/tobacco-vanille/tobacco-vanille-1.png",
            "images/perfumes/tobacco-vanille/tobacco-vanille-2.png",
            "images/perfumes/tobacco-vanille/tobacco-vanille-3.png",
            "images/perfumes/tobacco-vanille/tobacco-vanille-4.png",
            "images/perfumes/tobacco-vanille/tobacco-vanille-5.png",
            "images/perfumes/tobacco-vanille/tobacco-vanille-6.png",
            "images/perfumes/tobacco-vanille/tobacco-vanille-7.png",
            "images/perfumes/tobacco-vanille/tobacco-vanille-8.png"
    ],
    shops: [
      { name: "Brocard", url: "https://www.brocard.ua/ua/product/parfumovana-voda-tom-ford-lost-cherry-100-ml-067840", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
      { name: "Ilya Parfumer", url: "https://ilyaparfumer.com.ua/top10tomford/tproduct/527731504-949414299221-tom-ford-lost-cherry", logo: "images/shops/ilyaparfumer.png", tooltip: "Є можливість замовити пробники" },
    ],
    season: { spring: 2, summer: 1, autumn: 4, winter: 5 },
    daytime: { day: 5, night: 3 }
  },
  "private-blend-lost-cherry": {
    name: "Lost Cherry",
    fullName: "Tom Ford Lost Cherry",
    brand: "Tom Ford",
    line: 'Private Blend',
    year: 2018,
    description: `
      <p>Lost Cherry від Tom Ford — це унісекс-аромат, у якому стигла чорна вишня поєднується з гірким мигдалем і солодким вишневим лікером. Композиція розкривається шовковистими нотами троянди, жасмину й сиропу Griotte, створюючи чуттєвий і провокаційний характер.</p> 
      <p>База аромату поєднує солодкість бобів тонка з глибокими деревними акордами сандалу, кедра і ветиверу. Lost Cherry — це флірт, що переходить у пристрасть, загорнутий у флакон кольору стиглої вишні.</p>
      `,
    rating: 4.1,
    image: ["images/perfumes/lost-cherry/lost-cherry.png",
    ],
    gender: "For Women and Men",
    type: "Eau de Parfum",
    sillage: "Середня",
    notes: {
      "Верхні ноти": ["Гіркий Мигдаль", "Чорна Вишня", "Вишневий Лікер"],
      "Середні ноти": ["Вишня", "Слива", "Турецька Троянда", "Жасмин Самбак"],
      "Базові ноти": ["Ваніль", "Боби Тонка", "Кориця", "Перу Бальзам", "Сандал", "Бензоїн", "Гвоздика", "Кедр", "Пачулі", "Ветивер"]
    },
    images: [
            "images/perfumes/lost-cherry/lost-cherry-1.png",
            "images/perfumes/lost-cherry/lost-cherry-2.png",
            "images/perfumes/lost-cherry/lost-cherry-3.png",
            "images/perfumes/lost-cherry/lost-cherry-4.png",
            "images/perfumes/lost-cherry/lost-cherry-5.png",
            "images/perfumes/lost-cherry/lost-cherry-6.png",
            "images/perfumes/lost-cherry/lost-cherry-7.png",
            "images/perfumes/lost-cherry/lost-cherry-8.png",
            "images/perfumes/lost-cherry/lost-cherry-9.png"
    ],
    shops: [
      { name: "Brocard", url: "https://www.brocard.ua/ua/product/parfumovana-voda-tom-ford-lost-cherry-100-ml-067840", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
      { name: "aromateque", url: "https://aromateque.com.ua/ua/tom-ford-lost-cherry?gad_source=1&gad_campaignid=22429184080&gbraid=0AAAAADmbqPJD1mBJ9nuUIc9XYLe5wa19h&gclid=Cj0KCQjwlYHBBhD9ARIsALRu09pKQKC2zkzQ5J7bvW2RVCBBXdy7JNvaY63LvXEFbrZviZfdqlywv_AaApHwEALw_wcB", logo: "images/shops/aromateque.png", tooltip: "Низькі ціни та надійність, можливість спробувати аромат вживу у магазині"  },
      { name: "Ilya Parfumer", url: "https://ilyaparfumer.com.ua/top10tomford/tproduct/527731504-949414299221-tom-ford-lost-cherry", logo: "images/shops/ilyaparfumer.png", tooltip: "Є можливість замовити пробники" },
    ],
    season: { spring: 3, summer: 2, autumn: 5, winter: 5 },
    daytime: { day: 5, night: 3 }
  },
  "private-blend-tobacco-vanille": {
    name: "Tobacco Vanille",
    fullName: "Tom Ford Tobacco Vanille",
    brand: "Tom Ford",
    line: 'Private Blend',
    year: 2007,
    description: `
      <p>Tobacco Vanille від Tom Ford переосмислює класичний тютюновий аромат, надаючи йому сучасного та розкішного звучання. Насичене поєднання тютюну, ванілі, бобів тонка і сухофруктів створює глибокий, теплий характер із солодкими деревними й пряними відтінками.</p> 
      <p>Аромат викликає асоціації з елегантним джентльменським клубом і дарує відчуття сили, впевненості та чарівності. Це культова композиція, що залишає незабутнє враження.</p>
      `,
    rating: 4.21,
    image: ["images/perfumes/tobacco-vanille/tobacco-vanille.png",
    ],
    gender: "For Women and Men",
    type: "Eau de Parfum",
    sillage: "Висока",
    notes: {
      "Верхні ноти": ["Лист Тютюну", "Спецієві Ноти"],
      "Середні ноти": ["Ваніль", "Какао", "Боби тонка", "Цвіт Тютюну"],
      "Базові ноти": ["Сухофрукти", "Деревні Ноти"]
    },
    images: [
            
            "images/perfumes/tobacco-vanille/tobacco-vanille-1.png",
            "images/perfumes/tobacco-vanille/tobacco-vanille-2.png",
            "images/perfumes/tobacco-vanille/tobacco-vanille-3.png",
            "images/perfumes/tobacco-vanille/tobacco-vanille-4.png",
            "images/perfumes/tobacco-vanille/tobacco-vanille-5.png",
            "images/perfumes/tobacco-vanille/tobacco-vanille-6.png",
            "images/perfumes/tobacco-vanille/tobacco-vanille-7.png",
            "images/perfumes/tobacco-vanille/tobacco-vanille-8.png"
    ],
    shops: [
      { name: "Brocard", url: "https://www.brocard.ua/ua/product/parfumovana-voda-tom-ford-lost-cherry-100-ml-067840", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
      { name: "Ilya Parfumer", url: "https://ilyaparfumer.com.ua/top10tomford/tproduct/527731504-949414299221-tom-ford-lost-cherry", logo: "images/shops/ilyaparfumer.png", tooltip: "Є можливість замовити пробники" },
    ],
    season: { spring: 2, summer: 1, autumn: 4, winter: 5 },
    daytime: { day: 5, night: 3 }
  },

  "black-orchid-parfum": {
    name: "Black Orchid",
    fullName: "Tom Ford Black Orchid",
    brand: "Tom Ford",
    line: 'Signature',
    year: 2006,
    description: `
      <p>Народжений пошуками Тома Форда ідеальної квітки, культовий аромат Black Orchid — це глибоке спокусливе зілля з чорних орхідей, прянощів і темних акордів.</p>
      <p>Розкішний і неординарний аромат з багатими, темними акордами, що зливаються з чуттєвою композицією чорної орхідеї і прянощів, Black Orchid одночасно сучасний і позачасовий — данина світському гламуру та культовому стилю.</p>
      `,
    rating: 3.9,
    image: [
      "images/perfumes/black-orchid-parfum/black-orchid-parfum.png",
      "images/perfumes/black-orchid-parfum/black-orchid-parfum-1.png",
      "images/perfumes/black-orchid-parfum/black-orchid-parfum-2.png",
    ],
    gender: "For Women",
    type: "Eau de Parfum",
    sillage: "Висока",
    notes: {
      "Верхні ноти": ["Трюфель", "Гарденія", "Чорна Смородина", "Іланг-Іланг", "Жасмин", "Бергамот", "Мандарин", "Лимон Амалфі"],
      "Середні ноти": ["Орхідея", "Спеції", "Гарденія", "Фруктові Ноти", "Іланг-Іланг", "Жасмин", "Лотос"],
      "Базові ноти": ["Мексиканський Шоколад", "Пачулі", "Ваніль", "Ладан", "Амбра", "Сандал", "Ветивер", "Білий Мускус"]
    },
    images: [
            "images/perfumes/black-orchid-parfum/black-orchid-parfum-3.png",
            "images/perfumes/black-orchid-parfum/black-orchid-parfum-4.png",
            "images/perfumes/black-orchid-parfum/black-orchid-parfum-5.png",
            "images/perfumes/black-orchid-parfum/black-orchid-parfum-6.png",
    ],
    shops: [
      { name: "Brocard", url: "https://www.brocard.ua/ru/product/parfyumirovannaya-voda-tom-ford-black-orchid-150-ml-001062?q=tom%20ford%20black", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
      { name: "Notino", url: "https://www.notino.ua/tom-ford/black-orchid-parfumovana-voda-dlja-zhinok/p-81443/", logo: "images/shops/notino.png", tooltip: "Європейський магазин парфумерії, найнижчі ціни" },
      { name: "Ilya Parfumer", url: "https://ilyaparfumer.com.ua/fragrancesofpurity/tproduct/527734449-674325937951-tom-ford-black-orchid", logo: "images/shops/ilyaparfumer.png", tooltip: "Є можливість замовити пробники" },
      { name: "aromateque", url: "https://aromateque.com.ua/ua/tom-ford-black-orchid", logo: "images/shops/aromateque.png", tooltip: "Низькі ціни та надійність, можливість спробувати аромат вживу у магазині"  }

    ],
    season: { spring: 2, summer: 1, autumn: 4, winter: 5 },
    daytime: { day: 2, night: 5}
  },


  "ombre-leather": {
    name: "Ombre Leather",
    fullName: "Tom Ford Ombre Leather",
    brand: "Tom Ford",
    line: '',
    year: 2018,
    description: `
      <p><strong>Ombre Leather</strong> поєднує в собі квіткові та шкіряні ноти, прянощі, нагадуючи про тихе повітря, відкриті простори та багатошарові ландшафти американського південного заходу.</p>
      <p>Пил на вітрі, шкіра на шкірі — аромат Ombré Leather відтворює атмосферу пустельного серця заходу. Це парфум про свободу, простір і чуттєвість.</p>
      <p>Насичена чорна шкіра переплітається з землистим пачулі й витонченим ветивером. Водночас жасмин самбак вносить квіткову делікатність, а теплі акорди амбри та моху надають аромату глибини, немов нагріті сонцем камені та пісок.</p>
      `,
    rating: 4.34,
    image: [
      "images/perfumes/ombre-leather/ombre-leather.png",
      "images/perfumes/ombre-leather/ombre-leather-1.png",
      "images/perfumes/ombre-leather/ombre-leather-2.png",
    ],
    gender: "For Women and Men",
    type: "Eau de Parfum",
    sillage: "Середня",
    notes: {
      "Верхні ноти": ["Кардамон"],
      "Середні ноти": ["Шкіра", "Жасмин Самбак"],
      "Базові ноти": ["Амбра", "Мох", "Пачулі"]
    },
    images: [
            "images/perfumes/ombre-leather/ombre-leather-3.png",
            "images/perfumes/ombre-leather/ombre-leather-4.png",
            "images/perfumes/ombre-leather/ombre-leather-5.png",
            "images/perfumes/ombre-leather/ombre-leather-6.png",
            "images/perfumes/ombre-leather/ombre-leather-7.png",
    ],
    shops: [
      { name: "Brocard", url: "https://www.brocard.ua/ua/product/parfumovana-voda-tom-ford-ombre-leather-150-ml-153555?q=ombre%20leather", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
      { name: "Notino", url: "https://www.notino.ua/tom-ford/ombre-leather-parfumovana-voda-dlja-cholovikiv/p-15952679/", logo: "images/shops/notino.png", tooltip: "Європейський магазин парфумерії, найнижчі ціни" },
    ],
    season: { spring: 2, summer: 1, autumn: 5, winter: 5 },
    daytime: { day: 3, night: 5}
  },

  "homme-intense": {
    name: "Homme Intense",
    fullName: "Dior Homme Intense",
    brand: "Dior",
    line: 'Homme',
    year: 2011,
    description: `
      <p>Dior Homme Intense — вишуканий квітково-деревний аромат, створений Франсуа Демаші у 2011 році як сміливе переосмислення класичної лінійки Dior Homme.</p>
      <p>Парфум поєднує пудрову ніжність ірису з легким зеленим акцентом і прохолодну мускусність амбретти.</p>
      <p>Завершується композиція теплим, благородним звучанням кедра, що додає глибини та стриманої елегантності.</p>
      `,
    rating: 4.5,
    image: [
      "images/perfumes/homme-intense/homme-intense.png",
      "images/perfumes/homme-intense/homme-intense-1.png",
      "images/perfumes/homme-intense/homme-intense-2.png",
    ],
    gender: "For Men",
    type: "Eau de Parfum",
    sillage: "Висока",
    notes: {
      "Верхні ноти": ["Лаванда"],
      "Середні ноти": ["Ірис", "Амбретта", "Груша"],
      "Базові ноти": ["Кедр З Вірджинії", "Ветивер"]
    },
    images: [
            "images/perfumes/homme-intense/homme-intense-3.png",
            "images/perfumes/homme-intense/homme-intense-4.png",
            "images/perfumes/homme-intense/homme-intense-5.png",
            "images/perfumes/homme-intense/homme-intense-6.png",
            "images/perfumes/homme-intense/homme-intense-7.png",
            "images/perfumes/homme-intense/homme-intense-8.png",

    ],
    shops: [
      { name: "Brocard", url: "https://www.brocard.ua/ua/product/parfumovana-voda-dior-homme-intense-100-ml-001372?gad_source=1&gad_campaignid=21998323564&gbraid=0AAAAADF0uBL981Qg4WYa96emoZsnEp4Hh&gclid=CjwKCAjwuIbBBhBvEiwAsNypvdVEDNI8gzuzKsmNkFWLJNgdh5tHnW0ARlrNebWUfOEcxcyF_SxzCRoCUOUQAvD_BwE", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
      { name: "Notino", url: "https://www.notino.ua/dior/dior-homme-intense-2011-parfumovana-voda-dlja-cholovikiv/p-64456/?gad_source=1&gad_campaignid=22291202830&gbraid=0AAAAADRCXFmvWixHHjtD1DqAIJEykYtAI&gclid=CjwKCAjwuIbBBhBvEiwAsNypveJsEDn3xgVqr5I7BMA0Cg7W7EJGJfWBn_krr2BiGniKoWkcwvxVAhoCJ4QQAvD_BwE", logo: "images/shops/notino.png", tooltip: "Європейський магазин парфумерії, найнижчі ціни" },
      { name: "Ilya Parfumer", url: "https://ilyaparfumer.com.ua/tproduct/727629340-145565174662-dior-homme-intense", logo: "images/shops/ilyaparfumer.png", tooltip: "Є можливість замовити пробники" },
    ],
    season: { spring: 2, summer: 1, autumn: 4, winter: 5 },
    daytime: { day: 2, night: 5 }
  },
  "aventus": {
    name: "Aventus",
    fullName: "Creed Aventus",
    brand: "Creed",
    line: 'Aventus',
    year: 2010,
    description: `
      <p>Creed Aventus — харизматичний та виразний аромат, що поєднує яскраві фруктові ноти з благородним деревним шлейфом. Він створений для впевнених у собі чоловіків, які цінують силу і витонченість одночасно.</p>
      <p>Початок вибухає ананасом, бергамотом і чорною смородиною, за якими слідують димні акорди берези й пачулі. База наповнена мускусом, дубовим мохом і теплом ванілі.</p>
      <p>Ідеальний для важливих подій і вечірніх виходів, Aventus залишає впізнаваний, довготривалий шлейф із відтінком лідерства.</p>
      `,
    rating: 4.33,
    image: [
      "images/perfumes/aventus/aventus.png"
    ],
    gender: "For Men",
    type: "Eau de Parfum",
    sillage: "Середня",
    notes: {
      "Верхні ноти": ["Лаванда", "Чорна Смородина", "Яблуко", "Лимон", "Рожевий Перець"],
      "Середні ноти": ["Ананас", "Пачулі", "Мароканський Жасмин"],
      "Базові ноти": ["Береза", "Мускус", "Дубовий Мох", "Амброксан", "Кедр"]
    },
    images: [
            "images/perfumes/aventus/aventus-1.png",
            "images/perfumes/aventus/aventus-2.png",
            "images/perfumes/aventus/aventus-3.png",
            "images/perfumes/aventus/aventus-4.png",
            "images/perfumes/aventus/aventus-5.png",
            "images/perfumes/aventus/aventus-6.png",
            "images/perfumes/aventus/aventus-7.png",
            "images/perfumes/aventus/aventus-8.png",

    ],
    shops: [
      { name: "Brocard", url: "https://www.brocard.ua/ua/product/parfumovana-voda-creed-aventus-50-ml-114599?q=creed%20aventus", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
      { name: "aromateque", url: "https://aromateque.com.ua/ua/creed-aventus-4?search=creed%20aventus", logo: "images/shops/aromateque.png", tooltip: "Низькі ціни та надійність, можливість спробувати аромат вживу у магазині"  },
      { name: "Ilya Parfumer", url: "https://ilyaparfumer.com.ua/lastvideo/tproduct/662589217-556027548712-creed-aventus", logo: "images/shops/ilyaparfumer.png", tooltip: "Є можливість замовити пробники" },
    ],
    season: { spring: 5, summer: 5, autumn: 4, winter: 3 },
    daytime: { day: 5, night: 4 }
  },
  "megamare": {
      name: "Megamare",
      fullName: "Orto Parisi Megamare",
      brand: "Orto Parisi",
      line: '',
      year: 2019,
      description: `
        <p>Orto Parisi Megamare — це не просто аромат, а повне занурення в океанську безодню, де вітер треє поверхню води, а хвилі зливаються з горизонтом. Він відкривається як вибух морської стихії, що розриває тишу серед безмежного простору. Це аромат для тих, хто шукає нові світи, що занурюють у хаос і тишу одночасно.</p>
        <p>Як холодний удар хвилі по обличчю, аромат наповнений солоним, свіжим і глибоким морем, яке прокидається після бурі. Тонкі деревні нотки нагадують про старі, позбавлені життя корабельні палуби, в яких все ще можна відчути відлуння бур, що панували багато років тому. Різка прохолода, що пронизує шкіру, нагадує леза льоду, що стирчать з темної води.</p>
        <p>Основний акорд амброксану, як нескінченний береговий штиль, додає аромату стабільності й глибини. Відчуваєш це, як поступове заспокоєння океанських хвиль після шторму, коли сила природи вщухає, але її присутність усе ще відчувається в кожному вдиху.</p>
        <p>Megamare — це океан без берегів, де ти блукаєш між стихіями та абсолютною тишею, залишаючи за собою слід, що триватиме довго, наче незабутній спогад про океанську подорож.</p>
        `,
      rating: 3.95,
      image: [
        "images/perfumes/megamare/megamare.png"
      ],
      gender: "For Women and Men",
      type: "Parfum",
      sillage: "Дуже висока",
      notes: {
        "Верхні ноти": ["Бергамот", "Лимон"],
        "Середні ноти": ["Морські Водорості", "Calone", "Hedione"],
        "Базові ноти": ["Мускус", "Амброксан", "Кедр"]
      },
      images: [
              "images/perfumes/megamare/megamare-1.png",
              "images/perfumes/megamare/megamare-2.png",
              "images/perfumes/megamare/megamare-3.png",
              "images/perfumes/megamare/megamare-4.png",
              "images/perfumes/megamare/megamare-5.png",
              "images/perfumes/megamare/megamare-6.png",
              "images/perfumes/megamare/megamare-7.png",
      ],
      shops: [
        { name: "Ilya Parfumer", url: "https://ilyaparfumer.com.ua/pagebest/tproduct/736927264-877617756991-orto-parisi-megamare", logo: "images/shops/ilyaparfumer.png", tooltip: "Є можливість замовити пробники" },
      ],
      season: { spring: 5, summer: 5, autumn: 2, winter: 3 },
      daytime: { day: 5, night: 3 }
    },

    "cuoium": {
      name: "Cuoium",
      fullName: "Orto Parisi Cuoium",
      brand: "Orto Parisi",
      line: '',
      year: 2021,
      description: `
        <p>Orto Parisi Cuoium — це аромат про зв’язок, про пам’ять, про безсмертя. У його серці — шкіра, але не як аксесуар, а як жива тканина, що зберігає історії, рани, досвід. Вона гірка, тваринна, майже священна. Аромат наче говорить: «Я залишу слід. Я був тут».</p>
        <p>Теплі димні акорди з перших нот обгортають, як стара куртка з м’якої вичиненої шкіри, яку носили роками. Потім проявляються медові переливи, зелені бальзамічні ноти, натяки на ладан і вологу деревину — аромат дихає, трансформується, живе. У ньому є і щось дикувате, і щось глибоко особисте, майже інтимне.</p>
        <p>Cuoium — це не просто парфум, це аромат-маніфест про слід, який ми залишаємо у світі. Важкий, шорсткий, але справжній. Для тих, хто не боїться бути собою.</p>
        `,
      rating: 4.01,
      image: [
        "images/perfumes/cuoium/cuoium.png"
      ],
      gender: "For Women and Men",
      type: "Parfum",
      sillage: "Дуже висока",
      notes: {
        "Верхні ноти": ["Анімалістичні Ноти", "Деревні Ноти"],
        "Середні ноти": ["Фіалка"],
        "Базові ноти": ["Шкіра", "Ладан", "Ялівцева Олія", "Кедр", "Лабданум", "Пачулі", "Ваніль"]
      },
      images: [
              "images/perfumes/cuoium/cuoium-1.png",
              "images/perfumes/cuoium/cuoium-2.png",
              "images/perfumes/cuoium/cuoium-3.png",
              "images/perfumes/cuoium/cuoium-4.png",
              "images/perfumes/cuoium/cuoium-5.png",
              "images/perfumes/cuoium/cuoium-6.png",
      ],
      shops: [
        { name: "Notino", url: "https://www.notino.ua/orto-parisi/cuoium-parfumovana-voda-uniseks/", logo: "images/shops/notino.png", tooltip: "Європейський магазин парфумерії, найнижчі ціни" },
        { name: "Ilya Parfumer", url: "https://ilyaparfumer.com.ua/pagebest/tproduct/736927264-171045196041-orto-parisi-cuoium", logo: "images/shops/ilyaparfumer.png", tooltip: "Є можливість замовити пробники" },
      ],
      season: { spring: 2, summer: 1, autumn: 5, winter: 5 },
      daytime: { day: 2, night: 5 }
    },

    "boccanera": {
      name: "Boccanera",
      fullName: "Orto Parisi Boccanera",
      brand: "Orto Parisi",
      line: '',
      year: 2014,
      description: `
        <p><strong>Orto Parisi Boccanera</strong> — це аромат-загадка, що балансує на межі світла й темряви. Його назва перекладається як «темний рот», і це чудово передає суть композиції — пристрасної, тваринної та майже небезпечної.</p>
        <p>На старті — вибух прянощів: чорний перець, імбир, кориця та чилі обпікають і збуджують. У центрі — темний шоколад, гіркий і глибокий, що створює враження солодкої темряви. У базі — анімалістичні відтінки, дерево, м'яка димність і тілесна теплота.</p>
        <p>Boccanera пахне, як поцілунок у темряві: трохи небезпечний, але такий, що неможливо забути. Це аромат для тих, хто не боїться бути провокаційним, для тих, хто обирає пристрасть замість компромісу.</p>
        `,
      rating: 3.98,
      image: [
        "images/perfumes/boccanera/boccanera.png"
      ],
      gender: "For Women and Men",
      type: "Parfum",
      sillage: "Дуже висока",
      notes: {
        "Верхні ноти": ["Перець Чилі", "Чорний Перець", "Імбир", "Какао Біб"],
        "Середні ноти": ["Жасмин"],
        "Базові ноти": ["Шоколад", "Мускус", "Шкіра", "Анімалістичні Ноти", "Кедр", "Пачулі", "Ваніль", "Цукор"]
      },
      images: [
              "images/perfumes/boccanera/boccanera-1.png",
              "images/perfumes/boccanera/boccanera-2.png",
              "images/perfumes/boccanera/boccanera-3.png",
              "images/perfumes/boccanera/boccanera-4.png",
              "images/perfumes/boccanera/boccanera-5.png",
      ],
      shops: [
        { name: "Ilya Parfumer", url: "https://ilyaparfumer.com.ua/pagebest/tproduct/736927264-523106094601-orto-parisi-boccanera", logo: "images/shops/ilyaparfumer.png", tooltip: "Є можливість замовити пробники" },
      ],
      season: { spring: 2, summer: 1, autumn: 5, winter: 5 },
      daytime: { day: 3, night: 5 }
    },

    "red-wood": {
      name: "Red Wood",
      fullName: "Dsquared2 Red Wood",
      brand: "Dsquared2",
      line: 'Wood Collection',
      year: 2019,
      description: `
        <p>Dsquared2 Red Wood — аромат для сучасної, яскравої жінки, сповненої емоцій і внутрішньої сили. Він створений для неї — чуттєвої, ніжної, але водночас рішучої та впевненої.</p>
        <p>Парфум відкривається свіжими іскрами червоного перцю та соковитої журавлини, задаючи енергійний тон із перших нот.</p>
        <p>У серці аромату — жіночність і м’якість: троянда, лічі й магнолія створюють елегантну квіткову симфонію.</p>
        <p>База дарує теплоту та глибину — мускус, кедр і амбра формують оксамитовий, делікатно чуттєвий шлейф.</p>
        <p>Яскравий червоний флакон втілює енергію, характер і індивідуальність власниці цього парфуму.</p>
        `,
      rating: 3.55,
      image: [
        "images/perfumes/red-wood/red-wood.png",
        "images/perfumes/red-wood/red-wood-1.png",
        "images/perfumes/red-wood/red-wood-2.png"
      ],
      gender: "For Women",
      type: "Eau de Toilette",
      sillage: "Середня",
      notes: {
        "Верхні ноти": ["Журавлина", "Рожевий Перець"],
        "Середні ноти": ["Лічі", "Троянда", "Магнолія"],
        "Базові ноти": ["Мускус", "Кедр", "Амбервуд"]
      },
      images: [
              "images/perfumes/red-wood/red-wood-3.png",
              "images/perfumes/red-wood/red-wood-4.png",
              "images/perfumes/red-wood/red-wood-5.png"
      ],
      shops: [
        { name: "Brocard", url: "https://www.brocard.ua/ua/product/tualetna-voda-dsquared2-red-wood-50-ml-086017?q=red%20wood%20dsquared", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
        { name: "Notino", url: "https://www.notino.ua/dsquared2/red-wood-tualetna-voda-dlja-zhinok/p-16056766/", logo: "images/shops/notino.png", tooltip: "Європейський магазин парфумерії, найнижчі ціни" },
      ],
      season: { spring: 5, summer: 5, autumn: 4, winter: 3 },
      daytime: { day: 5, night: 2 }
    },
    "bois-imperial": {
      name: "Bois Impérial",
      fullName: "Essential Parfums Bois Impérial",
      brand: "Essential Parfums",
      line: '',
      year: 2020,
      description: `
        <p>Essential Parfums Bois Impérial — енергійний і благородний деревно-пряний аромат, що гармонійно поєднує свіжість і глибину.</p>
        <p>Парфум розпочинається із яскравого вибуху зеленого тайського базиліку, що зливається з пряними, цитрусовими нотами неапальського перцю Тимут. Це контрастне поєднання створює атмосферу прохолоди й живої енергії, з першого моменту захоплюючи увагу.</p>
        <p>У серці композиції розкривається витончена деревна структура: землистий ветивер з Гаїті у гармонії з молекулою Геордживуд, що додає аромату сучасного кедрового звучання. Легкість і витонченість привносить Пэталія, що вносить квіткову свіжість.</p>
        <p>Завершує композицію Акігалавуд — унікальний інгредієнт, що переробляється з пачулі за допомогою біотехнологій. Його пряно-древесний характер підсилюється глибоким шлейфом індонезійського пачулі та тривалою стійкістю Амброфіксу.</p>
        <p>Bois Impérial — це аромат сили, чистоти та інтелігентної елегантності, що залишає незабутнє враження.</p>
        `,
      rating: 4.18,
      image: [
        "images/perfumes/bois-imperial/bois-imperial.png"
      ],
      gender: "For Women and Men",
      type: "Eau de Toilette",
      sillage: "Середня",
      notes: {
        "": ["Akigalawood", "Деревні Ноти", "Ветивер", "Базилік", "Перець Тімур", "Амброксан", "Пачулі"],
      },
      images: [
              "images/perfumes/bois-imperial/bois-imperial-1.png",
              "images/perfumes/bois-imperial/bois-imperial-2.png",
              "images/perfumes/bois-imperial/bois-imperial-3.png",
              "images/perfumes/bois-imperial/bois-imperial-4.png",
              "images/perfumes/bois-imperial/bois-imperial-5.png",
              "images/perfumes/bois-imperial/bois-imperial-6.png",
              "images/perfumes/bois-imperial/bois-imperial-7.png",
              "images/perfumes/bois-imperial/bois-imperial-8.png",
      ],
      shops: [
      { name: "aromateque", url: "https://aromateque.com.ua/ru/essential-parfums-bois-imperial", logo: "images/shops/aromateque.png", tooltip: "Низькі ціни та надійність, можливість спробувати аромат вживу у магазині"  },
      { name: "Ilya Parfumer", url: "https://ilyaparfumer.com.ua/pagebest/tproduct/736927264-875945237041-essential-parfums-bois-imprial", logo: "images/shops/ilyaparfumer.png", tooltip: "Є можливість замовити пробники" },
      ],
      season: { spring: 5, summer: 4, autumn: 5, winter: 3 },
      daytime: { day: 5, night: 3 }
    },
    "gentleman-toilette": {
      name: "Gentleman",
      fullName: "Givenchy Gentleman",
      brand: "Givenchy",
      line: 'Gentleman',
      year: 2017,
      description: `
        <p>Аромат, що втілює образ сучасного джентльмена — впевненого, елегантного та небайдужого до світу навколо. Він народжений з ідеї Юбера де Живанші: справжня елегантність починається з внутрішньої гармонії.</p>
        <p>Парфум відкривається свіжістю соковитої груші, яка надає йому молодості та життєвої енергії. У серці — несподіваний квітковий штрих: шляхетна лаванда плавно переходить в ірис, додаючи м'якості й інтелігентної витонченості.</p>
        <p>База дарує глибину й характер — землистий пачулі й насичена шкіра створюють стійкий, мужній шлейф, що виражає впевненість, самобутність та внутрішню силу.</p>
        `,
      rating: 3.9,
      image: [
        "images/perfumes/gentleman-toilette/gentleman-toilette.png",
        "images/perfumes/gentleman-toilette/gentleman-toilette-1.png",
        "images/perfumes/gentleman-toilette/gentleman-toilette-2.png"
      ],
      gender: "For Men",
      type: "Eau de Toilette",
      sillage: "Середня",
      notes: {
        "Верхні ноти": ["Груша", "Кардамон", "Ананас"],
        "Середні ноти": ["Ірис", "Лаванда", "Герань"],
        "Базові ноти": ["Шкіра", "Чорна Ваніль", "Пачулі"]
      },
      images: [
              "images/perfumes/gentleman-toilette/gentleman-toilette-3.png",
              "images/perfumes/gentleman-toilette/gentleman-toilette-4.png",
              "images/perfumes/gentleman-toilette/gentleman-toilette-5.png",
              "images/perfumes/gentleman-toilette/gentleman-toilette-6.png",
              "images/perfumes/gentleman-toilette/gentleman-toilette-7.png",
              "images/perfumes/gentleman-toilette/gentleman-toilette-8.png",
              
      ],
      shops: [
            { name: "Brocard", url: "https://www.brocard.ua/ua/product/tualetna-voda-givenchy-gentleman-60-ml-145913?gad_source=1&gad_campaignid=21988139655&gbraid=0AAAAADF0uBJOzLej4OXU3FPXJ3rhgrC3O&gclid=CjwKCAjwuIbBBhBvEiwAsNypvbvZz08QaX2x4HudjjmMZElfhp12TaqwAkQPwaHZ-IaxOK4-RPyzeRoCD5MQAvD_BwE", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
            { name: "Notino", url: "https://www.notino.ua/givenchy/gentleman-givenchy-2017-tualetna-voda-dlja-cholovikiv/p-16135027/", logo: "images/shops/notino.png", tooltip: "Європейський магазин парфумерії, найнижчі ціни" },
            { name: "aromateque", url: "https://aromateque.com.ua/ua/givenchy-gentleman-eau-de-toilette?search=gentleman", logo: "images/shops/aromateque.png", tooltip: "Низькі ціни та надійність, можливість спробувати аромат вживу у магазині"  },
      ],
      season: { spring: 5, summer: 3, autumn: 5, winter: 3 },
      daytime: { day: 5, night: 4 }
    },
    "la-vie-est-belle": {
      name: "La Vie Est Belle",
      fullName: "Lancôme La Vie Est Belle",
      brand: "Lancôme",
      line: 'La Vie Est Belle',
      year: 2012,
      description: `
        <p> Lancôme La Vie Est Belle — це квітково-фруктовий аромат для жінок, що став справжньою класикою сучасної парфумерії. Його створили у 2012 році парфумери Анн Фліппо, Олів’є Польж і Домінік Ропйон, заклавши в основу ідею радості, свободи та вміння цінувати прості моменти життя. </p>
        <p> Аромат відкривається солодкими акордами груші та соковитої чорної смородини. У серці розквітає поєднання жасмину, флердоранжу та пудрового ірису, що додає аромату витонченості та світла. </p>
        <p> База зігріває ніжністю ванілі, праліне, бобів тонка та глибоких пачулевих нот, залишаючи за собою шовковистий, солодкий і спокусливий шлейф. </p>
        `,
      rating: 3.64,
      image: [
        "images/perfumes/la-vie-est-belle/la-vie-est-belle.png",
        "images/perfumes/la-vie-est-belle/la-vie-est-belle-1.png",
        "images/perfumes/la-vie-est-belle/la-vie-est-belle-2.png",
      ],
      gender: "For Women",
      type: "Eau de Parfum",
      sillage: "Середня",
      notes: {
        "Верхні ноти": ["Чорна Смородина", "Груша"],
        "Середні ноти": ["Ірис", "Жасмин", "Апельсиновий Цвіт"],
        "Базові ноти": ["Праліне", "Ваніль", "Пачулі", "Боби Тонка"]
      },
      images: [
              "images/perfumes/la-vie-est-belle/la-vie-est-belle-3.png",
              "images/perfumes/la-vie-est-belle/la-vie-est-belle-4.png",
              "images/perfumes/la-vie-est-belle/la-vie-est-belle-5.png",
              "images/perfumes/la-vie-est-belle/la-vie-est-belle-6.png",
              "images/perfumes/la-vie-est-belle/la-vie-est-belle-7.png",

              
      ],
      shops: [
            { name: "Brocard", url: "https://www.brocard.ua/ua/product/parfumovana-voda-lancome-la-vie-est-belle-30-ml-001484", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
            { name: "Notino", url: "https://www.notino.ua/lancome/la-vie-est-belle-parfumovana-voda-dlja-zhinok/p-83697/", logo: "images/shops/notino.png", tooltip: "Європейський магазин парфумерії, найнижчі ціни" },
            { name: "Lancôme", url: "https://lancome.ua/fragrance/line/la-vie-est-belle", logo: "images/shops/lancome.png", tooltip: ""},
      ],
      season: { spring: 3, summer: 2, autumn: 5, winter: 5 },
      daytime: { day: 4, night: 4 }
    },
    "libre": {
      name: "Libre",
      fullName: "Yves Saint Laurent Libre",
      brand: "Yves Saint Laurent",
      line: 'Libre',
      year: 2019,
      description: `
        <p>Yves Saint Laurent Libre Eau de Parfum — це яскравий фруктово-квітковий аромат для жінок, який був створений у 2019 році. Його призначено для сильних і незалежних жінок, які не бояться виражати свою індивідуальність. Ідея свободи і самовираження відображена не тільки в композиції аромату, але й у дизайні флакону.</p>
        <p>Чорна кришка нагадує елегантну сукню і асиметричний капелюшок, а золоті ланцюжки на кришці та зухвалий логотип Yves Saint Laurent перегукуються з розкішними сумками бренду.</p>
        <p>Аромат починається свіжою, трав'яною лаванди з Франції, яка гармонійно поєднується з мандариновою свіжістю і глибоким ароматом чорної смородини. Цей перший акорд відразу привертає увагу, створюючи відчуття енергії та свободи.</p>
        <p>У серці аромату марокканський флердоранж зустрічається з вишуканим жасмином, а мускусний акорд надає композиції чуттєвості, підсиленої амброю та ніжною ваніллю. База з кедровими нотами додає бальзамічної свіжості, створюючи збалансовану, але потужну композицію.</p>
        <p>Libre — це аромат, який дарує відчуття летючого вітру серед квітучих садів і лавандових полів, наповнюючи кожен момент енергією і натхненням.</p>
        `,
      rating: 3.93,
      image: [
        "images/perfumes/libre/libre.png",
        "images/perfumes/libre/libre-1.png",
        "images/perfumes/libre/libre-2.png",
        "images/perfumes/libre/libre-3.png",
        "images/perfumes/libre/libre-4.png",
      ],
      gender: "For Women",
      type: "Eau de Parfum",
      sillage: "Середня",
      notes: {
        "Верхні ноти": ["Лаванда", "Мандарин", "Чорна Смородина", "Петитгрейн"],
        "Середні ноти": ["Лаванда", "Апельсиновий Цвіт", "Жасмин"],
        "Базові ноти": ["Мадагаскарська Ваніль", "Мускус", "Кедр", "Сіра Амбра"]
      },
      images: [
              "images/perfumes/libre/libre-5.png",
              "images/perfumes/libre/libre-6.png",
              "images/perfumes/libre/libre-7.png",
              "images/perfumes/libre/libre-8.png",
              "images/perfumes/libre/libre-9.png",
      ],
      shops: [
            { name: "Brocard", url: "https://www.brocard.ua/ua/product/parfumovana-voda-yves-saint-laurent-libre-50-ml-081744?gad_source=1&gad_campaignid=22414689983&gbraid=0AAAAADF0uBIjvEqjKHF-eoHAG36NadziY&gclid=CjwKCAjwuIbBBhBvEiwAsNypvRbphM4NE0SO5cdjPUgaXD6cmJk4Puxjg3WKEIjo9abLclwmc-yFOhoCtn8QAvD_BwE", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
            { name: "Notino", url: "https://www.notino.ua/yves-saint-laurent/libre-libre-parfumovana-voda-dlja-zhinok/p-15968532/", logo: "images/shops/notino.png", tooltip: "Європейський магазин парфумерії, найнижчі ціни" },
      ],
      season: { spring: 3, summer: 2, autumn: 5, winter: 5 },
      daytime: { day: 4, night: 4 }
    },

    "y-eau-de-parfum": {
      name: "Y",
      fullName: "Yves Saint Laurent Y",
      brand: "Yves Saint Laurent",
      line: 'Y',
      year: 2018,
      description: `
        <p>Чоловіча парфумована вода Y від Yves Saint Laurent — інтенсивна версія аромату 2018 року. Аромат поєднує пряний шавлій з хвойним ялівцем, освіжаючою м'ятою і легким відтінком герані. Боби тонка додають п'янкий східний характер, створюючи ауру впевненості та сили. Ідеальний аромат для чоловіка, який здійснив свої мрії та продовжує рухатися вперед.</p>
        `,
      rating: 4.4,
      image: [
        "images/perfumes/y-eau-de-parfum/y.png",
        "images/perfumes/y-eau-de-parfum/y-1.png",
        "images/perfumes/y-eau-de-parfum/y-2.png",
      ],
      gender: "For Men",
      type: "Eau de Parfum",
      sillage: "Середня",
      notes: {
        "Верхні ноти": ["Яблуко", "Імбир", "Бергамот"],
        "Середні ноти": ["Шавлія", "Ягоди Ялівцю", "Герань"],
        "Базові ноти": ["Амбервуд", "Боби Тонка", "Кедр", "Ветивер", "Олібанум"]
      },
      images: [
              "images/perfumes/y-eau-de-parfum/y-3.png",
              "images/perfumes/y-eau-de-parfum/y-4.png",
              "images/perfumes/y-eau-de-parfum/y-5.png"
      ],
      shops: [
            { name: "Brocard", url: "https://www.brocard.ua/ua/product/parfumovana-voda-yves-saint-laurent-y-100-ml-068432", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
            { name: "Notino", url: "https://www.notino.ua/yves-saint-laurent/y-parfumovana-voda-dlja-cholovikiv/p-15775663/", logo: "images/shops/notino.png", tooltip: "Європейський магазин парфумерії, найнижчі ціни" },
      ],
      season: { spring: 3, summer: 2, autumn: 5, winter: 5 },
      daytime: { day: 4, night: 4 }
    },

    "baccarat-rouge-540-extrait-de-parfum": {
      name: "Baccarat Rouge 540 Extrait de Parfum",
      fullName: "Maison Francis Kurkdjian Baccarat Rouge 540 Extrait de Parfum",
      brand: "Maison Francis Kurkdjian",
      line: 'Baccarat Rouge 540',
      year: 2017,
      description: `
        <p>Baccarat Rouge 540 Extrait de Parfum — це не просто аромат, а яскраве сяйво, втілене у флаконі. Створений Франсісом Кюркджяном для справжніх поціновувачів високої парфумерії, цей парфум ніби огортає шкіру тонкою вуаллю дорогоцінного світла.</p>
        <p>Він починається з дотика гіркого мигдалю та шафрану — поєднання, що одразу викликає відчуття чогось рідкісного та загадкового. У серці — потужний жасмин та кедр, які звучать глибоко, насичено й оксамитово. А завершення — вибух чуттєвості завдяки амбровим деревним акордам та солодкій, майже карамельній смолі, що залишають після себе незабутній шлейф.</p>
        <p>Це аромат про блиск, про таємницю, про внутрішню силу. Baccarat Rouge 540 Extrait — як спалах світла у темряві, який не можна забути.</p>
        `,
      rating: 4.23,
      image: [
        "images/perfumes/baccarat-rouge-540-extrait-de-parfum/baccarat-rouge-540-extrait-de-parfum.png",
        "images/perfumes/baccarat-rouge-540-extrait-de-parfum/baccarat-rouge-540-extrait-de-parfum-1.png",
        "images/perfumes/baccarat-rouge-540-extrait-de-parfum/baccarat-rouge-540-extrait-de-parfum-2.png",

      ],
      gender: "For Women and Men",
      type: "Extrait de Parfum",
      sillage: "",
      notes: {
        "Верхні ноти": ["Гіркий Мигдаль", "Шафран"],
        "Середні ноти": ["Єгипетський Жасмин", "Кедр З Вірджинії"],
        "Базові ноти": ["Сіра Амбра", "Деревні Ноти", "Мускус", "Амброксан", "Cashmeran"]
      },
      images: [
              "images/perfumes/baccarat-rouge-540-extrait-de-parfum/baccarat-rouge-540-extrait-de-parfum-3.png",
              "images/perfumes/baccarat-rouge-540-extrait-de-parfum/baccarat-rouge-540-extrait-de-parfum-4.png",
              "images/perfumes/baccarat-rouge-540-extrait-de-parfum/baccarat-rouge-540-extrait-de-parfum-5.png",
              "images/perfumes/baccarat-rouge-540-extrait-de-parfum/baccarat-rouge-540-extrait-de-parfum-6.png",
              "images/perfumes/baccarat-rouge-540-extrait-de-parfum/baccarat-rouge-540-extrait-de-parfum-7.png",
              "images/perfumes/baccarat-rouge-540-extrait-de-parfum/baccarat-rouge-540-extrait-de-parfum-8.png",
      ],
      shops: [
            { name: "aromateque", url: "https://aromateque.com.ua/ua/maison-francis-kurkdjian-baccarat-rouge-540-extrait-de-parfum-1", logo: "images/shops/aromateque.png", tooltip: "Низькі ціни та надійність, можливість спробувати аромат вживу у магазині"  },
      ],
      season: { spring: 4, summer: 2, autumn: 5, winter: 5 },
      daytime: { day: 4, night: 5 }
    },
    "good-girl": {
      name: "Good Girl",
      fullName: "Carolina Herrera Good Girl",
      brand: "Carolina Herrera",
      line: 'Good Girl',
      year: 2016,
      description: `
        <p>Carolina Herrera Good Girl Eau de Parfum — це квітковий аромат для жінок, що вийшов у 2016 році. Над композицією працювала парфумер Луїза Тернер.</p>
        <p>Аромат створено на контрастах: світле і темне, м’якість і чуттєвість. У ньому — сила, стиль і жіночність.</p>
        <p>У верхніх нотах — бергамот, лимон, чорна кава і гіркуватий мигдаль. У серці — тубероза, флердоранж, жасмин самбак, ірис і троянда. База гурманська: какао, праліне, ваніль, кориця, боби тонка, кедр, сандал, пачулі, мускус і амбра.</p>
        <p>Це аромат ефектної жінки, яка впевнено входить до залу, залишаючи після себе розкішний шлейф і мовчазне захоплення.</p>
        `,
      rating: 3.94,
      image: [
        "images/perfumes/good-girl/good-girl.png",
        "images/perfumes/good-girl/good-girl-1.png",
        "images/perfumes/good-girl/good-girl-2.png",

      ],
      gender: "For Women",
      type: "Eau de Parfum",
      sillage: "",
      notes: {
        "Верхні ноти": ["Мигдаль", "Кава", "Бергамот", "Лимон"],
        "Середні ноти": ["Тубероза", "Жасмин Самбак", "Апельсиновий Цвіт", "Болгарська Троянда", "Ірис"],
        "Базові ноти": ["Боби Тонка", "Какао", "Ваніль", "Праліне", "Сандал", "Мускус", "Амбра", "Кашемірове Дерево", "Пачулі", "Кориця", "Кедр"]
      },
      images: [
              "images/perfumes/good-girl/good-girl-3.png",
              "images/perfumes/good-girl/good-girl-4.png",
              "images/perfumes/good-girl/good-girl-5.png",
              "images/perfumes/good-girl/good-girl-6.png",
      ],
      shops: [
            { name: "Brocard", url: "https://www.brocard.ua/ru/product/parfyumirovannaya-voda-carolina-herrera-good-girl-80-ml-134225?gad_source=1&gad_campaignid=21988025991&gbraid=0AAAAADF0uBIsBQ9emdRGiXpcBVtYBtzhe&gclid=CjwKCAjwuIbBBhBvEiwAsNypvR6I19XpCvRT9Gb60dZXAY7RjAluw8BWTBw3G2JSLru1u8cdk5k1YhoC4TUQAvD_BwE", logo: "images/shops/brocard.png", tooltip: "Найбільший представник парфумерії в Україні, можливість спробувати аромат у магазині" },
            { name: "Notino", url: "https://www.notino.ua/carolina-herrera/good-girl-parfumovana-voda-dlja-zhinok/p-16232983/", logo: "images/shops/notino.png", tooltip: "Європейський магазин парфумерії, найнижчі ціни" },
      ],
      season: { spring: 2, summer: 1, autumn: 4, winter: 5 },
      daytime: { day: 3, night: 5 }
    },
};

const notesData = {
  "Ялівець": {
    image: "images/notes/juniper.png",
    description: "Свіжий, яскравий, трохи хвойний аромат.",
    associations: "Прогулянка в лісі, прохолодний ранок."
  },
  "Рожевий перець": {
    image: "images/notes/pink-pepper.png",
    description: "Свіжий, трохи гострий із квітковим відтінком.",
    associations: "Весняний бруньковий сад."
  },
  "Рожевий Перець": {
    image: "images/notes/pink-pepper.png",
    description: "Свіжий, трохи гострий із квітковим відтінком.",
    associations: "Весняний бруньковий сад."
  },
  "Лаванда": {
    image: "images/notes/lavendar.png",
    description: "Солодкуватий, квітковий, заспокійливий аромат.",
    associations: "Поле лаванди під вечірнім небом."
  },
  "Кориця": {
    image: "images/notes/cinnamon.png",
    description: "Теплий, пряний, солодкуватий з коричним відтінком.",
    associations: "Смачні випічки та свята."
  },
  "Шавлія": {
    image: "images/notes/sage.png",
    description: "Землистий, пряний і трохи деревний аромат.",
    associations: "Сільський будинок біля саду."
  },
  "Амбра": {
    image: "images/notes/amber.png",
    description: "Теплий, смолистий, з легкою солодкістю.",
    associations: "Морський бриз і теплий пісок."
  },
  "Боби тонка": {
    image: "images/notes/tonka-bean.png",
    description: "Солодкуватий, ванільно-медовий відтінок.",
    associations: "Свіжий мед у дерев’яному горщику."
  },
  "Боби Тонка": {
    image: "images/notes/tonka-bean.png",
    description: "Солодкуватий, ванільно-медовий відтінок.",
    associations: "Свіжий мед у дерев’яному горщику."
  },
  "Каштанове глясе": {
    image: "images/notes/marrons-glaces.png",
    description: "Солодкий, горіховий з карамельним шаром.",
    associations: "Зимова випічка до чаю."
  },
  "Ваніль": {
    image: "images/notes/vanilla.png",
    description: "М’який, солодкий і гріючий аромат.",
    associations: "Ніжний десерт на свято."
  },
  "Ром": {
    image: "images/notes/rum.png",
    description: "Темний, густий і п'янкий аромат рому додає парфуму тепло, насиченість та нотку солодкого алкоголю."
  },
  "Елемі": {
    image: "images/notes/elemi.png",
    description: "Елемі — смола з цитрусово-пряним характером. Її аромат надає свіжості з легким відтінком перцю та лимону."
  },
  "Бергамот": {
    image: "images/notes/bergamot.png",
    description: "Бергамот — яскравий і цитрусовий, з легкою гірчинкою. Освіжає композицію й надає їй витонченості."
  },
  "Давана": {
    image: "images/notes/davana.png",
    description: "Давана має зелену, фруктову та трохи лікерну глибину. Робить аромат індивідуальним і оксамитовим."
  },
  "Кінський каштан": {
    image: "images/notes/chestnut.png",
    description: "Кінський каштан додає солодких, теплих і злегка горіхових відтінків, створюючи гурманську глибину."
  },
  "Кінський Каштан": {
    image: "images/notes/chestnut.png",
    description: "Кінський каштан додає солодких, теплих і злегка горіхових відтінків, створюючи гурманську глибину."
  },
  "Кедр": {
    image: "images/notes/cedar.png",
    description: "Кедрова деревина приносить спокій і стійкість. Її деревні ноти заземлюють аромат і додають характеру."
  },
  "Пачулі": {
    image: "images/notes/patchouli.png",
    description: "Пачулі — земляна, глибока і трохи димна нота. Часто використовується для додавання чуттєвості та шлейфу."
  },
  "Каштан": {
    image: "images/notes/chestnut.png",
    description: "Гурманський, теплий і злегка горіховий акорд, який створює відчуття домашнього затишку та осінньої атмосфери."
  },
  "Цукор": {
    image: "images/notes/sugar.png",
    description: "Солодкий, карамельний аромат, що надає композиції десертного звучання і підсилює її апетитність."
  },
  "Дим": {
    image: "images/notes/smoke.png",
    description: "Таємничий, глибокий і трохи суворий акорд, який додає аромату характеру, глибини і загадковості."
  },
  "Лабданум": {
    image: "images/notes/labdanum.png",
    description: "Тепла, смолиста нота з шкіряними й бурштиновими відтінками, що додає аромату глибини та чуттєвості."
  },
  "Грейпфрут": {
    image: "images/notes/grapefruit.png",
    description: "Яскрава, кисло-свіжа цитрусова нота з характерною гіркуватістю, що заряджає енергією та оживляє композицію."
  },
  "Герань": {
    image: "images/notes/geranium.png",
    description: "Ароматична квіткова нота з легкими м'ятними й зеленими відтінками, що додає парфуму чистоти й свіжості."
  },
  "Мандарин": {
    image: "images/notes/mandarin.png",
    description: "Соковита, яскрава і трохи кислувата цитрусова нота, що дарує аромату відчуття свіжості, легкості та енергії. Мандарин додає композиції сонячного настрою та асоціюється з радістю, святами й теплими спогадами.",
  },
  "Спеції": {
    image: "images/notes/spices.png",
    description: "Теплий і пряний акорд, що миттєво розпалює уяву: у ньому відчувається подих далеких країн, відлуння кардамону, кориці й перцю, які дарують енергію та легку гостроту відчуттів."
  },
  "Шкіра": {
    image: "images/notes/leather.png",
    description: "Глибокий, благородний і трохи строгий акорд — наче поношена книжкова палітурка або улюблена шкіряна куртка. Він додає аромату характеру, сили та відчуття впевненості."
  },
  "Дерево Гуаяк": {
    image: "images/notes/guaiac-wood.png",
    description: "Сухий, дерев’яний і трохи димний акорд, що нагадує старий майстерний стіл чи вогнище в глибині лісу. Він приносить ароматові текстуру, землю і відчуття зв’язку з природою."
  },
  "Дерево Агар": {
    image: "images/notes/agarwood.png",
    description: "Темний, насичений і медитативний акорд — як аромат стародавнього храму чи ароматичної смоли. Він огортає шлейфом глибини, таємниці й внутрішнього спокою."
  },
  "Мускатний горіх": {
    image: "images/notes/nutmeg.png",
    description: "Ледь пряний, теплий і трохи деревний, він додає глибини та характеру, немов невидимий штрих, що оживлює полотно спокійної елегантності.",
  },
  "Зелений Мандарин": {
    image: "images/notes/mandarin.png",
    description: "Свіжий, соковитий та трохи терпкий — як промінь ранкового сонця, що проривається крізь густу зелену листву. Він пробуджує енергію та надає аромату життєрадісності."
  },
  "Лист Фіалки": {
    image: "images/notes/violet-leaf.png",
    description: "Тонкий, прохолодний і водночас ніжний, немов шелест листя після весняного дощу. Він огортає аромат м’якою зеленню та чистотою."
  },
  "Водяні Ноти": {
    image: "images/notes/water-notes.png",
    description: "Чиста, прозора свіжість, що нагадує про морську гладь або кришталево чисте джерело. Вони створюють відчуття простору, легкості та гармонії."
  },
  "Ветивер": {
    image: "images/notes/vetiver.png",
    description: "Землистий, сухий і благородний, він закріплює аромат і надає йому стійкої глибини. Це основа, на якій тримається впевненість і спокій."
  },
  "Морські Ноти": {
    image: "images/notes/sea-notes.png",
    description: "Морські ноти створюють відчуття свіжості та чистоти, нагадуючи про безкрайні океанські простори. Вони приносять з собою вітер, солону воду і необмежену свободу, даруючи аромату легкість і прозорість, що освіжає й пробуджує почуття."
  },
  "Aquozone": {
    image: "images/notes/aquozone.png",
    description: "Aquozone — це синтез водяних і повітряних елементів, що створює ефект безмежної свіжості. Ця молекула передає відчуття прохолоди і чистоти, нагадуючи про відкрите море і вологу атмосферу, наповнену природною енергією.",
  },
  "Розмарин": {
    image: "images/notes/rosemary.png",
    description: "Розмарин — це пряна трава з гострими, зеленими нотами, яка має заспокійливий та одночасно стимулюючий ефект. Його аромат часто асоціюється з ароматними ландшафтами середземномор'я, додаючи свіжості та глибини композиціям."
  },
  "Кипарис": {
    image: "images/notes/cypress.png",
    description: "Кипарис має деревний, але свіжий аромат, що нагадує про великі зелені простори лісів. Він дарує відчуття спокою та сили, часто використовується для додавання легких деревних нот до композицій, що передають атмосферу природи і безпеки."
  },
  "Мастикове Дерево": {
    image: "images/notes/mastic-or-lentisque.png",
    description: "Мастикове дерево приносить з собою теплі, смолисті відтінки, що надають аромату солодкуватої терпкості. Його аромат асоціюється з вишуканістю і класикою, привносячи відчуття тепла та затишку, а також легку деревну глибину."
  },
  "Мінеральні Ноти": {
    image: "images/notes/mineral-notes.png",
    description: "Мінеральні ноти — це акценти, що створюють відчуття глибини і суворості. Вони передають холодні, кам'янисті відтінки, що нагадують про скелі і камені, додаючи аромату чистоту і чіткість, підкреслюючи його природну силу та витончену простоту."
  },
  "Мускус": {
    image: "images/notes/musk.png",
    description: "Мускус — це глибокий, тягучий аромат, що часто асоціюється з теплом та чуттєвістю. Він має м'який, але в той же час дуже виразний характер, додаючи композиціям гармонії та глибини. Мускус дарує відчуття тепла, підкреслюючи енергію та чарівність."
  },
  "Мімоза": {
    image: "images/notes/mimosa.png",
    description: "Мімоза дарує аромату легкість, ніжність і весняну яскравість. Її пудрово-квітковий відтінок огортає теплом і сонячним світлом, викликаючи асоціації з першими променями сонця та безтурботними моментами. Вона додає композиції елегантної м’якості, створюючи атмосферу радості та спокою."
  },
  "Малина": {
  image: "images/notes/raspberry.png",
  description: "Малина дарує аромату свіжість, фруктову солодкість та легку кислинку. Вона викликає асоціації з літніми днями та спокійними моментами на природі."
  },
  "Лимон": {
    image: "images/notes/lemon.png",
    description: "Лимон приносить у композицію яскраву кислинку, освіжаючи і бадьорячи. Його цитрусовий аромат наповнює енергією та світлом."
  },
  "Неролі": {
    image: "images/notes/neroli.png",
    description: "Неролі додає легкий квітковий аромат з нотами апельсинових квітів. Вона надає композиції ніжність і елегантність."
  },
  "Троянда": {
    image: "images/notes/rose.png",
    description: "Троянда приносить в аромат класичну квіткову розкіш, з її теплими, солодкими і розкішними відтінками, що символізують любов і елегантність."
  },
  "Амбервуд": {
    image: "images/notes/amberwood.png",
    description: "Амбервуд дарує глибокий і теплий аромат, з нотами деревини та смоли, що створюють багатий, але вишуканий шлейф, надаючи композиції спокій та розкіш."
  },
  "Лайм": {
    image: "images/notes/lime.png",
    description: "Соковитий, яскравий та терпкий цитрусовий аромат із легкою кислинкою.", 
    associations: "Тропічні коктейлі, освіжаючі літні напої, м’ятно-лаймові десерти" 
  },
  "Жасмин": {
    image: "images/notes/jasmine.png",
    description: "Насичений, солодко-квітковий та медовий аромат, який дарує відчуття ніжності і розкоші.", 
  },
  "Апельсин": {
    image: "images/notes/orange.png",
    description: "Солодкий і сонячний аромат соковитого апельсина з легким фруктовим відтінком.", 
  },
  "Calone": {
    image: "images/notes/calone.png",
    description: "Морська, океанічна та озонова свіжість із легкою водянистою прохолодою, що нагадує бриз над хвилями.", 
    associations: "Морський бриз"  
  },
  "Персик": {
    image: "images/notes/peach.png",
    description: "Ніжний, соковитий і солодкий аромат стиглого персика з фруктовою м’якістю і делікатною теплістю.", 
    associations: "Фруктові десерти, літні фруктові салати" 
  },
  "Фрезія": {
    image: "images/notes/freesia.png",
    description: "Світлий, дуже квітковий аромат із ніжними фруктово-солодкими відтінками.", 
    associations: "Букети, весняні свята"
  },
  "Гіацинт": {
    image: "images/notes/hiacynth.png",
    description: "Яскравий, зеленувато-квітковий та трохи пряний аромат, що нагадує весняний сад після дощу.", 
    associations: "Весняні букети, садові прогулянки, легка прохолода" 
  },
  "Цикламен": {
    image: "images/notes/cyclamen.png",
    description: "Легкий, свіжий та злегка пудровий квітковий аромат із зелено-листовими відтінками.", 
  },
  "Фіалка": {
    image: "images/notes/violet-leaf.png",
    description: "Зелений, трохи пудровий та тонко-квітковий аромат, що додає композиції ніжності й свіжості.", 
  },
  "Коріандр": {
    image: "images/notes/coriander.png",
    description: "Теплий, пряний і трохи цитрусовий аромат з деревними відтінками.", 
  },
  "Резеда": {
    image: "images/notes/mignonette.png",
    description: "Солодко-зелений та квітковий аромат із легкою пряністю і трав’янистими ньюансами.", 
  },
  "Білий Мускус": {
    image: "images/notes/musk.png",
    description: "Чистий, м’який і шкіряний аромат з легким теплим шлейфом", 
  },
  "Дубовий Мох": {
    image: "images/notes/oakmoss.png",
    description: "Землистий та лісовий аромат, що додає композиції глибини й старовинного шарму.", 
    associations: "Старі дерева, шкіряні вироби"
  },
  "Лист Тютюну": {
  image: "images/notes/tobacco-leaf.png",
  description: "Теплий, трохи гіркуватий і сухий аромат, що нагадує свіжозібраний лист тютюну, висушений на сонці. Він додає глибини, мужності й певної ретро-елегантності."
  },
  "Спецієві Ноти": {
    image: "images/notes/spices.png",
    description: "Пряна, розігріта суміш ароматів — від кориці до гвоздики, що створює тепло, характер і загадковість. Вона надає парфуму пульс і внутрішній вогонь."
  },
  "Какао": {
    image: "images/notes/cacao.png",
    description: "Гіркувато-солодкий, глибокий і обволікаючий аромат, що викликає асоціації з темним шоколадом, м’яким теплом і затишком. Какао додає чуттєвості та гастрономічної інтризи."
  },
  "Цвіт Тютюну": {
    image: "images/notes/tobacco-blossom.png",
    description: "М'який, трохи солодкуватий і повітряний аромат із легкою зеленою гіркуватістю. Він надає тютюновим парфумам витонченості та світлого акценту."
  },
  "Сухофрукти": {
    image: "images/notes/dried-fruits.png",
    description: "Солодкі, злегка ферментовані ноти інжиру, родзинок чи кураги, що додають парфуму густоти, глибини і ностальгійного тепла."
  },
  "Деревні Ноти": {
    image: "images/notes/woody-notes.png",
    description: "База з натуральної деревини — суха, тепла, землиста або смолиста. Це основа композиції, що надає стійкість, баланс і відчуття близькості до природи."
  },
  "Гіркий Мигдаль": {
  image: "images/notes/bitter-almond.png",
  description: "Насичений, злегка лікерний та загадковий аромат із характерною гірчинкою. Він додає композиції розкішної глибини та трохи зухвалої елегантності."
  },
  "Чорна Вишня": {
    image: "images/notes/black-cherry.png",
    description: "Темна, соковита й трохи тягуча нота, що поєднує в собі солодкість і краплю гіркоти. Вона створює ефектну атмосферу спокуси та вечірньої драматичності."
  },
  "Вишневий Лікер": {
    image: "images/notes/cherry-liqueur.png",
    description: "Нота п'янкої солодкості з глибоким ягідним звучанням і шлейфом алкоголю. Вона додає аромату розкоші, інтенсивності й чуттєвого настрою."
  },
  "Вишня": {
    image: "images/notes/sour-cherry.png",
    description: "Свіжа, фруктова і солодка нота, що нагадує соковиту стиглу ягоду. Вона створює грайливий, легкий і привабливий настрій у композиції."
  },
  "Слива": {
    image: "images/notes/plum.png",
    description: "Темна, бархатиста й злегка карамелізована фруктова нота, що надає глибини, м'якості та загадкової привабливості."
  },
  "Турецька Троянда": {
    image: "images/notes/rose.png",
    description: "Насичена, чуттєва й вишукана квіткова нота з солодкуватим східним акцентом. Вона створює ефектну емоційну ауру витонченості."
  },
  "Жасмин Самбак": {
    image: "images/notes/jasmine.png",
    description: "Білий, яскравий і солодкий жасмин із кремовими відтінками, що розкривається теплом шкіри. Він додає світла, романтики й витонченості."
  },
  "Перу Бальзам": {
    image: "images/notes/peru-balsam.png",
    description: "Солодкий, густий і трохи смолистий аромат з ванільно-амбровим звучанням. Він дарує глибоке тепло, затишок і спокій."
  },
  "Сандал": {
    image: "images/notes/sandalwood.png",
    description: "Кремовий, м’який і благородний деревний акорд, що огортає шлейфом спокою та внутрішньої гармонії. Він додає елегантності й стійкості."
  },
  "Бензоїн": {
    image: "images/notes/benzoin.png",
    description: "Солодкий, ванільно-смолистий акорд із легким пряним відтінком. Він м’яко закутує аромат, додаючи глибини та теплоти."
  },
  "Гвоздика": {
    image: "images/notes/cloves.png",
    description: "Яскрава, пряна й трохи пекуча спеція, що вносить у композицію драму, тепло і старовинну аптечну благородність."
  },
  "Ірис": {
  image: "images/notes/iris.png",
  description: "Пудрова, ніжна й трохи зелена квіткова нота з шовковистою текстурою. Вона додає аромату вишуканості, витонченості та легкої загадковості."
  },
  "Амбретта": {
    image: "images/notes/ambrette.png",
    description: "М’яка, мускусна нота з ледь металевим відтінком і прохолодною свіжістю. Вона надає аромату прозорості, глибини та природної елегантності."
  },
  "Груша": {
    image: "images/notes/pear.png",
    description: "Соковита, ніжна й солодкувата фруктова нота з легким водянистим тоном. Вона створює відчуття свіжості, легкості й юнацького тепла."
  },
  "Кедр З Вірджинії": {
    image: "images/notes/cedar.png",
    description: "Чистий, сухий і благородний деревний акорд з м’якою терпкістю. Він додає композиції ясності, сили та витриманої структури."
  },
  "Чорна Смородина": {
  image: "images/notes/black-currant.png",
  description: "Яскрава, кисло-солодка ягідна нота з зеленим і ледь терпким відтінком. Вона оживлює аромат, додаючи йому енергії, соковитості та характеру."
  },
  "Яблуко": {
    image: "images/notes/apple.png",
    description: "Свіжа, хрустка й трохи кислувата фруктова нота, що асоціюється з чистотою, молодістю та легкістю."
  },
  "Ананас": {
    image: "images/notes/pineapple.png",
    description: "Соковита, яскрава й солодко-кисла тропічна нота, яка додає парфуму екзотики, життєрадісності та сучасного звучання."
  },
  "Мароканський Жасмин": {
    image: "images/notes/jasmine.png",
    description: "Ніжна, трохи солодка квіткова нота з теплим, медовим відтінком. Вона надає композиції м’якості, жіночності й сонячної теплоти."
  },
  "Береза": {
    image: "images/notes/birch.png",
    description: "Димна, шкіряна й трохи смоляниста деревна нота, що додає аромату глибини, сили та чоловічої рішучості."
  },
  "Амброксан": {
    image: "images/notes/ambroxan.png",
    description: "Сучасний амброво-мускусний акорд з кристалічною чистотою та легкою солонуватістю. Він створює об’єм, шлейф і неймовірну стійкість."
  },
  "Тофі": {
  image: "images/notes/toffee.png",
  description: "Солодка, тепла й трохи карамелізована нота з відтінком масла й цукру. Вона додає аромату гурманського звучання, затишку й апетитної м’якості."
  },
  "Замша": {
    image: "images/notes/suede.png",
    description: "М’яка, тепла й делікатно шкіряна нота з бархатистою текстурою. Вона надає композиції вишуканості, глибини й чуттєвого комфорту."
  },
  "Морські Водорості": {
  image: "images/notes/seaweed.png",
  description: "Солона, зелена та морська нота, що нагадує про глибини океану. Вона додає аромату свіжість, природну міць і відчуття прибережної дикої природи, занурюючи в атмосферу шторму та безкрайніх морських просторів."
  },
  "Hedione": {
    image: "images/notes/hedione.png",
    description: "Легка, квіткова нота з відтінками жасмину, що приносить до аромату ніжність і повітряність. Вона додає свіжості, прозорості та легкого шлейфу, створюючи відчуття простору і гармонії в композиції."
  },
  "Журавлина": {
  image: "images/notes/cranberry.png",
  description: "Яскрава, кислувата ягідна нота з легкою гірчинкою, що додає аромату іскорку, енергію та фруктову свіжість. Вона створює настрій грайливості й живості в композиції."
  },
  "Лічі": {
    image: "images/notes/litchi.png",
    description: "Соковита, екзотична й трохи квіткова нота з м’яким солодким відтінком. Вона дарує аромату чуттєвість, легкість і жіночність, немов літній подих на шкірі."
  },
  "Магнолія": {
    image: "images/notes/magnolia.png",
    description: "Ніжна, кремова квіткова нота з водянистим акцентом. Вона додає аромату витонченості, чистоти й гармонійної природної елегантності."
  },
  "Akigalawood": {
  "image": "images/notes/akigalawood.png",
  "description": "Глибокий, пряно-древесний акорд з характерним відтінком пачулі та спецій. Відзначається своїм насиченим і стійким ароматом.",
  "associations": "Тиха ніч у лісі, спокій і сила природи."
  },
  "Базилік": {
    "image": "images/notes/basil.png",
    "description": "Світла, трав’яна і трохи гостра нота з елементами зелені та прянощів. Створює відчуття свіжості й енергії.",
    "associations": "Літня трава, легка прохолода ранку."
  },
  "Перець Тімур": {
    "image": "images/notes/timur.png",
    "description": "Пряний, злегка цитрусовий і освіжаючий аромат перцю з нотами лимону та спецій. Відзначається легким пікантним і пряним відтінком.",
    "associations": "Свіже повітря, пряний вітер в горах."
  },
  "Кардамон": {
  "image": "images/notes/cardamom.png",
  "description": "Тепла, пряна нота з легким камфорним і цитрусовим відтінком. Додає аромату глибини, елегантності та загадкової витонченості.",
  "associations": "Східний ринок спецій, затишок осіннього вечора."
  },
  "Чорна Ваніль": {
    "image": "images/notes/vanilla.png",
    "description": "Насичена, солодка і кремова нота з теплими бальзамічними тонами. Відчутно глибша та інтенсивніша за класичну ваніль.",
    "associations": "Темний десерт, вечірнє тепло, м’яке світло свічок."
  },
  "Праліне": {
  "image": "images/notes/praline.png",
  "description": "Солодка, ніжна нота з відтінками карамелі та горіхів, що додає аромату глибину і спокій. Вона має кремову текстуру, що викликає відчуття розкішної солодощі, підкреслюючи теплоту і комфорт.",
  "associations": "Затишний вечір біля каміну, теплі ласощі в кафе."
  },
  "Апельсиновий Цвіт": {
    "image": "images/notes/orange-blossom.png",
    "description": "Легка, квіткова нота з свіжими цитрусовими відтінками. Апельсиновий цвіт додає аромату ніжності та яскравості, створюючи відчуття весняної свіжості та романтичного настрою.",
    "associations": "Ранкова прогулянка в саду, ніжний весняний вітер."
  },
  "Мадагаскарська Ваніль": {
  "image": "images/notes/vanilla.png",
  "description": "Тепла, солодка, злегка пряна ваніль з характерною кремовою та солодкуватою ноткою.",
  "associations": "Затишний вечір біля вогню, тепла атмосфера комфорту."
  },
  "Сіра Амбра": {
    "image": "images/notes/ambergris.png",
    "description": "Глибока, теплова і трохи деревна нота з м'яким, але інтенсивним відтінком, що додає аромату елегантності.",
    "associations": "Підвечірній ліс, м'яка пряність осіннього повітря."
  },
  "Петитгрейн": {
    "image": "images/notes/petitgrain.png",
    "description": "Цитрусовий, зелений аромат з трав'яними відтінками, що нагадує про свіжість апельсинових листя.",
    "associations": "Ранкова свіжість, літній сад після дощу."
  },
  "Шафран": {
  image: "images/notes/saffron.png",
  description: "Тепла, суха і пряна нота з легкою гіркуватістю та шкіряним відтінком. Вона додає аромату глибини, чуттєвості та загадковості."
  },
  "Єгипетський Жасмин": {
    image: "images/notes/jasmine.png",
    description: "Інтенсивна, багата квіткова нота з медовими, солодкими та трохи анімалістичними нюансами. Вона символізує розкіш і жіночність."
  },
  "Cashmeran": {
    image: "images/notes/cashmeran.png",
    description: "М’який, деревно-амбровий акорд з мускусним підтоном. Викликає відчуття теплого кашеміру, затишку і чуттєвості."
  },
  "Мигдаль": {
  image: "images/notes/almond.png",
  description: "Ніжна, горіхова й трохи гіркувата нота, що додає аромату глибини, м’якості та витонченості. Вона створює затишне і чуттєве звучання."
  },
  "Кава": {
    image: "images/notes/coffee.png",
    description: "Насичений, обволікаючий аромат із гіркувато-обсмаженим характером. Вносить у композицію енергію, тепло й привабливу глибину."
  },
  "Тубероза": {
    image: "images/notes/tuberose.png",
    description: "Біла квітка з виразним, чуттєвим ароматом. Її багате, кремове звучання додає аромату вишуканості та спокусливості."
  },
  "Болгарська Троянда": {
    image: "images/notes/rose.png",
    description: "Ніжна, оксамитова і трохи медова нота з тонким зеленим підтоном. Вона надає аромату романтичності та глибини."
  },
  "Кашемірове Дерево": {
    image: "images/notes/cashmere-wood.png",
    description: "Теплий, м’який деревний акорд з мускусно-смолистим відтінком. Він огортає аромат вуаллю комфорту та елегантної глибини."
  },
  "Трюфель": {
  image: "images/notes/truffle.png",
  description: "Глибокий, землистий і трохи тваринний аромат із гурманським відтінком.",
  associations: "Темний ліс після дощу, таємнича вишуканість."
  },
  "Гарденія": {
    image: "images/notes/gardenia.png",
    description: "Насичений, кремовий квітковий аромат з легкою зеленню.",
    associations: "Сонячний сад у південному маєтку."
  },
  "Іланг-Іланг": {
    image: "images/notes/ylang-ylang.png",
    description: "Солодкий, екзотичний і чуттєвий аромат з фруктовими нюансами.",
    associations: "Тропічний вечір на острові."
  },
  "Лимон Амалфі": {
    image: "images/notes/lemon.png",
    description: "Яскравий, соковитий і кислуватий цитрусовий аромат.",
    associations: "Сонячне узбережжя Італії, ранковий бриз."
  },
  "Орхідея": {
    image: "images/notes/orchid.png",
    description: "Квітковий, м'який і кремовий аромат з тонкою солодкістю.",
    associations: "Елегантний букет у вітальні на шовковій скатертині."
  },
  "Фруктові Ноти": {
    image: "images/notes/fruity-notes.png",
    description: "Соковитий, солодкий і життєрадісний мікс різних фруктів.",
    associations: "Літній пікнік з кошиком стиглих плодів."
  },
  "Лотос": {
    image: "images/notes/lotus.png",
    description: "Водянистий, свіжий і ніжно-квітковий аромат.",
    associations: "Тихе озеро на світанку, дзен і спокій."
  },
  "Мексиканський Шоколад": {
    image: "images/notes/mexican-chocolate.png",
    description: "Темний, насичений шоколад з пряним і трохи димним акцентом.",
    associations: "Стара майстерня какао в центрі Мехіко."
  },
  "Ладан": {
    image: "images/notes/incense.png",
    description: "Димний, містичний аромат з теплими смолистими нотами.",
    associations: "Старовинний храм, спокій і зосередженість."
  },
  "Мох": {
  image: "images/notes/moss.png",
  description: "Землистий, вологий і трохи деревний аромат, що надає композиції природності та глибини.",
  },
  "Імбир": {
    image: "images/notes/ginger.png",
    description: "Пряний, теплий та злегка пікантний аромат, що дарує відчуття енергії та розігріває. Ідеальний для створення динамічного та яскравого настрою.",
  },
  "Ягоди Ялівцю": {
      image: "images/notes/juniper-berries.png",
      description: "Свіжий, терпкий аромат з легким хвойним відтінком, що нагадує лісову прохолоду. Це аромат, що підкреслює природність та яскравість.",
  },
  "Олібанум": {
      image: "images/notes/olibanum.png",
      description: "Теплий, деревний, злегка димний аромат, який додає глибини та містифікації. Ідеально підходить для створення загадкової та спокійної атмосфери.",
  },
  "Анімалістичні Ноти": {
  image: "images/notes/animal-notes.png",
  description: "Глибокі, теплі, інстинктивні акорди з легкою дикістю та тілесністю.",
  },
  "Ялівцева Олія": {
    image: "images/notes/cade-oil.png",
    description: "Прозора, яскрава і злегка смолиста з хвойними та деревними відтінками.",
  },
  "Перець Чилі": {
  image: "images/notes/chili-pepper.png",
  description: "Гостра, пекуча нота з яскравим пряним характером.",
  associations: "Вогняний темперамент, емоційний сплеск, пристрасний жест."
  },
  "Чорний Перець": {
    image: "images/notes/black-pepper.png",
    description: "Сухий, різкий і трохи деревний аромат з легкою терпкістю.",
    associations: "Контраст і гострота, чоловічий характер, енергійний ритм."
  },
  "Какао Біб": {
    image: "images/notes/cacao.png",
    description: "Глибока, гіркувата й трохи землиста нота з натяком на димність.",
    associations: "Темний десерт, чуттєва насолода, загадковість."
  },
  "Шоколад": {
    image: "images/notes/chocolate.png",
    description: "Солодкий, кремовий і водночас інтенсивний аромат.",
    associations: "Звабливий погляд, ніч удвох, м’яке задоволення."
  }
};
