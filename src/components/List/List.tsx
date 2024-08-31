import { FC } from 'react';
import { List as ListComponent } from '@gravity-ui/uikit';
import { ListProps } from './List.types';
import { products } from '../../products';
import { useLocalStorage } from 'react-use';

const List: FC<ListProps> = ({ name, listByCategory, id: listId }) => {
  const [checkedIds, setCheckedIds] = useLocalStorage<string[]>(
    `checked${listId}`,
    []
  );

  const onItemClick = (item: [string, number]) => {
    console.log(item);
    console.log(checkedIds);

    const id = item[0];
    if (!checkedIds) {
      setCheckedIds([id]);
      return;
    }
    if (checkedIds.includes(id)) {
      setCheckedIds([...checkedIds.filter((itemId) => String(itemId) !== id)]);
      return;
    } else {
      const newIds: string[] = [...checkedIds];
      newIds.push(id);
      setCheckedIds(newIds);
    }
  };
  return (
    <>
      <h2>{name}</h2>
      {Object.entries(listByCategory).map((item) => {
        const [category, listOfCategory] = item as [
          string,
          Record<number, number>
        ];
        return (
          <div key={category}>
            <h2>{category}</h2>
            <ListComponent
              filterable={false}
              items={Object.entries(listOfCategory) as [string, number][]}
              renderItem={(item) => {
                const [ingredientId, quantity] = item;
                const ingredient = products.find(
                  (product) => String(product.id) === String(ingredientId)
                );
                if (!ingredient) {
                  return;
                }
                return (
                  <span
                    style={{
                      textDecoration: checkedIds?.includes(ingredientId)
                        ? 'line-through'
                        : 'none',
                    }}
                  >
                    {ingredient.name} - {Number(quantity)} {ingredient.unit}
                  </span>
                );
              }}
              onItemClick={onItemClick}
              itemsHeight={1000}
              filterItem={(filter) => (item) => {
                const ingredient = products.find(
                  (product) => String(product.id) === String(item[0])
                );
                return (
                  ingredient !== undefined && ingredient.name.includes(filter)
                );
              }}
            />
          </div>
        );
      })}
    </>
  );
};
export default List;
