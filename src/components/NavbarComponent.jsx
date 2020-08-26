import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import {Button} from '@material-ui/core';
import menu from '../images/menu.png';
import { connect } from "react-redux";
import { removeSelectedReservation } from "../store/actionCreators";
import "./NavbarComponent.css";

const mapDispatchToProps = (dispatch) => ({
    removeSelectedReservation: () => dispatch(removeSelectedReservation()),
});

const NavbarComponent = (props) => {
    return (
        <div className="navbar">
            <div className="current-page-details">
                <span className="page-name">Reservations</span>
                {window.location.pathname!=="/reservations/new" ? <Button 
                    variant="contained" 
                    className="green-button"
                    onClick={() => {
                        props.history.push("/reservations/new")
                        props.removeSelectedReservation()
                        }
                    }
                >
                    Create
                </Button>
                :
                <Button 
                    variant="contained" 
                    className="blue-button"
                    onClick={() => props.history.push("/reservations")}
                >
                    Return
                </Button>
                }  
            </div>
            <div className="menu">
                <img src={menu} alt="sandwich"/>
            </div>
        </div>
    )
};

export default withRouter(connect(undefined, mapDispatchToProps)(NavbarComponent));