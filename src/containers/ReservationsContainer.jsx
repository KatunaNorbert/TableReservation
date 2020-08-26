import React from "react";
import { connect } from "react-redux";
import ReservationsComponent from "../components/ReservationsComponent";
import { deleteReservation, setSelectedReservation } from "../store/actionCreators";

const ReservationsContainer = (props) => {
  return <ReservationsComponent {...props} />;
};

// https://react-redux.js.org/using-react-redux/connect-mapstate
const mapStateToProps = (state) => {
  return {
    reservations: state.list,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteReservation: (reservation) => dispatch(deleteReservation(reservation)),
  setSelectedReservation: (reservation) => dispatch(setSelectedReservation(reservation)),
});

// https://react-redux.js.org/api/connect
export default connect(mapStateToProps, mapDispatchToProps)(ReservationsContainer);
