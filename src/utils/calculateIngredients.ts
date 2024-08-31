import { DayMenu } from '../days';
import { dishes } from '../dishes';

const calculateIngredients = (daysMenu: DayMenu[]): Record<number, number> =>
  daysMenu.reduce((acc, day) => {
    day.dishes.forEach((dishInMenu) => {
      const dish = dishes.find((item) => item.id === dishInMenu.dishId);
      if (dish) {
        dish.ingredients.forEach((ingredient) => {
          acc[ingredient.productId] =
            (acc[ingredient.productId] ?? 0) +
            ingredient.quantity * dishInMenu.quantity;
        });
      }
    });
    return acc;
  }, {} as Record<number, number>);
export default calculateIngredients;
