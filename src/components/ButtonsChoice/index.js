import React from 'react';
import PropTypes from 'prop-types';
import { DeleteOutline, Close, DoneOutline} from '@material-ui/icons';
import './ButtonsChoice.scss';

const ButtonsChoice = ({ textDisabled, textEnabled}) => {
  return (
    <main className="choiceBtnsWrapper">
      <button className="ChoiceBtn__disabled" type="button">
          <div className="circleIconWrapper__caution-action">
            <Close className="icon"/>
          </div>
          <span className="choiceText">{textDisabled}</span>       
      </button>
      <button className="ChoiceBtn__enabled" type="button">
        <div className="circleIconWrapper__danger-action">
          <DeleteOutline className="icon"/>
        </div>
        <span className="choiceText">{textEnabled}</span>
      </button>
    </main>
  );
};

ButtonsChoice.propTypes={
  textDisabled: PropTypes.string.isRequired,
  textEnabled: PropTypes.string.isRequired
};

export default ButtonsChoice;