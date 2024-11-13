import { FC } from "react";

import { products } from "../../products";

import { DishProps } from "./Dish.types";

const Dish: FC<DishProps> = ({ dish, quantity = 1 }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flexGrow: "1" }}>
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
              {`${product.name} - ${ingredient.quantity} ${
                product.unit
              } * ${quantity} = ${ingredient.quantity * quantity} ${
                product.unit
              }`}
            </p>
          );
        })}
        <p>{dish.recipe}</p>
      </div>
      {dish.imagePath && <img src={dish.imagePath} width={350} />}
    </div>
  );
};
export default Dish;
