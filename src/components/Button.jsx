import React from 'react';
<<<<<<< HEAD
import classNames from 'classnames';
=======
import classNames from 'classNames';
>>>>>>> dc5c3600a0e580c2e47e895924f58036c10fdd7b

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
<<<<<<< HEAD
      })}
    >
=======
      })}>
>>>>>>> dc5c3600a0e580c2e47e895924f58036c10fdd7b
      {children}
    </button>
  );
}

export default Button;
