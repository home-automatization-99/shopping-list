import { FC } from 'react';
import { dishes } from '../../dishes';
import { products } from '../../products';
import { MenuProps } from './Menu.types';

const Menu: FC<MenuProps> = ({ daysMenu }) => {
  return (
    <>
      <h1>Меню</h1>
      {daysMenu.map((day) => {
        return (
          <div key={day.day}>
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
                  <div key={dishInMenu.dishId}>
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
                          <p key={ingredient.productId}>
                            {product.name}, {product.unit} -{' '}
                            {ingredient.quantity} {ingredient.unit}
                          </p>
                        );
                      })}
                    </details>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Menu;
