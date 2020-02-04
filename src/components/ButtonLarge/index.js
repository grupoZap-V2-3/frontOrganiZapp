import React from 'react';
import PropTypes from 'prop-types';
import './ButtonLarge.scss';

const ButtonLarge = ( { text }) => {
  return (
    <button className="LargeButton LargeButton__background" type="submit">
      <span className="LargeButton__text">{text}</span>
    </button>
  );
};

ButtonLarge.propTypes={
  text: PropTypes.string.isRequired
};

export default ButtonLarge;