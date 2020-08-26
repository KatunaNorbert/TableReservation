import { Grid, Button} from "@material-ui/core";
import React, { useState } from "react";
import "./CreatedReservationComponent.css";
import checkmark from "../images/checkmark.png";
import plus from "../images/plus.png";

const CreatedReservationComponent = (props) => {
  return (
    <div className="new-reservation-form">
      <Grid className="created-reservation-component" container direction="column" spacing={1} justify="center">
        <Grid container direction="row">
          <img className="card-icon" src={plus} alt="reservation-icon"/>
          <p className="card-name">New reservation</p>
        </Grid>
        <Grid container direction="column" align="center" justify="center" className="input-row-container card-content">
          <Grid className="success-image" item>
            <img src={checkmark} alt="checkmark"/>
          </Grid>
          <Grid className="succes-text" item>
            <p>Reservation created</p>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" className="input-row-container">
          <Button className="blue-button" onClick={() => {props.history.push("/reservations")}}>
            Reservations
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreatedReservationComponent;
