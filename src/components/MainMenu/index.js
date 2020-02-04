import React from 'react';
import { Link } from 'react-router-dom';
/*import PropTypes from 'prop-types';*/
import { MenuOutlined } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './MainMenu.scss';

//ToDo: find the best way to provide the proper menu item given the user role
//const [middleMenuItem, setMiddleMenuItem = React.useState()]
//const menuItemHost="Eventos Asignados";
const menuItemAdmin="Crear Evento";

const MainMenu = ( { menuItem2, path1, path2, path3 }) => {
//Material simple menu functionality beggins  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }; //Material simple menu functionality ends 
  //ToDO: change path1 to /changePassword when available
  //      depending on the user rol path 2 would go to /admin or /host
  return (
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuOutlined className="menuIcon" />
      </IconButton>
      <Menu
        id="simple-menu"
        className="MainMenu MainMenu-list"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link className="MainMenu-link" to="/change-pass"> 
          <MenuItem 
            className="MainMenu-item"
            onClick={handleClose}
          >
            Cambiar Contraseña
          </MenuItem>
        </Link>
        <Link className="MainMenu-link" to={path2}>  
          <MenuItem 
            className="MainMenu-item"
            onClick={handleClose}
          >
            {menuItemAdmin}
          </MenuItem>
        </Link>
        <Link className="MainMenu-link" to="/login">
          <MenuItem 
            className="MainMenu-item"
            onClick={handleClose}
          >
            Cerrar Sesión
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

/* 
MainMenu.propTypes={
  menuItem1: PropTypes.string.isRequired,
  menuItem2: PropTypes.string.isRequired,
  menuItem3: PropTypes.string.isRequired,
};
*/

export default MainMenu;