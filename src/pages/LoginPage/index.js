import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import LoginForm from '../../components/LoginForm';
//Logos
const headerLogo = require('../../theme/images/logo_white.png');
const footerLogo = require('../../theme/images/logo_gobZapopan_gris.png');

const LoginPage = () => {
  return (
    <section className="LoginHeader">
      {/* Header */}
      <div className="LoginHeaderContent">
        <img src={headerLogo} alt="headerLogo" className="LoginHeaderContent-logo" />
        <h1 className="LoginHeaderContent-text">Bienvenid@</h1>
      </div>
      {/* Form */}
      <div className="LoginFormWrapper">
        <LoginForm />
        <div>
          <Link to="/forgot-password" className="LoginFormWrapper-forgotPassword"
            style={{
              textDecoration: 'none',
            }}>
            <span className="LoginFormWrapper-forgotPassword">¿Olvidaste tu contraseña?</span>
          </Link>
        </div>
      </div>
      {/* Footer */}
      <footer className="LoginFooter">
        <img src={footerLogo} alt="ZapopanGobLogo" className="LoginFooter-logo" />
      </footer>
    </section>
  );
};

export default LoginPage;