import BananUrl from './assets/banan.jpg';
import KotletiUrl from './assets/kotleti.jpg';
import KapustaUrl from './assets/kapusta.jpg';
import KinoaUrl from './assets/kinoa kasha.jpg';
import CurryUrl from './assets/curry.jpg';
import LososOladi from './assets/losos oladi.jpg';
import Pibimpap from './assets/pibimpap.jpg';
import SalatTuna from './assets/tuna.jpg';
import kinoaYabloki from './assets/kinoa s yablokami.jpg';
import Nut from './assets/nut salat.jpg';
import Tortilya from './assets/tortilya.jpg';
import Paelya from './assets/paelya.jpg';
import Backlagan from './assets/baklajan.jpg';
import Graten from './assets/graten.jpg';
import Losos from './assets/losos.jpg';
import Nopolitansky from './assets/neopolitansky.jpg';
import Sup from './assets/sup.jpg';
import Perec from './assets/perec.jpg';

export interface Dish {
  id: number;
  name: string;
  ingredients: ProductWithQuantity[];
  imagePath?: string;
}

export interface ProductWithQuantity {
  productId: number;
  quantity: number;
  unit?: string;
}

export const dishes: Dish[] = [
  {
    id: 1,
    name: 'Банановые оладьи с йогуртом и кокосом',
    imagePath: BananUrl,
    ingredients: [
      {
        productId: 1, // Яйцо
        quantity: 2,
        unit: 'шт',
      },
      {
        productId: 2, // Банан
        quantity: 2,
        unit: 'шт',
      },
      {
        productId: 4, // Корица
        quantity: 0.25,
        unit: 'ч.л.',
      },
      {
        productId: 6, // Греческий йогурт
        quantity: 50,
        unit: 'г',
      },
      {
        productId: 7, // Орехи
        quantity: 6,
        unit: 'шт',
      },
      {
        productId: 8, // Кокосовая стружка
        quantity: 20,
        unit: 'г',
      },
      {
        productId: 9, // Ягоды
        quantity: 50, // Примерное значение
        unit: 'г',
      },
    ],
  },
  {
    id: 2,
    name: 'Куриные котлеты с булгуром и овощами',
    imagePath: KotletiUrl,
    ingredients: [
      {
        productId: 10, // Булгур
        quantity: 30,
        unit: 'г',
      },
      {
        productId: 11, // Фарш куриный
        quantity: 140,
        unit: 'г',
      },
      {
        productId: 12, // Лук
        quantity: 0.25,
        unit: 'шт',
      },
      {
        productId: 1, // Яйцо
        quantity: 1,
        unit: 'шт',
      },
      {
        productId: 13, // Морковь
        quantity: 0.25,
        unit: 'шт',
      },
      {
        productId: 14, // Укроп
        quantity: 1,
        unit: 'веточка',
      },
      {
        productId: 15, // Перец болгарский
        quantity: 1,
        unit: 'шт',
      },
      {
        productId: 16, // Руккола
        quantity: 50, // Примерное значение
        unit: 'г',
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
    ],
  },
  {
    id: 3,
    name: 'Цветная капуста с пармезаном',
    imagePath: KapustaUrl,
    ingredients: [
      {
        productId: 19, // Цветная капуста
        quantity: 150,
        unit: 'г',
      },
      {
        productId: 20, // Пармезан
        quantity: 40,
        unit: 'г',
      },
      {
        productId: 21, // Оливковое масло
        quantity: 3,
        unit: 'ч.л.',
      },
      {
        productId: 22, // Карри
        quantity: 1,
        unit: 'ч.л.',
      },
      {
        productId: 23, // Чеснок
        quantity: 1,
        unit: 'зубчик',
      },
      {
        productId: 28, // Зелень
        quantity: 5, // Примерное значение
        unit: 'г',
      },
      {
        productId: 6, // Греческий йогурт
        quantity: 50,
        unit: 'г',
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
    ],
  },
  {
    id: 4,
    name: 'Каша из киноа с томатом, сыром и зеленью',
    imagePath: KinoaUrl,
    ingredients: [
      {
        productId: 24, // Киноа
        quantity: 80,
        unit: 'г',
      },
      {
        productId: 25, // Помидор
        quantity: 2,
        unit: 'шт',
      },
      {
        productId: 26, // Моцарелла
        quantity: 40,
        unit: 'г',
      },
      {
        productId: 27, // Сливочное масло
        quantity: 0.25,
        unit: 'ч.л',
      },
      {
        productId: 28, // Зелень
        quantity: 50,
        unit: 'г',
      },
    ],
  },
  {
    id: 5,
    name: 'Карри с яблоками и нутом',
    imagePath: CurryUrl,
    ingredients: [
      {
        productId: 29, // Яблоко
        quantity: 0.5,
        unit: 'шт',
      },
      {
        productId: 30, // Помидоры в собственном соку
        quantity: 200,
        unit: 'г',
      },
      {
        productId: 21, // Оливковое масло
        quantity: 1.5,
        unit: 'ч.л.',
      },
      {
        productId: 22, // Карри
        quantity: 1.5,
        unit: 'ч.л.',
      },
      {
        productId: 31, // Нут консервированный
        quantity: 150,
        unit: 'г',
      },
      {
        productId: 12, // Лук
        quantity: 0.35,
        unit: 'шт',
      },
      {
        productId: 23, // Чеснок
        quantity: 1,
        unit: 'зубчик',
      },
      {
        productId: 32, // Имбирь
        quantity: 10, // Примерное значение
        unit: 'г',
      },
      {
        productId: 33, // Лимонный сок
        quantity: 1.5,
        unit: 'ч.л.',
      },
      {
        productId: 34, // Кинза
        quantity: 2,
        unit: 'веточки',
      },
      {
        productId: 6, // Греческий йогурт
        quantity: 50,
        unit: 'г',
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
    ],
  },
  {
    id: 6,
    name: 'Овощные оладьи с лососем',
    imagePath: LososOladi,
    ingredients: [
      {
        productId: 35, // Картофель
        quantity: 1,
        unit: 'шт',
      },
      {
        productId: 13, // Морковь
        quantity: 1,
        unit: 'шт',
      },
      {
        productId: 23, // Чеснок
        quantity: 0.5,
        unit: 'зубчик',
      },
      {
        productId: 14, // Укроп
        quantity: 3,
        unit: 'веточки',
      },
      {
        productId: 36, // Лосось слабосоленый
        quantity: 3,
        unit: 'кусочка',
      },
      {
        productId: 1, // Яйцо
        quantity: 2,
        unit: 'шт',
      },
      {
        productId: 37, // Мука цельнозерновая
        quantity: 2,
        unit: 'ст.л.',
      },
      {
        productId: 38, // Творожный сыр
        quantity: 1,
        unit: 'ст.л.',
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
    ],
  },
  {
    id: 7,
    name: 'Пибимпап',
    imagePath: Pibimpap,
    ingredients: [
      {
        productId: 13, // Морковь
        quantity: 0.5,
        unit: 'шт',
      },
      {
        productId: 39, // Рис
        quantity: 50,
        unit: 'г',
      },
      {
        productId: 40, // Соевые бобы
        quantity: 30,
        unit: 'г',
      },
      {
        productId: 1, // Яйцо
        quantity: 1,
        unit: 'шт',
      },
      {
        productId: 41, // Шпинат
        quantity: 50,
        unit: 'г',
      },
      {
        productId: 23, // Чеснок
        quantity: 2,
        unit: 'зубчик',
      },
      {
        productId: 42, // Говядина
        quantity: 50,
        unit: 'г',
      },
      {
        productId: 43, // Кабачок
        quantity: 50,
        unit: 'г',
      },
      {
        productId: 44, // Грибы
        quantity: 20,
        unit: 'г',
      },
      {
        productId: 33, // Лимонный сок
        quantity: 1, // Примерное значение
        unit: 'ч.л.',
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
      {
        productId: 34, // Кинза
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
      {
        productId: 21, // Оливковое масло
        quantity: 1.5,
        unit: 'ч.л.',
      },
      {
        productId: 77, // Соевый соус
        quantity: 0.5,
        unit: 'ст.л.',
      },
      {
        productId: 82,
        quantity: 0.33,
      },
    ],
  },
  {
    id: 8,
    name: 'Салат с тунцом и фасолью',
    imagePath: SalatTuna,
    ingredients: [
      {
        productId: 46, // Белая фасоль консервированная
        quantity: 1,
        unit: 'ст.л.',
      },
      {
        productId: 45, // Тунец консервированный
        quantity: 0.5,
        unit: 'банки',
      },
      {
        productId: 47, // Зеленый лук
        quantity: 1,
        unit: 'шт',
      },
      {
        productId: 48, // Помидоры черри
        quantity: 4,
        unit: 'шт',
      },
      {
        productId: 21, // Оливковое масло
        quantity: 1,
        unit: 'ч.л.',
      },
      {
        productId: 33, // Лимонный сок
        quantity: 1,
        unit: 'ч.л.',
      },
      {
        productId: 16, // Руккола
        quantity: 100,
        unit: 'г',
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
    ],
  },
  {
    id: 9,
    name: 'Киноа с грецкими орехами, яблоком, корицей и семенами чиа',
    imagePath: kinoaYabloki,
    ingredients: [
      {
        productId: 24, // Киноа
        quantity: 80,
        unit: 'г',
      },
      {
        productId: 29, // Яблоко
        quantity: 0.5,
        unit: 'шт',
      },
      {
        productId: 50, // Грецкие орехи
        quantity: 1,
        unit: 'горсть',
      },
      {
        productId: 6, // Греческий йогурт
        quantity: 200,
        unit: 'г',
      },
      {
        productId: 49, // Чиа
        quantity: 2,
        unit: 'ст.л.',
      },
      {
        productId: 4, // Корица
        quantity: 0.25,
        unit: 'ч.л.',
      },
    ],
  },
  {
    id: 10,
    name: 'Салат с нутом, кукурузой и творогом',
    imagePath: Nut,
    ingredients: [
      {
        productId: 51, // Шампиньоны
        quantity: 5,
        unit: 'шт',
      },
      {
        productId: 12, // Лук
        quantity: 0.35,
        unit: 'шт',
      },
      {
        productId: 31, // Консервированный нут
        quantity: 30,
        unit: 'г',
      },
      {
        productId: 52, // Консервированная кукуруза
        quantity: 2,
        unit: 'ст.л.',
      },
      {
        productId: 53, // Консервированная фасоль
        quantity: 3,
        unit: 'ст.л.',
      },
      {
        productId: 54, // Творог
        quantity: 45,
        unit: 'г',
      },
      {
        productId: 33, // Лимонный сок
        quantity: 1,
        unit: 'ч.л.',
      },
      {
        productId: 21, // Оливковое масло
        quantity: 1,
        unit: 'ч.л.',
      },
      {
        productId: 55, // Мята
        quantity: 1,
        unit: 'веточка',
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
    ],
  },
  {
    id: 11,
    name: 'Тортилья с курицей',
    imagePath: Tortilya,
    ingredients: [
      {
        productId: 56, // Тортилья
        quantity: 1,
        unit: 'шт',
      },
      {
        productId: 68, // Курица
        quantity: 2,
        unit: 'шт',
      },
      {
        productId: 6, // Греческий йогурт
        quantity: 50,
        unit: 'г',
      },
      {
        productId: 16, // Руккола
        quantity: 50,
        unit: 'г',
      },
      {
        productId: 25, // Помидор
        quantity: 2,
        unit: 'шт',
      },
      {
        productId: 58, // Паприка
        quantity: 0.5,
        unit: 'ч.л.',
      },
      {
        productId: 83, // Сыр
        quantity: 20,
        unit: 'г',
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
    ],
  },
  {
    id: 12,
    name: 'Паэлья',
    imagePath: Paelya,
    ingredients: [
      {
        productId: 59, // Мидии
        quantity: 100,
        unit: 'г',
      },
      {
        productId: 60, // Креветки
        quantity: 50,
        unit: 'г',
      },
      {
        productId: 61, // Кальмары
        quantity: 50,
        unit: 'г',
      },
      {
        productId: 39, // Рис
        quantity: 50,
        unit: 'г',
      },
      {
        productId: 12, // Лук
        quantity: 0.5,
        unit: 'шт',
      },
      {
        productId: 23, // Чеснок
        quantity: 1,
        unit: 'зубчик',
      },
      {
        productId: 85,
        quantity: 3,
      },
      {
        productId: 25, // Помидор
        quantity: 1,
        unit: 'шт',
      },
      {
        productId: 28, // Зелень
        quantity: 10,
        unit: 'г',
      },
      {
        productId: 33, // Лимонный сок
        quantity: 1,
        unit: 'ч.л.',
      },
      {
        productId: 21, // Оливковое масло
        quantity: 1,
        unit: 'ст.л.',
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
    ],
  },
  {
    id: 13,
    name: 'Салат с жареным баклажаном и перцем',
    imagePath: Backlagan,
    ingredients: [
      {
        productId: 62, // Баклажан
        quantity: 0.5,
        unit: 'шт',
      },
      {
        productId: 15, // Болгарский перец
        quantity: 0.5,
        unit: 'шт',
      },
      {
        productId: 66, // Смесь салатов
        quantity: 75,
        unit: 'г',
      },
      {
        productId: 12, // Лук
        quantity: 0.5,
        unit: 'шт',
      },
      {
        productId: 23, // Чеснок
        quantity: 0.5,
        unit: 'зубчик',
      },
      {
        productId: 50, // Грецкие орехи
        quantity: 0.5,
        unit: 'горсть',
      },
      {
        productId: 64, // Кинза
        quantity: 1,
        unit: 'веточка',
      },
      {
        productId: 65, // Гранат
        quantity: 1.5,
        unit: 'ст.л.',
      },
      {
        productId: 33, // Лимонный сок
        quantity: 1,
        unit: 'ч.л.',
      },
      {
        productId: 21, // Оливковое масло
        quantity: 1,
        unit: 'ч.л.',
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
    ],
  },
  {
    id: 14,
    name: 'Гратен с курицей и шампиньонами',
    imagePath: Graten,
    ingredients: [
      {
        productId: 67, // Картофель
        quantity: 1,
        unit: 'шт',
      },
      {
        productId: 68, // Куриная грудка
        quantity: 1,
        unit: 'шт',
      },
      {
        productId: 51, // Шампиньоны
        quantity: 5,
        unit: 'шт',
      },
      {
        productId: 83, // Твердый сыр
        quantity: 50,
        unit: 'г',
      },
      {
        productId: 12, // Чеснок
        quantity: 0.5,
        unit: 'шт',
      },
      {
        productId: 22, // Карри
        quantity: 0.5,
        unit: 'ч.л.',
      },
      {
        productId: 21, // Оливковое масло
        quantity: 2,
        unit: 'ст.л.',
      },
      {
        productId: 78, // Базилик
        quantity: 2,
        unit: 'веточки',
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: 'щепотка',
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
  },
  {
    id: 15,
    name: 'Лосось на подушке из овощей и риса',
    imagePath: Losos,
    ingredients: [
      {
        productId: 69, // Филе лосося
        quantity: 140,
        unit: 'г',
      },
      {
        productId: 71, // Цветная капуста
        quantity: 100,
        unit: 'г',
      },
      {
        productId: 47, // Зеленый лук
        quantity: 1,
        unit: 'шт',
      },
      {
        productId: 6, // Греческий йогурт
        quantity: 60,
        unit: 'г',
      },
      {
        productId: 33, // Лимонный сок
        quantity: 3,
        unit: 'ч.л.',
      },
      {
        productId: 77, // Соевый соус
        quantity: 1,
        unit: 'ст.л.',
      },
      {
        productId: 75, // Бурый рис
        quantity: 60,
        unit: 'г',
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
      {
        productId: 82,
        quantity: 1,
      },
    ],
  },
  {
    id: 16,
    name: 'Салат по-неаполитански',
    imagePath: Nopolitansky,
    ingredients: [
      {
        productId: 72, // Красный лук
        quantity: 0.35,
        unit: 'шт',
      },
      {
        productId: 12, // Лук
        quantity: 0.25,
        unit: 'шт',
      },
      {
        productId: 74, // Запеченные томаты
        quantity: 1,
        unit: 'ст.л.',
      },
      {
        productId: 26, // Моцарелла
        quantity: 30,
        unit: 'г',
      },
      {
        productId: 73, // Пекинская капуста
        quantity: 20,
        unit: 'г',
      },
      {
        productId: 66, // Микс салатов
        quantity: 50,
        unit: 'г',
      },
      {
        productId: 21, // Оливковое масло
        quantity: 1.5,
        unit: 'ч.л.',
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
      {
        productId: 48,
        quantity: 5,
      },
    ],
  },
  {
    id: 18,
    name: 'Чечевичный суп с мятой',
    imagePath: Sup,
    ingredients: [
      {
        productId: 79, // Красная чечевица
        quantity: 3,
        unit: 'ст.л.',
      },
      {
        productId: 12, // Лук
        quantity: 0.5,
        unit: 'шт',
      },
      {
        productId: 13, // Морковь
        quantity: 0.5,
        unit: 'шт',
      },
      {
        productId: 6, // Греческий йогурт
        quantity: 30,
        unit: 'г',
      },
      {
        productId: 33, // Лимонный сок
        quantity: 1,
        unit: 'ч.л.',
      },
      {
        productId: 21, // Оливковое масло
        quantity: 2,
        unit: 'ч.л.',
      },
      {
        productId: 81, // Нутовая мука
        quantity: 0.5,
        unit: 'ст.л.',
      },
      {
        productId: 55, // Мята
        quantity: 1,
        unit: 'веточка',
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
    ],
  },
  {
    id: 19,
    name: 'Фаршированный перец',
    imagePath: Perec,
    ingredients: [
      {
        productId: 15, // Болгарский перец
        quantity: 2,
        unit: 'шт',
      },
      {
        productId: 80, // Рикотта
        quantity: 100,
        unit: 'г',
      },
      {
        productId: 23, // Чеснок
        quantity: 1,
        unit: 'зубчик',
      },
      {
        productId: 1, // Яйцо
        quantity: 1,
        unit: 'шт',
      },
      {
        productId: 33, // Лимонный сок
        quantity: 3,
        unit: 'ч.л.',
      },
      {
        productId: 78, // Базилик
        quantity: 3,
        unit: 'веточки',
      },
      {
        productId: 58, // Паприка
        quantity: 1,
        unit: 'ч.л.',
      },
      {
        productId: 17, // Соль
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
      {
        productId: 18, // Перец
        quantity: 1, // Примерное значение
        unit: 'щепотка',
      },
    ],
  },
];
