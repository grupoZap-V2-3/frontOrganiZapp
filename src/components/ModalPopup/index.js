import React from 'react';
import PropTypes from 'prop-types';
import './PopupChoice.scss';
import Modal from '@material-ui/core/Modal';



const ModalPopup = ({modalTitle})=>  {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className="ModalPopupContainer">
          <p className="ModalPopupText" >
            {modalTitle}
          </p>
        </div>
      </Modal>
    </div>
  );
}

ModalPopup.propTypes={
  modalTitle: PropTypes.string.isRequired
}
export default ModalPopup;