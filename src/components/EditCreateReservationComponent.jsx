import { FormControl, FormHelperText, Grid, Input, InputLabel, Button} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./EditCreateReservationComponent.css";
import plus from "../images/plus.png";
import edit from "../images/edit-white.png";

const EditCreateReservationComponent = (props) => {
  const [name, setName] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [reservationDate, setReservationDate] = useState(new Date());
  const [reservationTime, setReservationTime] = useState(new Date());
  const [email, setEmail] = useState("");
  const submitDisabled = !name || !numberOfGuests || !reservationDate || !reservationTime;

  useEffect(() =>{
    if(props.selectedReservation){
      setName(props.selectedReservation.name);
      setNumberOfGuests(props.selectedReservation.numberOfGuests);
      setReservationDate(props.selectedReservation.reservationDate);
      setReservationTime(props.selectedReservation.reservationTime);
      setEmail(props.selectedReservation.email);
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createReservation({ name, numberOfGuests, reservationDate, reservationTime, email});
    props.history.push("/reservations/created")
  }

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit} className="new-reservation-form">
      <Grid container direction="column" spacing={1} justify="center">
        {props.selectedReservation ? 
          <Grid container direction="row">
            <img className="card-icon-blue" src={edit} alt="plus-icon"/>
            <p className="card-name">Edit reservation</p>
          </Grid>
          :
          <Grid container direction="row">
            <img className="card-icon" src={plus} alt="plus-icon"/>
            <p className="card-name">New reservation</p>
          </Grid>
        }
        <Grid container direction="row" justify="space-between" className="input-row-container">
          <Grid item>
            <FormControl>
              <InputLabel required>
                Name
              </InputLabel>
              <Input id="name" value={name} onChange={(event) => setName(event.target.value)} />
              <FormHelperText id="name-text">
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel required>
                Date
              </InputLabel>
              <Input 
                type="date" 
                value={reservationDate}
                onChange={(event) => setReservationDate(event.target.value)}
                />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="space-between" className="input-row-container">
          <Grid item>
            <FormControl>
              <InputLabel required>
                Number of guests
              </InputLabel>
              <Input type="number" max="12" min="1" value={numberOfGuests} onChange={(event) => setNumberOfGuests(event.target.value)} />
              <FormHelperText id="name-text">
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel required>
                Time
              </InputLabel>
              <Input 
                type="time" 
                value={reservationTime} 
                onChange={(event) => setReservationTime(event.target.value)} 
                style={{width: "170px"}}
                />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="space-between" className="input-row-container">
          <FormControl>
              <InputLabel>
                Email
              </InputLabel>
              <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
              <FormHelperText id="name-text">
              </FormHelperText>
            </FormControl>
        </Grid>
        <Grid container direction="row" justify="flex-end" className="input-row-container">
          {props.selectedReservation ? 
            <Button type="submit" className="blue-button" disabled={submitDisabled}>
              Update
            </Button> 
            :
            <Button type="submit" className="green-button" disabled={submitDisabled} >
              Create
            </Button>
          }
        </Grid>
      </Grid>
    </form>
  );
};

export default EditCreateReservationComponent;
