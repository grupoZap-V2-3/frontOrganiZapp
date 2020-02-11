import React from 'react';
import MainHeader from '../../components/MainHeader';
import NavbarHost from '../../components/NavbarHost';

const HostPage = () => (
  <header>
    <MainHeader 
    userRole="Anfitrión" 
    />
    <NavbarHost title="eventos"/>
  </header>

);

export default HostPage;