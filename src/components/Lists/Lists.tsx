import { FC, useEffect } from "react";

import getIngredientsForDays from "../../utils/getIngredientsForDays";
import calculateIngredients from "../../utils/calculateIngredients";
import sortListByCategory from "../../utils/sortListByCategory";
import { categoriesByModificator } from "../../lists";

import List from "../List";

import { ListsProps } from "./Lists.types";
import { Select } from "@gravity-ui/uikit";
import { useLocalStorage } from "react-use";
import { Category } from "../../products";

const Lists: FC<ListsProps> = ({ lists, daysMenu }) => {
  const [listId, setListId] = useLocalStorage("listId", String(lists[0].id));
  const [selectedCategory, setSelectedCategory] = useLocalStorage(
    "category",
    Category.EggsAndMilk
  );

  const list = lists.find((item) => String(item.id) === listId);
  const { id, name, days, modificator } = list || lists[0];
  const ingredients = calculateIngredients(
    getIngredientsForDays(daysMenu, days)
  );
  const allowedCategories = categoriesByModificator[modificator];
  const sortedIngredients = sortListByCategory(ingredients, [
    selectedCategory ?? Category.EggsAndMilk,
  ]);
  console.log(sortedIngredients);

  useEffect(() => {
    if (selectedCategory && !allowedCategories.includes(selectedCategory)) {
      setSelectedCategory(allowedCategories[0]);
    }
  }, [allowedCategories, selectedCategory, setSelectedCategory]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginBottom: "16px",
          minWidth: "350px",
        }}
      >
        <Select
          size="l"
          value={listId ? [String(listId)] : []}
          options={[
            ...lists.map((listItem) => ({
              value: String(listItem.id),
              content: listItem.name,
            })),
          ]}
          popupWidth={"fit"}
          onUpdate={(value) => setListId(value[0])}
        />
        <Select
          size="l"
          value={selectedCategory ? [selectedCategory] : []}
          options={allowedCategories.map((item) => ({
            value: item,
            content: item,
          }))}
          onUpdate={(value) => setSelectedCategory(value[0] as Category)}
        />
      </div>
      {list && (
        <List key={id} id={id} name={name} listByCategory={sortedIngredients} />
      )}
    </>
  );
};
export default Lists;
