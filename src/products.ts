export interface Product {
  id: number;
  name: string;
  category: Category;
  unit: string;
}

export enum Category {
  All = "Все",
  EggsAndMilk = "Яйца и молоко",
  Fruits = "Фрукты",
  Nuts = "Орехи",
  Spices = "Специи",
  Meat = "Мясо",
  Vegetables = "Овощи",
  Cereal = "Крупы",
  Greens = "Зелень",
  Cans = "Консервы",
  Fish = "Рыба",
}

export const products: Product[] = [
  {
    id: 1,
    name: "Яйцо",
    category: Category.EggsAndMilk,
    unit: "шт",
  },
  {
    id: 2,
    name: "Банан",
    category: Category.Fruits,
    unit: "шт",
  },
  {
    id: 3,
    name: "Мускатный орех",
    category: Category.Spices,
    unit: "шт",
  },
  {
    id: 4,
    name: "Корица",
    category: Category.Spices,
    unit: "ч.л.",
  },
  {
    id: 5,
    name: "Какао",
    category: Category.Spices,
    unit: "ч.л.",
  },
  {
    id: 6,
    name: "Греческий йогурт",
    category: Category.EggsAndMilk,
    unit: "г",
  },
  {
    id: 7,
    name: "Орехи",
    category: Category.Nuts,
    unit: "шт",
  },
  {
    id: 8,
    name: "Кокосовая стружка",
    category: Category.Nuts,
    unit: "г",
  },
  {
    id: 9,
    name: "Ягоды",
    category: Category.Fruits,
    unit: "г",
  },
  {
    id: 10,
    name: "Булгур",
    category: Category.Cereal,
    unit: "г",
  },
  {
    id: 11,
    name: "Фарш куриный",
    category: Category.Meat,
    unit: "г",
  },
  {
    id: 12,
    name: "Лук",
    category: Category.Vegetables,
    unit: "шт",
  },
  {
    id: 13,
    name: "Морковь",
    category: Category.Vegetables,
    unit: "шт",
  },
  {
    id: 14,
    name: "Укроп",
    category: Category.Greens,
    unit: "веточки",
  },
  {
    id: 15,
    name: "Перец болгарский",
    category: Category.Vegetables,
    unit: "шт",
  },
  {
    id: 16,
    name: "Руккола",
    category: Category.Greens,
    unit: "г",
  },
  {
    id: 17,
    name: "Соль",
    category: Category.Spices,
    unit: "щепотки",
  },
  {
    id: 18,
    name: "Перец",
    category: Category.Spices,
    unit: "щепотки",
  },
  {
    id: 19,
    name: "Цветная капуста",
    category: Category.Vegetables,
    unit: "г",
  },
  {
    id: 20,
    name: "Пармезан",
    category: Category.EggsAndMilk,
    unit: "г",
  },
  {
    id: 21,
    name: "Оливковое масло",
    category: Category.Spices,
    unit: "ч.л.",
  },
  {
    id: 22,
    name: "Карри",
    category: Category.Spices,
    unit: "ч.л.",
  },
  {
    id: 23,
    name: "Чеснок",
    category: Category.Vegetables,
    unit: "зубчика",
  },
  {
    id: 24,
    name: "Киноа",
    category: Category.Cereal,
    unit: "г",
  },
  {
    id: 25,
    name: "Помидор",
    category: Category.Vegetables,
    unit: "шт",
  },
  {
    id: 26,
    name: "Моцарелла",
    category: Category.EggsAndMilk,
    unit: "г",
  },
  {
    id: 27,
    name: "Сливочное масло",
    category: Category.Spices,
    unit: "ч.л.",
  },
  {
    id: 28,
    name: "Зелень",
    category: Category.Greens,
    unit: "г",
  },
  {
    id: 29,
    name: "Яблоко",
    category: Category.Fruits,
    unit: "шт",
  },
  {
    id: 30,
    name: "Помидоры в собственном соку",
    category: Category.Cans,
    unit: "г",
  },
  {
    id: 31,
    name: "Нут консервированный",
    category: Category.Cans,
    unit: "г",
  },
  {
    id: 32,
    name: "Имбирь",
    category: Category.Spices,
    unit: "г",
  },
  {
    id: 33,
    name: "Лимонный сок",
    category: Category.Spices,
    unit: "ч.л.",
  },
  {
    id: 34,
    name: "Кинза",
    category: Category.Greens,
    unit: "веточка",
  },

  {
    id: 35,
    name: "Картофель",
    category: Category.Vegetables,
    unit: "шт",
  },
  {
    id: 36,
    name: "Лосось слабосоленый",
    category: Category.Fish,
    unit: "кусочка",
  },
  {
    id: 37,
    name: "Мука цельнозерновая",
    category: Category.Cereal,
    unit: "ст.л.",
  },
  {
    id: 38,
    name: "Творожный сыр",
    category: Category.EggsAndMilk,
    unit: "ст.л.",
  },
  {
    id: 39,
    name: "Рис",
    category: Category.Cereal,
    unit: "г",
  },
  {
    id: 40,
    name: "Соевые бобы",
    category: Category.Cans,
    unit: "г",
  },
  {
    id: 41,
    name: "Шпинат",
    category: Category.Greens,
    unit: "г",
  },
  {
    id: 42,
    name: "Говядина",
    category: Category.Meat,
    unit: "г",
  },
  {
    id: 43,
    name: "Кабачок",
    category: Category.Vegetables,
    unit: "г",
  },
  {
    id: 44,
    name: "Грибы",
    category: Category.Vegetables,
    unit: "г",
  },
  {
    id: 45,
    name: "Тунец консервированный",
    category: Category.Cans,
    unit: "банки",
  },
  {
    id: 46,
    name: "Белая фасоль консервированная",
    category: Category.Cans,
    unit: "ст.л.",
  },
  {
    id: 47,
    name: "Зеленый лук",
    category: Category.Greens,
    unit: "шт",
  },
  {
    id: 48,
    name: "Помидоры черри",
    category: Category.Vegetables,
    unit: "шт",
  },
  {
    id: 49,
    name: "Чиа",
    category: Category.Cereal,
    unit: "ст.л.",
  },
  {
    id: 50,
    name: "Грецкие орехи",
    category: Category.Nuts,
    unit: "горсть",
  },
  {
    id: 51,
    name: "Шампиньоны",
    category: Category.Vegetables,
    unit: "шт",
  },
  {
    id: 52,
    name: "Кукуруза консервированная",
    category: Category.Cans,
    unit: "ст.д.",
  },
  {
    id: 53,
    name: "Красная фасоль консервированная",
    category: Category.Cans,
    unit: "ст.л.",
  },
  {
    id: 54,
    name: "Творог",
    category: Category.EggsAndMilk,
    unit: "г",
  },
  {
    id: 55,
    name: "Мята",
    category: Category.Greens,
    unit: "веточка",
  },
  {
    id: 56,
    name: "Тортилья",
    category: Category.Cereal,
    unit: "шт",
  },
  {
    id: 57,
    name: "Курица",
    category: Category.Meat,
    unit: "шт",
  },
  {
    id: 58,
    name: "Паприка",
    category: Category.Spices,
    unit: "ч.л.",
  },
  {
    id: 59,
    name: "Мидии",
    category: Category.Fish,
    unit: "г",
  },
  {
    id: 60,
    name: "Креветки",
    category: Category.Fish,
    unit: "г",
  },
  {
    id: 61,
    name: "Кальмары",
    category: Category.Fish,
    unit: "г",
  },
  {
    id: 62,
    name: "Баклажан",
    category: Category.Vegetables,
    unit: "шт",
  },
  {
    id: 64,
    name: "Кинза",
    category: Category.Greens,
    unit: "веточка",
  },
  {
    id: 65,
    name: "Гранат",
    category: Category.Fruits,
    unit: "ст.л.",
  },
  {
    id: 66,
    name: "Смесь салатов",
    category: Category.Greens,
    unit: "г",
  },
  {
    id: 67,
    name: "Картофель",
    category: Category.Vegetables,
    unit: "шт",
  },
  {
    id: 68,
    name: "Куриная грудка",
    category: Category.Meat,
    unit: "шт",
  },
  {
    id: 69,
    name: "Филе лосося",
    category: Category.Fish,
    unit: "г",
  },
  {
    id: 70,
    name: "Брокколи",
    category: Category.Vegetables,
    unit: "г",
  },
  {
    id: 71,
    name: "Цветная капуста",
    category: Category.Vegetables,
    unit: "г",
  },
  {
    id: 72,
    name: "Красный лук",
    category: Category.Vegetables,
    unit: "шт",
  },
  {
    id: 73,
    name: "Капуста пекинская",
    category: Category.Vegetables,
    unit: "г",
  },
  {
    id: 74,
    name: "Вяленные помидоры",
    category: Category.Vegetables,
    unit: "ст.л.",
  },
  {
    id: 75,
    name: "Бурый рис",
    category: Category.Cereal,
    unit: "г",
  },
  {
    id: 76,
    name: "Микс салатов",
    category: Category.Greens,
    unit: "г",
  },
  {
    id: 77,
    name: "Соевый соус",
    category: Category.Spices,
    unit: "ст.л.",
  },
  {
    id: 78,
    name: "Базилик",
    category: Category.Greens,
    unit: "веточка",
  },
  {
    id: 79,
    name: "Красная чечевица",
    category: Category.Cereal,
    unit: "ст.л.",
  },
  {
    id: 80,
    name: "Рикотта",
    category: Category.EggsAndMilk,
    unit: "г",
  },
  {
    id: 81,
    name: "Нутовая мука",
    category: Category.Cereal,
    unit: "ст.л.",
  },
  {
    id: 82,
    name: "Кунжут",
    category: Category.Spices,
    unit: "ч.л.",
  },
  {
    id: 83,
    name: "Сыр",
    category: Category.EggsAndMilk,
    unit: "г",
  },
  {
    id: 84,
    name: "Молоко",
    category: Category.EggsAndMilk,
    unit: "мл",
  },
  {
    id: 85,
    name: "Зеленый горошек",
    category: Category.Cans,
    unit: "ст.л.",
  },
  {
    id: 86,
    name: "Тыква",
    category: Category.Vegetables,
    unit: "шт",
  },
  {
    id: 87,
    name: "Семечки подсолнечника или тыквы",
    category: Category.Nuts,
    unit: "ч.л.",
  },
  {
    id: 88,
    name: "Изюм или сушеная вишня",
    category: Category.Nuts,
    unit: "г",
  },
  {
    id: 89,
    name: "Сладкий йогурт",
    category: Category.EggsAndMilk,
    unit: "г",
  },
];
