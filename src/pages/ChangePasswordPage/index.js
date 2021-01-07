import React, { useState } from 'react';
import './index.scss';
import MainHeader from '../../components/MainHeader';
import ButtonLarge from '../../components/ButtonLarge';
import MainFooter from '../../components/MainFooter';
import { TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LockOpen } from '@material-ui/icons';
import { validatePassword } from './../../services/validations';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250,
  },
}));

const ChangePasswordPage = () => {
  const classes = useStyles();

  const [passwordValue, setPasswordValue] = useState('');
  const [passwordHelperText, setPasswordHelperText] = useState('');
  const [repeatPasswordValue, setRepeatPasswordValue] = useState('');
  const [repeatPasswordHelperText, setRepeatPasswordHelperText] = useState('');


  const handleSubmitForm = (e) => {
    const { isValid: isPasswordValid, errorMessage: passwordErrorMessage, validMessage: passwordValidMessage } = validatePassword(passwordValue);
    e.preventDefault();
    isPasswordValid ? setPasswordHelperText(passwordValidMessage) : setPasswordHelperText(passwordErrorMessage);
    (passwordValue === repeatPasswordValue && isPasswordValid) ? setRepeatPasswordHelperText('Contraseñas Coinciden!') : repeatPasswordValue === '' ? setRepeatPasswordHelperText('') : setRepeatPasswordHelperText('No coinciden la contraseñas ingresadas');
  }

  return (
    <section>
      <MainHeader />
      <div className="ChangePassContentWrapper">
        {/* Material Changepassword Input */}
        <form onSubmit={handleSubmitForm} className="passwordFormContent">
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <LockOpen />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                className={classes.textField}
                type="password"
                label="Escribe tu Nueva Contraseña..."
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                autoComplete="off"
                helperText={passwordHelperText}
                required="required"
              />
            </Grid>
          </Grid>
          {/* Material Confirmpassword Input */}
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <LockOpen />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                className={classes.textField}
                type="password"
                label="Confirma tu Nueva Contraseña..."
                value={repeatPasswordValue}
                onChange={(e) => setRepeatPasswordValue(e.target.value)}
                autoComplete="off"
                helperText={repeatPasswordHelperText}
                required="required"
              />
            </Grid>
          </Grid>
          <ButtonLarge text="Cambiar Contraseña" />
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