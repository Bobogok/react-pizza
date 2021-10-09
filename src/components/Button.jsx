import React from 'react';
import classNames from 'classNames';

function Button({ onClick, className, children, outline, add, circle }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
        'button--add': add,
        'button--circle': circle
      })}>
      {children}
    </button>
  );
}

export default Button;
