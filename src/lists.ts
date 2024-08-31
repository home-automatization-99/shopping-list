import { Day } from './days';
import { Category } from './products';

export enum ListModificator {
  All = 'all',
  Perishable = 'perishable',
  NonPerishable = 'non-perishable',
}

export const nonPerishableCategories = [
  Category.Cans,
  Category.Cereal,
  Category.Nuts,
  Category.Spices,
];

export const allCategories = Object.values(Category);

export const perishableCategories = allCategories.filter(
  (item) => !nonPerishableCategories.includes(item)
);

export const categoriesByModificator: Record<ListModificator, Category[]> = {
  [ListModificator.All]: allCategories,
  [ListModificator.Perishable]: perishableCategories,
  [ListModificator.NonPerishable]: nonPerishableCategories,
};

export interface List {
  id: number;
  name: string;
  days: Day[];
  modificator: ListModificator;
}

const allDays = Object.values(Day);

export const lists = [
  {
    id: 1,
    name: 'Все продукты на неделю',
    days: allDays,
    modificator: ListModificator.All,
  },
  {
    id: 2,
    name: 'Продукты долгого хранения',
    days: allDays,
    modificator: ListModificator.NonPerishable,
  },
  {
    id: 3,
    name: 'Скоропортящиеся продукты (понедельник-вторник)',
    days: [Day.Monday, Day.Tuesday],
    modificator: ListModificator.Perishable,
  },
  {
    id: 4,
    name: 'Скоропортящиеся продукты (среда-четверг)',
    days: [Day.Wednesday, Day.Thursday],
    modificator: ListModificator.Perishable,
  },
  {
    id: 5,
    name: 'Скоропортящиеся продукты (пятница-воскресенье)',
    days: [Day.Friday, Day.Saturday, Day.Sunday],
    modificator: ListModificator.Perishable,
  },
];
