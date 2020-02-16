import React from 'react';
import MainHeader from '../../components/MainHeader';
import NavbarAdmin from '../../components/NavbarAdmin';
import EventInfoForm from '../../components/EventInfoForm';

const AdminPage = ({ location }) => (
  <main>
    <MainHeader 
      userRole="Administrador" 
    />
    <NavbarAdmin location={location}/>
    <EventInfoForm 
      btnText="Continuar"
    />
  </main>
);

export default AdminPage;