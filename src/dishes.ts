import BananUrl from "./assets/banan.jpg";
import KotletiUrl from "./assets/kotleti.jpg";
import KapustaUrl from "./assets/kapusta.jpg";
import KinoaUrl from "./assets/kinoa kasha.jpg";
import CurryUrl from "./assets/curry.jpg";
import LososOladi from "./assets/losos oladi.jpg";
import Pibimpap from "./assets/pibimpap.jpg";
import SalatTuna from "./assets/tuna.jpg";
import kinoaYabloki from "./assets/kinoa s yablokami.jpg";
import Nut from "./assets/nut salat.jpg";
import Tortilya from "./assets/tortilya.jpg";
import Paelya from "./assets/paelya.jpg";
import Backlagan from "./assets/baklajan.jpg";
import Graten from "./assets/graten.jpg";
import Losos from "./assets/losos.jpg";
import Nopolitansky from "./assets/neopolitansky.jpg";
import Sup from "./assets/sup.jpg";
import Perec from "./assets/perec.jpg";
import Tefteli from "./assets/tefteli.jpg";

export interface Dish {
  id: number;
  name: string;
  ingredients: ProductWithQuantity[];
  calories: number;
  imagePath?: string;
  recipe?: string;
}

export interface ProductWithQuantity {
  productId: number;
  quantity: number;
  unit?: string;
}

