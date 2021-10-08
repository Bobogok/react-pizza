import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classNames';
import Button from '../Button';

function Card({ id, name, imageUrl, price, types, sizes, onAddtoCart, addedCount }) {
  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];

  const [activeType, setActiveType] = useState(types[0]);
  // correctly, if we using initial state like first index in props sizes
  const [activeSize, setActiveSize] = useState(availableSizes.findIndex((item) => item === sizes[0]));

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const onAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: availableSizes[activeSize],
      type: availableTypes[activeType]
    };
    onAddtoCart(obj);
  };

  return (
    <div className="pizza-card">
      <img className="pizza-card__image" width="260" height="260" src={imageUrl} alt="pizza" />
      <h4 className="pizza-card__title">{name}</h4>
      <div className="pizza-card__selector">
        <ul className="pizza-card__top-selector">
          {availableTypes.map((type, index) => (
            <li
              key={type}
              onClick={() => onSelectType(index)}
              className={classNames('pizza-card__selector-elem', {
                active: activeType === index,
                disabled: !types.includes(index)
              })}>
              {type}
            </li>
          ))}
        </ul>
        <ul className="pizza-card__bottom-selector">
          {availableSizes.map((size, index) => (
            <li
              key={size}
              onClick={() => onSelectSize(index)}
              className={classNames('pizza-card__selector-elem', {
                active: activeSize === index,
                disabled: !sizes.includes(size)
              })}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-card__bottom">
        <div className="pizza-card__price">от {price} ₽</div>
        <Button onClick={onAddPizza} outline add>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
  onAddtoCart: PropTypes.func.isRequired,
  addedCount: PropTypes.number
};

Card.defaultProps = {
  types: [],
  sizes: [],
  addedCount: undefined
};

export default Card;
