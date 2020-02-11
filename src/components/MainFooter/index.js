import React from 'react';
import './index.scss';  

const footerHeartLogo = require('../../theme/images/Icon_brain_heart.png');
const now = new Date();
const year = now.getFullYear()

const MainFooter = () =>(
  <div className="MainFooterContainer">
    <span>© {year}, made with &#32; </span> 
      <img className="heartLogo" src={footerHeartLogo} alt="HeartLogo" /> 
    <span>&#32; by Grupo Zap &#60;V2.3/&#62;</span>
  </div>
);

export default MainFooter;