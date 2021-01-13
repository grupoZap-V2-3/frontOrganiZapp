import React from 'react';
import { Link } from 'react-router-dom';
/*import PropTypes from 'prop-types';*/
import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import './NavbarAdmin.scss';

const noBackRoutes = [
  '/admin'
];

const NavbarAdmin = ({ location, handleOpenModal }) => {
  const { pathname } = location;
  const displayBackButtton = !noBackRoutes.includes(pathname);
  return (
    <nav className="AdminNav">
      {displayBackButtton && <div className="AdminNav-btnWrapper">
        <Link className="AdminNav-btnWrapper__navBack">
          <IconButton>
            <NavigateBeforeOutlinedIcon className="backIcon" />
          </IconButton>
        </Link>
      </div>}
      <p className="AdminNav-title">EVENTOS</p>
      <div className="AdminNav-rightBtnsWrapper">
        <div className="AdminNav-rightBtnsWrapper__container">
          <Link>
            <IconButton>
              <div className="IconCircle-notification">
                <Badge badgeContent={1} color="error">
                  <NotificationsNoneOutlinedIcon className="navIcon" />
                </Badge>
              </div>
            </IconButton>
          </Link>
          <Link>
            <IconButton onClick={handleOpenModal}>
              <div className="IconCircle-addEvent">
                <AddOutlinedIcon className="navIcon" />
              </div>
            </IconButton>
          </Link>
        </div>
      </div>
    </nav >
  );
};

export default NavbarAdmin;
