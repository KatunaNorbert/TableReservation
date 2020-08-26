import { newReservationType, receiveReservationsType, deleteReservationType, updateReservationType, setSelectedReservationType, removeSelectedReservationType, setSelectedReservation } from "./actionCreators";

/*
  Reducers specify how the application's state changes in response to actions sent to the store. 
*/

const initialState = {
  selectedReservation: undefined,
  list: [
    {
      id: 1,
      name: "John Smith",
      numberOfGuests: 4,
      email: "johnsmith@gleblu.com",
      dateTime: "1598206962"
    },
    {
      id: 2,
      name: "Emily Parker",
      numberOfGuests: 2,
      email: undefined,
      dateTime: "1598206962"
    },
    {
      id: 3,
      name: "John Smith",
      numberOfGuests: 4,
      email: "johnsmith@gleblu.com",
      dateTime: "1598206962"
    }
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case receiveReservationsType: {
      return {
        ...state,
        list: action.reservations,
      };
    }
    case newReservationType: {
      const newList = [...state.list];
      var newReservation = action.reservation;
      newReservation.id = (newList[newList.length - 1].id)+1
      newList.push(action.reservation);
      return {
        ...state,
        list: newList,
      };
    }
    case deleteReservationType: {
      var newList = [...state.list];
      newList = newList.filter(function (reservation) {
        return reservation.id!==action.reservation.id
      })
      return {
        ...state,
        list: newList,
      };
    }
    case updateReservationType: {
      var newList = [...state.list];
      newList = newList.filter(function (reservation) {
        return reservation.id!==action.reservation.id
      })
      return {
        ...state,
        list: newList,
      };
    }
    case setSelectedReservationType: {
      return {
        ...state,
        selectedReservation: action.reservation,
      };
    }
    case removeSelectedReservationType: {
      return {
        ...state,
        selectedReservation: undefined,
      };
    }
    default:
      return state;
  }
};

export default reducer;
