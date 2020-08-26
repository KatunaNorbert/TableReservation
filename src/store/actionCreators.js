export const receiveReservationsType = "RECEIVE_RESERVATIONS";

/*
    Redux actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed.

    Action creators are functions that make sure that actions are constructed properly:
        * they have type property set
        * other payload properties are set if they are required
*/

export function receiveReservations(reservations) {
  return {
    type: receiveReservationsType,
    reservations,
  };
}

export const newReservationType = "NEW_RESERVATION";

export function newReservation(reservation) {
  return {
    type: newReservationType,
    reservation,
  };
}

export const deleteReservationType = "DELETE_RESERVATION";

export function deleteReservation(reservation) {
  return {
    type: deleteReservationType,
    reservation,
  };
}

export const updateReservationType = "UPDATE_RESERVATION";

export function updateReservation(reservation) {
  return {
    type: updateReservationType,
    reservation,
  };
}

export const setSelectedReservationType = "SET_SELECTED_RESERVATION";

export function setSelectedReservation(reservation) {
  return {
    type: setSelectedReservationType,
    reservation,
  };
}

export const removeSelectedReservationType = "REMOVE_SELECTED_RESERVATION";

export function removeSelectedReservation(reservation) {
  return {
    type: removeSelectedReservationType,
    reservation,
  };
}