import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import EventInfoForm from '../EventInfoForm';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    minWidth: 300,
    maxWidth: 600,
    width: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #edba11',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 2),
    outline: 'none',
  },
}));

const EventModal = ({ open, handleCloseModal }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [open, setOpen] = React.useState(false);

  const body = (
    <div className={classes.paper}>
      <EventInfoForm btnText="Continuar" />
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseModal}
        className={classes.modal}
      >
        {body}
      </Modal>
    </div>
  );
}

export default EventModal;
