import React from "react";
import "./ReservationsComponent.css";
import ReservationCard from '../elements/ReservationCard';
import DeleteReservationModalComponent from "../components/DeleteReservationModalComponent";

const ReservationsComponent = (props) => {
  const { reservations } = props;
  const [open, setOpen] = React.useState(false);
  const [selectedReservation, setSetSelectedReservation] = React.useState(undefined)

    const handleOpen = (reservation) => {
      setSetSelectedReservation(reservation)
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const deleteReservation = () => {
      props.deleteReservation(selectedReservation)
      setOpen(false)
    }

    const setSelectedReservation = (reservation) =>{
      props.setSelectedReservation(reservation)
    }

  return (
    <div className="reservations-container">
      {reservations.map((reservation, index) => (
        <ReservationCard {...props} reservation={reservation} key={index} openModal={handleOpen} setSelectedReservation={setSelectedReservation}/>
      ))}
      <DeleteReservationModalComponent open={open} handleClose={handleClose} deleteReservation={deleteReservation}/>
    </div>
  );
};

export default ReservationsComponent;
