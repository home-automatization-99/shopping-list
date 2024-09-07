import { FC } from 'react';
import { Button, List as ListComponent } from '@gravity-ui/uikit';
import { ListProps } from './List.types';
import { products } from '../../products';
import { useLocalStorage } from 'react-use';

const List: FC<ListProps> = ({ listByCategory, id: listId }) => {
  const [checkedIds, setCheckedIds, removeCheckedIds] = useLocalStorage<
    string[]
  >(`checked${listId}`, []);

  const onItemClick = (item: [string, number]) => {
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

  return Object.entries(listByCategory).map((item) => {
    const [category, listOfCategory] = item as [string, Record<number, number>];
    return (
      <div key={category}>
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
                  padding: '10px 13px',
                }}
              >
                {ingredient.name} - {Number(quantity)} {ingredient.unit}
              </span>
            );
          }}
          onItemClick={onItemClick}
          filterItem={(filter) => (item) => {
            const ingredient = products.find(
              (product) => String(product.id) === String(item[0])
            );
            return ingredient !== undefined && ingredient.name.includes(filter);
          }}
          virtualized={false}
        />
        <Button style={{ marginTop: '4px' }} onClick={() => removeCheckedIds()}>
          Очистить все
        </Button>
      </div>
    );
  });
};
export default List;
