import { FC } from "react";

import { products } from "../../products";

import { DishProps } from "./Dish.types";

const Dish: FC<DishProps> = ({ dish }) => {
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
              {product.name}, {product.unit} - {ingredient.quantity}{" "}
              {ingredient.unit}
            </p>
          );
        })}
      </div>
      {dish.imagePath && <img src={dish.imagePath} width={350} />}
    </div>
  );
};
export default Dish;
