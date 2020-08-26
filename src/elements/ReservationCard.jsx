import React, { useState } from "react";
import "./ReservationCard.css";
import reservationLogo from "../images/reservationLogo.png";
import edit from "../images/edit.png";
import trash from "../images/trash.png";
import calendar from "../images/calendar.png";
import group from "../images/group.png";
import Moment from 'react-moment';
import { withRouter } from 'react-router-dom';

const ReservationCard = (props) => {

    const editReservation = () =>{
        props.setSelectedReservation(props.reservation)
        props.history.push("reservations/new")
    }

    const deleteReservation = () =>{
        props.openModal(props.reservation)
    }

    return (
        <div className="reservation" key={props.key}>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className="reservation-name-container">
                <img className="card-icon" src={reservationLogo} alt="reservation-icon"/>
                <p className="card-name">{props.reservation.name}</p>
                {props.reservation.email ? <span className="reservation-email">{props.reservation.email}</span> : ""}
            </div>
            <div className="reservation-actions">
                <img onClick={editReservation} className="icon-with-action" src={edit} alt="edit-icon"/>   
                <img onClick={deleteReservation} className="icon-with-action" src={trash} alt="trash-icon"/>
            </div>
          </div>
          <div className="reservation-info">
            <div className="reservation-date-container">
                <img className="reservation-date-icon" src={calendar} alt="reservation-date-icon"/>
                <p className="reservation-date">
                    <Moment unix format="DD MMM YYYY  HH:MM">{props.reservation.dateTime}</Moment>
                </p>
            </div>
            <div className="reservation-numberOfGuests-container">
                <img className="icon" src={group} alt="reservation-guest-icon"/>
                <p className="icon">{props.reservation.numberOfGuests}</p>
            </div>
          </div>
        </div>
    )
};

export default withRouter(ReservationCard);