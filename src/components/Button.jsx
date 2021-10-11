import React from 'react';
import classNames from 'classnames';

function Button({ onClick, className, children, outline, add, circle, black, cart }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
        'button--add': add,
        'button--circle': circle,
        'button--black': black,
        'button--cart': cart
      })}
    >
      {children}
    </button>
  );
}

export default Button;
