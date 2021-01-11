import React, { useState } from 'react';
import './index.scss';
import MainHeader from '../../components/MainHeader';
import ButtonLarge from '../../components/ButtonLarge';
import MainFooter from '../../components/MainFooter';
import { TextField, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { EmailOutlined } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250,
  },
}));

const ChangePasswordPage = () => {
  const classes = useStyles();

  const [emailValue, setEmailValue] = useState('');
  const [forgotPasswordHelperText, setForgotPasswordlHelperText] = useState("Ingresa la dirección de correo de tu cuenta registrada y te enviaremos un enlace para poder cambiar tu contraseña ");

  const handleResetPasswordForm = (e) => {
    // A function to check if Mail is valid
    e.preventDefault();
    //isEmailValid ? setForgotPasswordHelperText(emailValidMessage) : setForgotPasswordHelperText(emailErrorMessage);
    //Send the email
  }

  return (
    <section>
      {/* Check available menu options */}
      <MainHeader adittionalInfo='Cambia tu Contraseña' />
      <div className="forgotPasswordContentWrapper">
        {/* Material Changepassword Input */}
        <form onSubmit={handleResetPasswordForm} className="emailFormContent">
          <Paper className="infoContentWrapper">
            <span className="forgotPasswordInfo">
              {forgotPasswordHelperText}
            </span>
          </Paper>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <EmailOutlined />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                className={classes.textField}
                label="Correo..."
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                autoComplete="off"
                required="required"
              />
            </Grid>
          </Grid>

          <ButtonLarge text="Enviar correo para cambiar contraseña" />
        </form>
      </div>
      {/* Footer */}
      <div className="footer">
        <MainFooter />
      </div>
    </section>
  );
}

export default ChangePasswordPage;