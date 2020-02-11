import React from 'react';
import { Link } from 'react-router-dom';
/*import PropTypes from 'prop-types';*/
import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined';
import IconButton from '@material-ui/core/IconButton';
import './NavbarHost.scss';

const NavbarHost = ( {title} ) => {
  return (
    <nav className="HostNav">
      <div className="HostNav-btnWrapper">
        <Link className="HostNav-btnWrapper__navBack">
          <IconButton>
              <NavigateBeforeOutlinedIcon className="backIcon"/>
          </IconButton>
        </Link>
      </div>
      <p className="HostNav-title">{title}</p>
    </nav>
    );
}

export default NavbarHost;
/*

*/