export const dishes: Dish[] = [
  {
    id: 1,
    name: "Банановые оладьи с йогуртом и кокосом",
    imagePath: BananUrl,
    ingredients: [
      {
        productId: 1, // Яйцо
        quantity: 2,
        unit: "шт",
      },
      {
        productId: 2, // Банан
        quantity: 2,
        unit: "шт",
      },
      {
        productId: 4, // Корица
        quantity: 0.25,
        unit: "ч.л.",
      },
      {
        productId: 6, // Греческий йогурт
        quantity: 50,
        unit: "г",
      },
      {
        productId: 7, // Орехи
        quantity: 6,
        unit: "шт",
      },
      {
        productId: 8, // Кокосовая стружка
        quantity: 20,
        unit: "г",
      },
      {
        productId: 9, // Ягоды
        quantity: 50, // Примерное значение
        unit: "г",
      },
    ],
    calories: 650,
  },
  {
    id: 2,
    name: "Куриные котлеты с булгуром и овощами",
    imagePath: KotletiUrl,
    ingredients: [
      {
        productId: 10, // Булгур
        quantity: 30,
        unit: "г",
      },
      {
        productId: 11, // Фарш куриный
        quantity: 140,
        unit: "г",
      },
      {
        productId: 12, // Лук
        quantity: 0.25,
        unit: "шт",
      },
      {
        productId: 1, // Яйцо
        quantity: 1,
        unit: "шт",
      },
      {
        productId: 13, // Морковь
        quantity: 0.25,
        unit: "шт",
      },
      {
        productId: 14, // Укроп
        quantity: 1,
        unit: "веточка",
      },
      {
        productId: 15, // Перец болгарский
        quantity: 1,
        unit: "шт",
      },
      {
        productId: 16, // Руккола
        quantity: 50, // Примерное значение
        unit: "г",
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
    ],
    calories: 435,
  },
  {
    id: 3,
    name: "Цветная капуста с пармезаном",
    imagePath: KapustaUrl,
    ingredients: [
      {
        productId: 19, // Цветная капуста
        quantity: 150,
        unit: "г",
      },
      {
        productId: 20, // Пармезан
        quantity: 40,
        unit: "г",
      },
      {
        productId: 21, // Оливковое масло
        quantity: 3,
        unit: "ч.л.",
      },
      {
        productId: 22, // Карри
        quantity: 1,
        unit: "ч.л.",
      },
      {
        productId: 23, // Чеснок
        quantity: 1,
        unit: "зубчик",
      },
      {
        productId: 28, // Зелень
        quantity: 5, // Примерное значение
        unit: "г",
      },
      {
        productId: 6, // Греческий йогурт
        quantity: 50,
        unit: "г",
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
    ],
    calories: 387,
  },
  {
    id: 4,
    name: "Каша из киноа с томатом, сыром и зеленью",
    imagePath: KinoaUrl,
    ingredients: [
      {
        productId: 24, // Киноа
        quantity: 80,
        unit: "г",
      },
      {
        productId: 25, // Помидор
        quantity: 2,
        unit: "шт",
      },
      {
        productId: 26, // Моцарелла
        quantity: 40,
        unit: "г",
      },
      {
        productId: 27, // Сливочное масло
        quantity: 0.25,
        unit: "ч.л",
      },
      {
        productId: 28, // Зелень
        quantity: 50,
        unit: "г",
      },
    ],
    calories: 446,
  },
  {
    id: 5,
    name: "Карри с яблоками и нутом",
    imagePath: CurryUrl,
    ingredients: [
      {
        productId: 29, // Яблоко
        quantity: 0.5,
        unit: "шт",
      },
      {
        productId: 30, // Помидоры в собственном соку
        quantity: 200,
        unit: "г",
      },
      {
        productId: 21, // Оливковое масло
        quantity: 1.5,
        unit: "ч.л.",
      },
      {
        productId: 22, // Карри
        quantity: 1.5,
        unit: "ч.л.",
      },
      {
        productId: 31, // Нут консервированный
        quantity: 150,
        unit: "г",
      },
      {
        productId: 12, // Лук
        quantity: 0.35,
        unit: "шт",
      },
      {
        productId: 23, // Чеснок
        quantity: 1,
        unit: "зубчик",
      },
      {
        productId: 32, // Имбирь
        quantity: 10, // Примерное значение
        unit: "г",
      },
      {
        productId: 33, // Лимонный сок
        quantity: 1.5,
        unit: "ч.л.",
      },
      {
        productId: 34, // Кинза
        quantity: 2,
        unit: "веточки",
      },
      {
        productId: 6, // Греческий йогурт
        quantity: 50,
        unit: "г",
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
    ],
    calories: 487,
  },
  {
    id: 6,
    name: "Овощные оладьи с лососем",
    imagePath: LososOladi,
    ingredients: [
      {
        productId: 35, // Картофель
        quantity: 1,
        unit: "шт",
      },
      {
        productId: 13, // Морковь
        quantity: 1,
        unit: "шт",
      },
      {
        productId: 23, // Чеснок
        quantity: 0.5,
        unit: "зубчик",
      },
      {
        productId: 14, // Укроп
        quantity: 3,
        unit: "веточки",
      },
      {
        productId: 36, // Лосось слабосоленый
        quantity: 3,
        unit: "кусочка",
      },
      {
        productId: 1, // Яйцо
        quantity: 2,
        unit: "шт",
      },
      {
        productId: 37, // Мука цельнозерновая
        quantity: 2,
        unit: "ст.л.",
      },
      {
        productId: 38, // Творожный сыр
        quantity: 1,
        unit: "ст.л.",
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
    ],
    calories: 582,
  },
  {
    id: 7,
    name: "Пибимпап",
    imagePath: Pibimpap,
    ingredients: [
      {
        productId: 13, // Морковь
        quantity: 0.5,
        unit: "шт",
      },
      {
        productId: 39, // Рис
        quantity: 50,
        unit: "г",
      },
      {
        productId: 40, // Соевые бобы
        quantity: 30,
        unit: "г",
      },
      {
        productId: 1, // Яйцо
        quantity: 1,
        unit: "шт",
      },
      {
        productId: 41, // Шпинат
        quantity: 50,
        unit: "г",
      },
      {
        productId: 23, // Чеснок
        quantity: 2,
        unit: "зубчик",
      },
      {
        productId: 42, // Говядина
        quantity: 50,
        unit: "г",
      },
      {
        productId: 43, // Кабачок
        quantity: 50,
        unit: "г",
      },
      {
        productId: 44, // Грибы
        quantity: 20,
        unit: "г",
      },
      {
        productId: 33, // Лимонный сок
        quantity: 1, // Примерное значение
        unit: "ч.л.",
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
      {
        productId: 34, // Кинза
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
      {
        productId: 21, // Оливковое масло
        quantity: 1.5,
        unit: "ч.л.",
      },
      {
        productId: 77, // Соевый соус
        quantity: 0.5,
        unit: "ст.л.",
      },
      {
        productId: 82,
        quantity: 0.33,
      },
    ],
    calories: 497,
  },
  {
    id: 8,
    name: "Салат с тунцом и фасолью",
    imagePath: SalatTuna,
    ingredients: [
      {
        productId: 46, // Белая фасоль консервированная
        quantity: 1,
        unit: "ст.л.",
      },
      {
        productId: 45, // Тунец консервированный
        quantity: 0.5,
        unit: "банки",
      },
      {
        productId: 47, // Зеленый лук
        quantity: 1,
        unit: "шт",
      },
      {
        productId: 48, // Помидоры черри
        quantity: 4,
        unit: "шт",
      },
      {
        productId: 21, // Оливковое масло
        quantity: 1,
        unit: "ч.л.",
      },
      {
        productId: 33, // Лимонный сок
        quantity: 1,
        unit: "ч.л.",
      },
      {
        productId: 16, // Руккола
        quantity: 100,
        unit: "г",
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
    ],
    calories: 200,
  },
  {
    id: 9,
    name: "Киноа с грецкими орехами, яблоком, корицей и семенами чиа",
    imagePath: kinoaYabloki,
    ingredients: [
      {
        productId: 24, // Киноа
        quantity: 80,
        unit: "г",
      },
      {
        productId: 29, // Яблоко
        quantity: 0.5,
        unit: "шт",
      },
      {
        productId: 50, // Грецкие орехи
        quantity: 1,
        unit: "горсть",
      },
      {
        productId: 6, // Греческий йогурт
        quantity: 200,
        unit: "г",
      },
      {
        productId: 49, // Чиа
        quantity: 2,
        unit: "ст.л.",
      },
      {
        productId: 4, // Корица
        quantity: 0.25,
        unit: "ч.л.",
      },
    ],
    calories: 769,
  },
  {
    id: 10,
    name: "Салат с нутом, кукурузой и творогом",
    imagePath: Nut,
    ingredients: [
      {
        productId: 51, // Шампиньоны
        quantity: 5,
        unit: "шт",
      },
      {
        productId: 12, // Лук
        quantity: 0.35,
        unit: "шт",
      },
      {
        productId: 31, // Консервированный нут
        quantity: 30,
        unit: "г",
      },
      {
        productId: 52, // Консервированная кукуруза
        quantity: 2,
        unit: "ст.л.",
      },
      {
        productId: 53, // Консервированная фасоль
        quantity: 3,
        unit: "ст.л.",
      },
      {
        productId: 54, // Творог
        quantity: 45,
        unit: "г",
      },
      {
        productId: 33, // Лимонный сок
        quantity: 1,
        unit: "ч.л.",
      },
      {
        productId: 21, // Оливковое масло
        quantity: 1,
        unit: "ч.л.",
      },
      {
        productId: 55, // Мята
        quantity: 1,
        unit: "веточка",
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
    ],
    calories: 261,
  },
  {
    id: 11,
    name: "Тортилья с курицей",
    imagePath: Tortilya,
    ingredients: [
      {
        productId: 56, // Тортилья
        quantity: 1,
        unit: "шт",
      },
      {
        productId: 68, // Курица
        quantity: 1,
        unit: "шт",
      },
      {
        productId: 6, // Греческий йогурт
        quantity: 50,
        unit: "г",
      },
      {
        productId: 16, // Руккола
        quantity: 50,
        unit: "г",
      },
      {
        productId: 25, // Помидор
        quantity: 2,
        unit: "шт",
      },
      {
        productId: 58, // Паприка
        quantity: 0.5,
        unit: "ч.л.",
      },
      {
        productId: 83, // Сыр
        quantity: 20,
        unit: "г",
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
    ],
    calories: 593,
  },
  {
    id: 12,
    name: "Паэлья",
    imagePath: Paelya,
    ingredients: [
      {
        productId: 59, // Мидии
        quantity: 100,
        unit: "г",
      },
      {
        productId: 60, // Креветки
        quantity: 50,
        unit: "г",
      },
      {
        productId: 61, // Кальмары
        quantity: 50,
        unit: "г",
      },
      {
        productId: 39, // Рис
        quantity: 50,
        unit: "г",
      },
      {
        productId: 12, // Лук
        quantity: 0.5,
        unit: "шт",
      },
      {
        productId: 23, // Чеснок
        quantity: 1,
        unit: "зубчик",
      },
      {
        productId: 85,
        quantity: 3,
      },
      {
        productId: 25, // Помидор
        quantity: 1,
        unit: "шт",
      },
      {
        productId: 28, // Зелень
        quantity: 10,
        unit: "г",
      },
      {
        productId: 33, // Лимонный сок
        quantity: 1,
        unit: "ч.л.",
      },
      {
        productId: 21, // Оливковое масло
        quantity: 1,
        unit: "ст.л.",
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
    ],
    calories: 452,
  },
  {
    id: 13,
    name: "Салат с жареным баклажаном и перцем",
    imagePath: Backlagan,
    ingredients: [
      {
        productId: 62, // Баклажан
        quantity: 0.5,
        unit: "шт",
      },
      {
        productId: 15, // Болгарский перец
        quantity: 0.5,
        unit: "шт",
      },
      {
        productId: 66, // Смесь салатов
        quantity: 75,
        unit: "г",
      },
      {
        productId: 12, // Лук
        quantity: 0.5,
        unit: "шт",
      },
      {
        productId: 23, // Чеснок
        quantity: 0.5,
        unit: "зубчик",
      },
      {
        productId: 50, // Грецкие орехи
        quantity: 0.5,
        unit: "горсть",
      },
      {
        productId: 64, // Кинза
        quantity: 1,
        unit: "веточка",
      },
      {
        productId: 65, // Гранат
        quantity: 1.5,
        unit: "ст.л.",
      },
      {
        productId: 33, // Лимонный сок
        quantity: 1,
        unit: "ч.л.",
      },
      {
        productId: 21, // Оливковое масло
        quantity: 1,
        unit: "ч.л.",
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
    ],
    calories: 156,
  },
  {
    id: 14,
    name: "Гратен с курицей и шампиньонами",
    imagePath: Graten,
    ingredients: [
      {
        productId: 67, // Картофель
        quantity: 1,
        unit: "шт",
      },
      {
        productId: 68, // Куриная грудка
        quantity: 1,
        unit: "шт",
      },
      {
        productId: 51, // Шампиньоны
        quantity: 5,
        unit: "шт",
      },
      {
        productId: 83, // Твердый сыр
        quantity: 50,
        unit: "г",
      },
      {
        productId: 12, // Чеснок
        quantity: 0.5,
        unit: "шт",
      },
      {
        productId: 22, // Карри
        quantity: 0.5,
        unit: "ч.л.",
      },
      {
        productId: 21, // Оливковое масло
        quantity: 2,
        unit: "ст.л.",
      },
      {
        productId: 78, // Базилик
        quantity: 2,
        unit: "веточки",
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 84,
        quantity: 30,
      },
    ],
    calories: 700,
  },
  {
    id: 15,
    name: "Лосось на подушке из овощей и риса",
    imagePath: Losos,
    ingredients: [
      {
        productId: 69, // Филе лосося
        quantity: 140,
        unit: "г",
      },
      {
        productId: 71, // Цветная капуста
        quantity: 100,
        unit: "г",
      },
      {
        productId: 47, // Зеленый лук
        quantity: 1,
        unit: "шт",
      },
      {
        productId: 6, // Греческий йогурт
        quantity: 60,
        unit: "г",
      },
      {
        productId: 33, // Лимонный сок
        quantity: 3,
        unit: "ч.л.",
      },
      {
        productId: 77, // Соевый соус
        quantity: 1,
        unit: "ст.л.",
      },
      {
        productId: 75, // Бурый рис
        quantity: 60,
        unit: "г",
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
      {
        productId: 82,
        quantity: 1,
      },
    ],
    calories: 465,
  },
  {
    id: 16,
    name: "Салат по-неаполитански",
    imagePath: Nopolitansky,
    ingredients: [
      {
        productId: 72, // Красный лук
        quantity: 0.35,
        unit: "шт",
      },
      {
        productId: 12, // Лук
        quantity: 0.25,
        unit: "шт",
      },
      {
        productId: 74, // Запеченные томаты
        quantity: 1,
        unit: "ст.л.",
      },
      {
        productId: 26, // Моцарелла
        quantity: 30,
        unit: "г",
      },
      {
        productId: 73, // Пекинская капуста
        quantity: 20,
        unit: "г",
      },
      {
        productId: 66, // Микс салатов
        quantity: 50,
        unit: "г",
      },
      {
        productId: 21, // Оливковое масло
        quantity: 1.5,
        unit: "ч.л.",
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
      {
        productId: 48,
        quantity: 5,
      },
    ],
    calories: 283,
  },
  {
    id: 18,
    name: "Чечевичный суп с мятой",
    imagePath: Sup,
    ingredients: [
      {
        productId: 79, // Красная чечевица
        quantity: 3,
        unit: "ст.л.",
      },
      {
        productId: 12, // Лук
        quantity: 0.5,
        unit: "шт",
      },
      {
        productId: 13, // Морковь
        quantity: 0.5,
        unit: "шт",
      },
      {
        productId: 6, // Греческий йогурт
        quantity: 30,
        unit: "г",
      },
      {
        productId: 33, // Лимонный сок
        quantity: 1,
        unit: "ч.л.",
      },
      {
        productId: 21, // Оливковое масло
        quantity: 2,
        unit: "ч.л.",
      },
      {
        productId: 81, // Нутовая мука
        quantity: 0.5,
        unit: "ст.л.",
      },
      {
        productId: 55, // Мята
        quantity: 1,
        unit: "веточка",
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
    ],
    calories: 212,
  },
  {
    id: 19,
    name: "Фаршированный перец",
    imagePath: Perec,
    ingredients: [
      {
        productId: 15, // Болгарский перец
        quantity: 2,
        unit: "шт",
      },
      {
        productId: 80, // Рикотта
        quantity: 100,
        unit: "г",
      },
      {
        productId: 23, // Чеснок
        quantity: 1,
        unit: "зубчик",
      },
      {
        productId: 1, // Яйцо
        quantity: 1,
        unit: "шт",
      },
      {
        productId: 33, // Лимонный сок
        quantity: 3,
        unit: "ч.л.",
      },
      {
        productId: 78, // Базилик
        quantity: 3,
        unit: "веточки",
      },
      {
        productId: 58, // Паприка
        quantity: 1,
        unit: "ч.л.",
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: "щепотка",
      },
    ],
    calories: 362,
  },
  {
    id: 20,
    name: "Куриные тефтели с тыквой",
    imagePath: Tefteli,
    calories: 320,
    ingredients: [
      {
        productId: 11,
        quantity: 120,
      },
      {
        productId: 12,
        quantity: 0.25,
      },
      {
        productId: 86,
        quantity: 0.25,
      },
      {
        productId: 28,
        quantity: 50,
      },
      {
        productId: 87,
        quantity: 1,
      },
      {
        productId: 47,
        quantity: 2,
      },
      {
        productId: 3,
        quantity: 1,
      },
      {
        productId: 21, // Оливковое масло
        quantity: 1,
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
      },
    ],
  },
  {
    id: 21,
    name: "Творог с изюмом и орехами",
    calories: 290,
    ingredients: [
      { productId: 7, quantity: 5 },
      { productId: 54, quantity: 100 },
      { productId: 88, quantity: 10 },
      { productId: 6, quantity: 30 },
    ],
  },
  {
    id: 22,
    name: "Вареные яйца с йогуртом",
    calories: 350,
    ingredients: [
      { productId: 1, quantity: 2 },
      { productId: 89, quantity: 150 },
    ],
  },
  {
    id: 23,
    name: "Teriyaki Maggi",
    calories: 300,
    ingredients: [
      { productId: 39, quantity: 50 },
      { productId: 57, quantity: 100 },
      { productId: 47, quantity: 1 },
      { productId: 15, quantity: 0.5 },
      { productId: 90, quantity: 0.5 },
    ],
  },
  {
    id: 24,
    name: "Tikka Masala Maggi",
    calories: 470,
    ingredients: [
      { productId: 39, quantity: 50 },
      { productId: 57, quantity: 150 },
      { productId: 30, quantity: 200 },
      { productId: 91, quantity: 50 },
      { productId: 92, quantity: 0.5 },
    ],
  },
  {
    id: 25,
    name: "Паштет куриный",
    calories: 430,
    ingredients: [
      { productId: 12, quantity: 0.25 },
      { productId: 13, quantity: 0.25 },
      { productId: 27, quantity: 1 },
      { productId: 93, quantity: 100 },
      { productId: 94, quantity: 4 },
    ],
    recipe: `1. Лук очистить и нарезать полукольцами.
    Морковь очистить и нарезать кружочками.
    В глубокой сковороде или сотейнике разогреть растительное масло, добавить овощи 
    и обжарить до мягкости в течение 5-7 минут.
    Постоянно помешивать овощи и стараться, чтобы они не пригорали.

    2. Куриную печень очистить от сосудов, жилок, печёночных узлов и остатков жировых тканей.
    Жарить, постоянно помешивая, в течение 3-5 минут на среднем огне, пока печень не начнёт менять свой цвет.
    Влить на сковороду воду, добавить соль, перец, по желанию, лавровый лист и другие специи, 
    накрыть сковороду крышкой и тушить на минимальном огне в течение 20-ти минут.
    Спустя время снять крышку и протушить еще минут 5-10 минут, пока жидкость почти не выпарится.

    3. Выложить полученную массу в глубокую миску.
    Добавить мягкое сливочное масло.
    Важно, чтобы масло было мягким, но не растопленным.
    Взбить с помощью блендера до однородной консистенции.
    Хранить в холодильнике до 7-ми дней.`,
  },
  {
    id: 26,
    name: "Паста Болоньезе",
    calories: 600,
    ingredients: [
      { productId: 12, quantity: 0.2 },
      { productId: 13, quantity: 0.2 },
      { productId: 95, quantity: 110 },
      { productId: 96, quantity: 100 },
      { productId: 97, quantity: 75 },
      { productId: 21, quantity: 1 },
      { productId: 83, quantity: 20 },
    ],
    recipe: `Обжарить на оливковом масле мелко нарезанные лук и морковь.
    Добавить фарш, обжаривать помешивая пока он полностью не поменяет цвет.
    Сбрызнуть вином и выпарить алкоголь на большом огне.
    Добавить томатную пассату, посолить, поперчить, перемешать, накрыть крышкой и оставить на маленьком огне на 2 часа.
    Перемешать, снова накрыть крышкой и довести до готовности.
    В кипящей подсоленной воде отварить пасту «аль денте». Перемешать с рагу.
    При подаче по желанию посыпать тертым сыром.`,
  },
];
