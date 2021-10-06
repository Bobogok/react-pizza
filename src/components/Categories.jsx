import React, { memo } from 'react';
import classNames from 'classNames';
import PropTypes from 'prop-types';

const Categories = memo(function Categories({ activeCategory, items, onClickCategory }) {
  return (
    <div className="categories">
      <ul className="categories__inner">
        <li
          className={classNames('categories__item', { active: activeCategory === null })}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {items.map((item, index) => (
          <li
            key={item}
            className={classNames('categories__item', { active: activeCategory === index })}
            onClick={() => onClickCategory(index)}>
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
