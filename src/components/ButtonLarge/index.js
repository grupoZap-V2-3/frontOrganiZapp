import React from 'react';
import './ButtonLarge.scss';

const ButtonLarge = () => {
  return (
    <div
      className="LargeButton"
    >
      <button className="LargeButton__background" type="button">
        <p className="LargeButton__text">Iniciar sesión</p>
      </button>
    </div>
  );
};

export default ButtonLarge;