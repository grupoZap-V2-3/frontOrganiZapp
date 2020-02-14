import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const headerLogo = require('../../theme/images/logo_white.png');
const footerLogo = require('../../theme/images/logo_gobZapopan_gris.png');
const notFoundImg = require('../../theme/images/PageNotFound.png');

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250,
  },
}));

const NotFoundPage = () => {

  return (
    <section className="LoginHeader">
      {/* Header */}
      <div className="LoginHeaderContent">
        <img src={headerLogo} alt="headerLogo" className="LoginHeaderContent-logo" />
      </div>
      <div className="NotFoundContent">
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item style={{ textAlign: 'center' }}>
            <img src={notFoundImg} alt="notFoundImg" className="NotFoundPageContent-img" width="90%" />
          </Grid>
          <Grid item style={{ width: '100%' }} >
            <div style={{ textAlign: "center", marginTop: 32 }}>
              {/* Forgot Password Link */}
              <p className="has-text-base size-h3">Ups.. No encontramos lo que buscabas</p>
              <Link to="/"
                style={{
                  textDecoration: 'none',
                }}>
                <a className="LoginFormWrapper-forgotPassword">Volver a la página de inicio</a>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
      {/* Footer */}
      <footer className="LoginFooter">
        <img src={footerLogo} alt="ZapopanGobLogo" className="LoginFooter-logo" />
      </footer>
    </section>
  );
}

export default NotFoundPage;