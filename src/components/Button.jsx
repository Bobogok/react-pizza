import React from 'react';
import classNames from 'classNames';

function Button({ onClick, className, children, outline, add }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
        'button--add': add
      })}>
      {children}
    </button>
  );
}

export default Button;
