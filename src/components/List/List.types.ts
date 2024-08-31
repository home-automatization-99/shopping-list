import { Category } from '../../products';

export interface ListProps {
  id: number;
  name: string;
  listByCategory: Record<Category, Record<number, number>>;
}
