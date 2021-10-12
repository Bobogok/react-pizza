import React, { memo } from 'react';
<<<<<<< HEAD
import classNames from 'classnames';
=======
import classNames from 'classNames';
>>>>>>> dc5c3600a0e580c2e47e895924f58036c10fdd7b
import PropTypes from 'prop-types';

const Categories = memo(function Categories({ activeCategory, items, onClickCategory }) {
  return (
    <div className="categories">
      <ul className="categories__inner">
        <li
          className={classNames('categories__item', { active: activeCategory === null })}
<<<<<<< HEAD
          onClick={() => onClickCategory(null)}
        >
=======
          onClick={() => onClickCategory(null)}>
>>>>>>> dc5c3600a0e580c2e47e895924f58036c10fdd7b
          Все
        </li>
        {items.map((item, index) => (
          <li
            key={item}
            className={classNames('categories__item', { active: activeCategory === index })}
<<<<<<< HEAD
            onClick={() => onClickCategory(index)}
          >
=======
            onClick={() => onClickCategory(index)}>
>>>>>>> dc5c3600a0e580c2e47e895924f58036c10fdd7b
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string),
  onClickCategory: PropTypes.func.isRequired
};

Categories.defaultProps = {
  activeCategory: null,
  items: []
};

export default Categories;
