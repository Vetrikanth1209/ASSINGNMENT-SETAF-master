import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';

const Alerts = ({ success }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    let timer;
    if (open) {
      timer = setTimeout(() => {
        setOpen(false);
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!open) {
      // Refresh the page once the alert is hidden
      window.location.reload();
    }
  }, [open]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      TransitionComponent={Slide}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={success ? 'success' : 'error'}
      >
        {success ? 'Form submitted successfully!' : 'Error submitting form. Please try again later.'}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alerts;
