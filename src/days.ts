export enum Day {
  Monday = 'Понедельник',
  Tuesday = 'Вторник',
  Wednesday = 'Среда',
  Thursday = 'Четверг',
  Friday = 'Пятница',
  Saturday = 'Суббота',
  Sunday = 'Воскресенье',
}

export interface DishWithQuantity {
  dishId: number;
  quantity: number;
}

export interface DayMenu {
  day: Day;
  dishes: DishWithQuantity[];
}

const daysMenu1: DayMenu[] = [
  {
    day: Day.Monday,
    dishes: [
      { dishId: 1, quantity: 2 },
      { dishId: 2, quantity: 2 },
      { dishId: 3, quantity: 2 },
    ],
  },
  {
    day: Day.Tuesday,
    dishes: [
      { dishId: 4, quantity: 2 },
      { dishId: 2, quantity: 1 },
      { dishId: 5, quantity: 2 },
    ],
  },
  {
    day: Day.Wednesday,
    dishes: [
      { dishId: 6, quantity: 2 },
      { dishId: 7, quantity: 2 },
      { dishId: 8, quantity: 2 },
    ],
  },
  {
    day: Day.Thursday,
    dishes: [
      { dishId: 9, quantity: 2 },
      { dishId: 7, quantity: 1 },
      { dishId: 10, quantity: 2 },
    ],
  },
  {
    day: Day.Friday,
    dishes: [
      { dishId: 14, quantity: 2 },
      { dishId: 15, quantity: 2 },
      { dishId: 16, quantity: 2 },
    ],
  },
  {
    day: Day.Saturday,
    dishes: [
      { dishId: 11, quantity: 2 },
      { dishId: 12, quantity: 2 },
      { dishId: 13, quantity: 2 },
    ],
  },
  {
    day: Day.Sunday,
    dishes: [
      { dishId: 11, quantity: 2 },
      { dishId: 18, quantity: 2 },
      { dishId: 19, quantity: 2 },
    ],
  },
];

const daysMenu2: DayMenu[] = [
  {
    day: Day.Monday,
    dishes: [
      { dishId: 1, quantity: 2 },
      { dishId: 2, quantity: 2 },
      { dishId: 3, quantity: 2 },
    ],
  },
  {
    day: Day.Tuesday,
    dishes: [
      { dishId: 4, quantity: 2 },
      { dishId: 2, quantity: 1 },
      { dishId: 5, quantity: 2 },
    ],
  },
  {
    day: Day.Wednesday,
    dishes: [
      { dishId: 14, quantity: 2 },
      { dishId: 7, quantity: 2 },
      { dishId: 8, quantity: 2 },
    ],
  },
  {
    day: Day.Thursday,
    dishes: [
      { dishId: 9, quantity: 2 },
      { dishId: 7, quantity: 1 },
      { dishId: 13, quantity: 2 },
    ],
  },
  {
    day: Day.Friday,
    dishes: [
      { dishId: 1, quantity: 2 },
      { dishId: 15, quantity: 2 },
      { dishId: 16, quantity: 2 },
    ],
  },
  {
    day: Day.Saturday,
    dishes: [
      { dishId: 11, quantity: 2 },
      { dishId: 20, quantity: 2 },
      { dishId: 19, quantity: 2 },
    ],
  },
  {
    day: Day.Sunday,
    dishes: [
      { dishId: 11, quantity: 2 },
      { dishId: 18, quantity: 2 },
      { dishId: 10, quantity: 2 },
    ],
  },
];

export const daysMenu = daysMenu2 || daysMenu1;
