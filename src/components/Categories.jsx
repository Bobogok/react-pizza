import React, { useState, memo } from 'react';
import classNames from 'classNames';

const Categories = memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul className="categories__inner">
        {items.map((item, index) => (
          <li
            key={item}
            className={classNames('categories__item', { active: activeItem === index })}
            onClick={() => onSelectItem(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
