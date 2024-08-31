import { Category, products } from '../products';

const sortListByCategory = (
  list: Record<number, number>,
  allowedCategories: Category[]
): Record<Category, Record<number, number>> =>
  Object.values(Category).reduce((acc, category) => {
    Object.entries(list).forEach((listItem) => {
      const [ingredientId, quantity] = listItem;
      const ingredient = products.find(
        (item) => String(item.id) === String(ingredientId)
      );
      if (
        ingredient &&
        allowedCategories.includes(ingredient.category) &&
        ingredient.category === category
      ) {
        if (!acc[category]) {
          acc[category] = {} as Record<number, number>;
        }
        acc[category][Number(ingredientId)] = quantity;
      }
    });
    return acc;
  }, {} as Record<Category, Record<number, number>>);
export default sortListByCategory;
