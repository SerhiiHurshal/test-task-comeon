import { Category } from '@models';
import { FC } from 'react';

interface Props extends Category {
  onClick: (id: number) => void;
  selectedCategory: number;
}

const CategoryInfo: FC<Props> = ({ name, onClick, id, selectedCategory }) => {
  const onCategorySelect = () => {
    onClick(id);
  };

  return (
    <div
      className='category item'
      style={{ display: 'flex' }}
      onClick={onCategorySelect}
    >
      <div className='content'>
        <div className='header'>{name}</div>
      </div>
      {selectedCategory === id && (
        <i className='relative pl-2 text-[#000000d9] top-[-3px]'>&#9679;</i>
      )}
    </div>
  );
};

export { CategoryInfo };
