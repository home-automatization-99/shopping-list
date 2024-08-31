import './App.css';
import { daysMenu } from './days';
import { dishes } from './dishes';
import { Category, products } from './products';

function App() {
  const list: Record<number, number> = daysMenu.reduce((acc, day) => {
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
  const listByCategory: Record<
    Category,
    Record<number, number>
  > = Object.values(Category).reduce((acc, category) => {
    Object.entries(list).forEach((listItem) => {
      const [ingredientId, quantity] = listItem;
      const ingredient = products.find(
        (item) => String(item.id) === String(ingredientId)
      );
      if (ingredient && ingredient.category === category) {
        if (!acc[category]) {
          acc[category] = {} as Record<number, number>;
        }
        acc[category][Number(ingredientId)] = quantity;
      }
    });
    return acc;
  }, {} as Record<Category, Record<number, number>>);
  return (
    <>
      <h1>Меню</h1>
      {daysMenu.map((day) => {
        return (
          <div>
            <h2>{day.day}</h2>
            <div>
              {day.dishes.map((dishInMenu) => {
                const dish = dishes.find(
                  (item) => item.id === dishInMenu.dishId
                );
                if (!dish) {
                  return null;
                }
                return (
                  <>
                    <details>
                      <summary>
                        {dish.name} - порции {dishInMenu.quantity}
                      </summary>
                      {dish.ingredients.map((ingredient) => {
                        if (!ingredient) {
                          return;
                        }
                        const product = products.find(
                          (item) => item.id === ingredient.productId
                        );
                        if (!product) return;
                        return (
                          <p>
                            {product.name}, {product.unit} -{' '}
                            {ingredient.quantity} {ingredient.unit}
                          </p>
                        );
                      })}
                    </details>
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
      <br />
      <details>
        <summary>Список всех продуктов</summary>
        {Object.entries(list).map(([ingredientId, quantity]) => {
          const ingredient = products.find(
            (product) => String(product.id) === String(ingredientId)
          );
          if (!ingredient) {
            return;
          }
          return (
            <div>
              <p>
                {ingredient.name} - {quantity} {ingredient.unit}
              </p>
            </div>
          );
        })}
      </details>
      {Object.entries(listByCategory).map((item) => {
        const [category, listOfCategory] = item as [
          string,
          Record<number, number>
        ];
        return (
          <details>
            <summary>{category}</summary>
            {Object.entries(listOfCategory).map(([ingredientId, quantity]) => {
              const ingredient = products.find(
                (product) => String(product.id) === String(ingredientId)
              );
              if (!ingredient) {
                return;
              }
              return (
                <div>
                  <p>
                    {ingredient.name} - {Number(quantity)} {ingredient.unit}
                  </p>
                </div>
              );
            })}
          </details>
        );
      })}
    </>
  );
}

export default App;
