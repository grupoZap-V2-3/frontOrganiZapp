import React from 'react';
import './index.scss'; 
import MainHeader from '../../components/MainHeader';
import ButtonLarge from '../../components/ButtonLarge';
import MainFooter from '../../components/MainFooter';
import { TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LockOpen } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250,
  },
}));

const ChangePasswordPage = () => {
  const classes = useStyles();
  return (
    <section>
      <MainHeader />
      <div className="ChangePassContentWrapper">
        {/* Material Changepassword Input */}
        <Grid container spacing={1} alignItems="flex-end"> 
          <Grid item>
            <LockOpen />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" 
            className={classes.textField}
            type="password" 
            label="Escribe tu Nueva Contraseña..."
            />
          </Grid>
        </Grid>
        {/* Material Confirmpassword Input */}
        <Grid container spacing={1} alignItems="flex-end"> 
          <Grid item>
            <LockOpen />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" 
            className={classes.textField}
            type="password" 
            label="Confirma tu Nueva Contraseña..."
              />
          </Grid>
        </Grid>
        <ButtonLarge text="Cambiar Contraseña" />
      </div>
      {/* Footer */}
      <div className="footer">
        <MainFooter/>
      </div>
    </section>
  );
}

export default ChangePasswordPage;