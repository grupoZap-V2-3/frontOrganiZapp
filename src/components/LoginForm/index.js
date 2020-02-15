import React, {useState} from 'react';
import './index.scss';
import { TextField, Grid, makeStyles } from '@material-ui/core';
import { EmailOutlined, LockOutlined } from '@material-ui/icons';
import ButtonLarge from '../ButtonLarge';
import { validatePassword, validateEmail } from './../../services/validations';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250,
  },
}));

const LoginForm = () => {
  const classes = useStyles(TextField);

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordHelperText, setPasswordHelperText] = useState('');
  const [emailHelperText, setEmailHelperText] = useState('');
  
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { isValid: isPasswordValid, errorMessage: passwordErrorMessage } = validatePassword(passwordValue);
    const { isValid: isEmailValid, errorMessage: emailErrorMessage } = validateEmail(emailValue);
    if(!isEmailValid || !isPasswordValid) {
      setEmailHelperText(emailErrorMessage);
      setPasswordHelperText(passwordErrorMessage);
    }
  }

  return(
    <form onSubmit={handleSubmitForm} className="loginFormContent">
      <Grid container spacing={1} alignItems="flex-end"> 
        <Grid item>
          <EmailOutlined />
          <TextField 
            id="input-with-icon-grid" 
            className={classes.textField}
            type="email" 
            label="Correo..."
            helperText={emailHelperText}
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            autoComplete="off"
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <LockOutlined />
          <TextField 
            id="input2-with-icon-grid-password" 
            className={classes.textField}
            label="Contraseña..."
            helperText={passwordHelperText}
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            autoComplete="off"
            type="password"
          />
        </Grid>
      </Grid>
      {/* Submit Button */}
      <ButtonLarge text="Iniciar Sesión" />
    </form>
  );
}

export default LoginForm;