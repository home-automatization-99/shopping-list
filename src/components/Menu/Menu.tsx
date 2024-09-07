import { FC } from 'react';
import { dishes } from '../../dishes';
import { products } from '../../products';
import { MenuProps } from './Menu.types';
import { Label } from '@gravity-ui/uikit';

const Menu: FC<MenuProps> = ({ daysMenu }) => {
  return daysMenu.map((day) => {
    const allCalories = day.dishes.reduce((acc, dish) => {
      const calories =
        dishes.find((item) => item.id === dish.dishId)?.calories ?? 0;
      return acc + calories;
    }, 0);
    return (
      <div key={day.day}>
        <h2>
          {day.day}{' '}
          <Label
            size="s"
            theme={
              allCalories >= 1200 && allCalories <= 1600 ? 'success' : 'warning'
            }
          >
            {allCalories} ккал
          </Label>
        </h2>
        <div>
          {day.dishes.map((dishInMenu) => {
            const dish = dishes.find((item) => item.id === dishInMenu.dishId);
            if (!dish) {
              return null;
            }
            return (
              <div key={dishInMenu.dishId}>
                <details style={{ marginBottom: '4px' }}>
                  <summary style={{ cursor: 'pointer' }}>
                    {dish.name} <Label size="xs">{dish.calories} ккал</Label> -
                    порции {dishInMenu.quantity}
                  </summary>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div style={{ flexGrow: '1' }}>
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
                    </div>
                    {dish.imagePath && <img src={dish.imagePath} width={350} />}
                  </div>
                </details>
              </div>
            );
          })}
        </div>
      </div>
    );
  });
};
export default Menu;
