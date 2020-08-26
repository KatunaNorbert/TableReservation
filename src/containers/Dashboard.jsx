import React from "react";
import { ReservationsContainer } from "../containers";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import CreatedReservationComponent from "../components/CreatedReservationComponent";
import EditCreateReservationContainer from "./EditCreateReservationContainer";
import NavbarComponent from "../components/NavbarComponent";

function Dashboard() {
  return (
    <Router>
        <NavbarComponent/>  
        <div className="dashboard-container" style={{height: "calc(100% - 120px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
            <Route exact path="/reservations" component={ReservationsContainer}/>
            <Route exact path="/reservations/new" component={EditCreateReservationContainer}/>
            <Route exact path="/reservations/created" component={CreatedReservationComponent}/>
        </div>
    </Router> 
  );
}

export default Dashboard;
