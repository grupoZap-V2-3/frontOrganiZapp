import React from 'react';
/*import PropTypes from 'prop-types';*/
import MainMenu from '../MainMenu';
import './MainHeader.scss';

const whiteLogo = require('../../theme/images/logo_white.png')

const MainHeader = ({ userRole, adittionalInfo, salute }) => {

  return (
    <header className="MainHeader">
      <div className="MainHeader-contentWrapper">
        <img src={whiteLogo} alt="App Logo" className="whiteLogo" />
        <div className="MainHeader-userGreet">
          <span className="MainHeader-userGreet__salute">{salute}</span>
          <span className="MainHeader-userGreet__userRole">{userRole}</span>
          <span className="MainHeader-userGreet__userInfo">{adittionalInfo}</span>
        </div>
        <MainMenu
        // menuItem2="Cambiar Contraseña"
        />
      </div>
    </header>
  );
};

/* 
MainHeader.propTypes={
  userRole: PropTypes.string.isRequired,
};
*/

export default MainHeader;