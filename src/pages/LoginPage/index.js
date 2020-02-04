import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { EmailOutlined, LockOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import ButtonLarge from '../../components/ButtonLarge';

const headerLogo = require('../../theme/images/logo_white.png');
const footerLogo = require('../../theme/images/logo_gobZapopan_gris.png');

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250,
  },
}));

const LoginPage = () => {
  const classes = useStyles();

  return(
    <section className="LoginHeader"> 
      {/* Header */}
      <div className="LoginHeaderContent">
        <img src={headerLogo} alt="headerLogo" className="LoginHeaderContent-logo" />
        <h1 className="LoginHeaderContent-text">Bienvenid@</h1>
      </div>
      <div className="LoginFormWrapper">
        {/* Material mail Input */}
        <Grid container spacing={1} alignItems="flex-end"> 
          <Grid item>
            <EmailOutlined />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" 
            className={classes.textField}
            type="email" 
            label="Correo Electrónico..."
            />
          </Grid>
        </Grid>
        {/* Material password Input */}
        <Grid container spacing={1} alignItems="flex-end"> 
          <Grid item>
            <LockOutlined />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" 
            className={classes.textField}
            type="password" 
            label="Contraseña..."
             />
          </Grid>
        </Grid>
        {/* Submit Button */}
        <ButtonLarge text="Iniciar Sesión" /> 
        <div>
          {/* Forgot Password Link */}
          <Link to="/change-pass" className="LoginFormWrapper-forgotPassword"   
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
}

export default LoginPage;