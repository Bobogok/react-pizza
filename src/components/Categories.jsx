import React, { useState } from 'react';
import classNames from 'classNames';

function Categories({ items }) {
  const [activeItem, setActiveItem] = useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul className="categories__inner">
        {items.map((item, index) => (
          <li
            key={`${item}_${index}`}
            className={classNames('categories__item', { active: activeItem === index })}
            onClick={() => onSelectItem(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
