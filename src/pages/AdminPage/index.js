import React from 'react';
import MainHeader from '../../components/MainHeader';
import NavbarAdmin from '../../components/NavbarAdmin';

const AdminPage = () => (
  <header>
    <MainHeader 
    userRole="Administrador" 
    />
    <NavbarAdmin/>
  </header>
);

export default AdminPage;