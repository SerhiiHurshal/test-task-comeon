import { Category } from '@models';
import { Dispatch, FC, SetStateAction } from 'react';
import { CategoryInfo } from './CategoryInfo';

type Props = {
  categories: Category[];
  selectedCategory: number;
  setSelectedCategory: Dispatch<SetStateAction<number>>;
};

const CategoriesSection: FC<Props> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => (
  <aside className='four wide column'>
    <h3 className='ui dividing header'>Categories</h3>

    <ul className='ui selection animated list category items'>
      {categories.map((category) => (
        <CategoryInfo
          {...category}
          selectedCategory={selectedCategory}
          onClick={setSelectedCategory}
          key={category.id}
        />
      ))}
    </ul>
  </aside>
);

export { CategoriesSection };
