import React from 'react';
import classNames from 'classNames';

function Button({ className, children, outline }) {
  return (
    <button
      className={classNames('button', className, {
        'button--outline': outline
      })}>
      {children}
    </button>
  );
}

export default Button;
