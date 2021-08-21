import { Category } from '@models';
import classNames from 'classnames';
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
    <li
      className='category item'
      style={{ display: 'flex' }}
      onClick={onCategorySelect}
    >
      <h4 className={classNames('header', 'content')}>{name}</h4>
      {selectedCategory === id && (
        <i className='relative pl-2 text-[#000000d9] top-[-3px]'>&#9679;</i>
      )}
    </li>
  );
};

export { CategoryInfo };
