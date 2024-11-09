import { FC } from "react";
import { Label } from "@gravity-ui/uikit";

import { dishes } from "../../dishes";

import Dish from "../Dish";

import { MenuProps } from "./Menu.types";

const Menu: FC<MenuProps> = ({ daysMenu }) => {
  return daysMenu.map((day) => {
    const allCalories = day.dishes.reduce((acc, dish) => {
      const calories =
        dishes.find((item) => item.id === dish.dishId)?.calories ?? 0;
      return acc + calories;
    }, 0);
    const dishQuantityMap: Record<number, number> = {};
    daysMenu.forEach((day) => {
      day.dishes.forEach((dish) => {
        const countedQauntity = dishQuantityMap[dish.dishId];
        if (!countedQauntity) {
          dishQuantityMap[dish.dishId] = dish.quantity;
        }
        if (countedQauntity > 0 && dish.fromFridge) {
          dishQuantityMap[dish.dishId] = countedQauntity + dish.quantity;
        }
      });
    });
    return (
      <div key={day.day}>
        <h2>
          {day.day}{" "}
          <Label
            size="s"
            theme={
              allCalories >= 1200 && allCalories <= 1600 ? "success" : "warning"
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
            const title = (
              <>
                {dish.name} <Label size="xs">{dish.calories} ккал</Label> -
                порции {dishInMenu.quantity}
              </>
            );
            if (dishInMenu.fromFridge) {
              return (
                <div style={{ marginBottom: "4px" }}>
                  <Label theme="info" size="xs">
                    Из холодильника
                  </Label>{" "}
                  {title}
                </div>
              );
            }
            const needCookQuantity = dishQuantityMap[dishInMenu.dishId];
            return (
              <div key={dishInMenu.dishId} style={{ marginBottom: "4px" }}>
                <details>
                  <summary style={{ cursor: "pointer" }}>{title}</summary>
                  Нужно приготовить: {needCookQuantity}
                  <Dish dish={dish} quantity={needCookQuantity} />
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
