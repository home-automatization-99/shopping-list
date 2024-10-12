import { Label } from "@gravity-ui/uikit";

import { dishes } from "../../dishes";

import Dish from "../Dish";

const Dishes = () => {
  return dishes.map((dish) => (
    <details style={{ marginBottom: "8px" }}>
      <summary>
        #{dish.id} {dish.name} <Label size="xs">{dish.calories} ккал</Label>
      </summary>
      <Dish dish={dish} key={dish.id} />
    </details>
  ));
};
export default Dishes;
