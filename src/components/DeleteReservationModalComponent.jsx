import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from "react";
import "./EditCreateReservationComponent.css";
import Modal from '@material-ui/core/Modal';
import {Button, Grid} from  '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';

const DeleteReservationModalComponent = (props) => {

    const useStyles = makeStyles((theme) => ({
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        paper: {
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          width: "500px",
          padding: "40px",
          outline: "none"
        },
      }));
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  const body = (
    <div className={classes.paper}>
      <h2 style={{textAlign: 'center', fontWeight: "normal"}} id="simple-modal-title">Delete reservation</h2>
      <p style={{textAlign: 'center', fontSize: '16px', margin: '50px 0px'}} id="simple-modal-description">
        Are you sure you want to delete this reservation?
      </p>
      <Grid container direction="row" justify="space-between" style={{width: "180px", margin: "auto"}}>
        <Button className="blue-button" onClick={() => props.handleClose()}>Cancel</Button>
        <Button className="red-button" onClick={() => props.deleteReservation()}>Delete</Button>
      </Grid>
      <DeleteReservationModalComponent />
    </div>
  );
  return (
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {body}
    </Modal>
  );
};

export default DeleteReservationModalComponent;
