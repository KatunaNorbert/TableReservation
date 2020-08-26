import React from "react";
import { connect } from "react-redux";
import EditCreateReservationComponent from "../components/EditCreateReservationComponent";
import { newReservation } from "../store/actionCreators";

    const mapStateToProps = (state) => {
        return {
          selectedReservation: state.selectedReservation,
        };
      };

    // https://react-redux.js.org/using-react-redux/connect-mapdispatch
    const mapDispatchToProps = (dispatch) => ({
    createReservation: (reservation) => dispatch(newReservation(reservation)),
    });

const EditCreateReservationContainer = (props) => {

    return(
        <EditCreateReservationComponent {...props}/>
    )

}
// https://react-redux.js.org/api/connect
export default connect(mapStateToProps, mapDispatchToProps)(EditCreateReservationContainer);
