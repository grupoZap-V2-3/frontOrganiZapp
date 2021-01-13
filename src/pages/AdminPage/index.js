import React, { useState } from 'react';
import MainHeader from '../../components/MainHeader';
import NavbarAdmin from '../../components/NavbarAdmin';
import EventModal from '../../components/EventModal';

const AdminPage = ({ location }) => {

  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <main>
      <MainHeader
        userRole="Administrador"
      />
      <NavbarAdmin location={location} handleOpenModal={handleOpenModal} />
      {/* <Eventos Activos/Archivo menu component> */}
      <EventModal open={open} handleCloseModal={handleCloseModal} />
    </main>
  )
};

export default AdminPage;