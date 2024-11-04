export enum Day {
  Monday = "Понедельник",
  Tuesday = "Вторник",
  Wednesday = "Среда",
  Thursday = "Четверг",
  Friday = "Пятница",
  Saturday = "Суббота",
  Sunday = "Воскресенье",
}

export interface DishWithQuantity {
  dishId: number;
  quantity: number;
  fromFridge?: boolean;
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

const daysMenu3: DayMenu[] = [
  {
    day: Day.Saturday,
    dishes: [{ dishId: 11, quantity: 2 }],
  },
  {
    day: Day.Sunday,
    dishes: [
      { dishId: 1, quantity: 2 },
      { dishId: 18, quantity: 2 },
      { dishId: 11, quantity: 2, fromFridge: true },
    ],
  },
  {
    day: Day.Monday,
    dishes: [
      { dishId: 4, quantity: 2 },
      { dishId: 18, quantity: 2, fromFridge: true },
      { dishId: 2, quantity: 2 },
    ],
  },
  {
    day: Day.Tuesday,
    dishes: [
      { dishId: 21, quantity: 2 },
      { dishId: 15, quantity: 2 },
      { dishId: 2, quantity: 2, fromFridge: true },
    ],
  },
  {
    day: Day.Wednesday,
    dishes: [
      { dishId: 22, quantity: 2 },
      { dishId: 15, quantity: 2, fromFridge: true },
      { dishId: 7, quantity: 2 },
    ],
  },
  {
    day: Day.Thursday,
    dishes: [
      { dishId: 4, quantity: 2 },
      { dishId: 5, quantity: 2 },
      { dishId: 7, quantity: 2, fromFridge: true },
    ],
  },
  {
    day: Day.Friday,
    dishes: [
      { dishId: 21, quantity: 2 },
      { dishId: 5, quantity: 2, fromFridge: true },
    ],
  },
];

const daysMenu4: DayMenu[] = [
  {
    day: Day.Sunday,
    dishes: [
      { dishId: 1, quantity: 2 },
      { dishId: 25, quantity: 2 },
      { dishId: 8, quantity: 2 },
    ],
  },
  {
    day: Day.Monday,
    dishes: [
      { dishId: 4, quantity: 2 },
      { dishId: 25, quantity: 2, fromFridge: true },
      { dishId: 23, quantity: 2 },
    ],
  },
  {
    day: Day.Tuesday,
    dishes: [
      { dishId: 21, quantity: 2 },
      { dishId: 25, quantity: 1, fromFridge: true },
      { dishId: 26, quantity: 2 },
    ],
  },
  {
    day: Day.Wednesday,
    dishes: [
      { dishId: 22, quantity: 2 },
      { dishId: 24, quantity: 2 },
      { dishId: 26, quantity: 2, fromFridge: true },
    ],
  },
  {
    day: Day.Thursday,
    dishes: [
      { dishId: 4, quantity: 2 },
      { dishId: 25, quantity: 1, fromFridge: true },
      { dishId: 20, quantity: 2 },
    ],
  },
  {
    day: Day.Friday,
    dishes: [
      { dishId: 21, quantity: 2 },
      { dishId: 20, quantity: 2, fromFridge: true },
    ],
  },
];

const daysMenu5: DayMenu[] = [
  {
    day: Day.Monday,
    dishes: [
      { dishId: 4, quantity: 2 },
      { dishId: 2, quantity: 2 },
    ],
  },
  {
    day: Day.Tuesday,
    dishes: [
      { dishId: 21, quantity: 2 },
      { dishId: 2, quantity: 1, fromFridge: true },
      { dishId: 26, quantity: 2 },
    ],
  },
  {
    day: Day.Wednesday,
    dishes: [
      { dishId: 22, quantity: 2 },
      { dishId: 26, quantity: 2, fromFridge: true },
      { dishId: 2, quantity: 2, fromFridge: true },
    ],
  },
  {
    day: Day.Thursday,
    dishes: [
      { dishId: 4, quantity: 2 },
      { dishId: 26, quantity: 1, fromFridge: true },
      { dishId: 5, quantity: 2 },
    ],
  },
  {
    day: Day.Friday,
    dishes: [
      { dishId: 21, quantity: 2 },
      { dishId: 5, quantity: 2, fromFridge: true },
    ],
  },
];

export const daysMenu =
  daysMenu5 || daysMenu4 || daysMenu3 || daysMenu2 || daysMenu1;
