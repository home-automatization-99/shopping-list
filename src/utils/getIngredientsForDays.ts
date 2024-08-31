import { DayMenu, Day } from '../days';

const getIngredientsForDays = (daysMenu: DayMenu[], days: Day[]): DayMenu[] => {
  return daysMenu.filter((dayMenu) => days.includes(dayMenu.day));
};
export default getIngredientsForDays;
