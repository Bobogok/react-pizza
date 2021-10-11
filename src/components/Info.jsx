import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function Info({ title, description, image }) {
  return (
    <div className="empty-cart">
      <h2 className="empty-cart__title">{title}</h2>
      <div className="empty-cart__text">{description}</div>
      {image}
      <Link to="/">
        <Button className="empty-cart__button" black>
          Вернуться назад
        </Button>
      </Link>
    </div>
  );
}

export default Info;
