import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import ButtonLarge from '../../components/ButtonLarge';

const headerLogo = require('../../theme/images/logo_white.png');
const notFoundImg = require('../../theme/images/PageNotFound.png');


const NotFoundPage = () => {

  return (
    <section className="NotFoundWrapper">
      {/* Header */}
      <div className="NotFoundWrapper-header">
        <img src={headerLogo} alt="headerLogo" className="NotFoundWrapper-header-logo" />
      </div>
      {/* Content */}
      <div className="NotFoundWrapper-content">
        <img src={notFoundImg} alt="notFoundImg" className="NotFoundWrapper-image"/>
          <p className="NotFoundWrapper-message">Ups.. No encontramos lo que buscabas</p>
          <Link to="/"
            style={{
              textDecoration: 'none',
            }}>
              <ButtonLarge text="Volver a la página de inicio" />
          </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;