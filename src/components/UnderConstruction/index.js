import React from 'react';
import MainFooter from './../MainFooter';
import './UnderConstruction.scss';

const underConstructionImage = require('./../../theme/images/under_construction.png');
const appLogo = require('./../../theme/images/logo_white.png');

const UnderConstruction = () => (
  <>
    <div className="UnderConstructionWrapper">
      <div className="UnderConstructionWrapper-header">
        <img src={appLogo} alt="OrganiZapp logo" className="UnderConstructionWrapper-logo"/>
      </div>
      <img src={underConstructionImage} alt="página en construcción" className="UnderConstructionWrapper-img" />
    </div>
    <div className="UnderConstructionWrapper-footer">
        <MainFooter/>
    </div>
  </>
);

export default UnderConstruction;