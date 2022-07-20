
// Importa las actions types que necesites acá:
import {
  GET_ALL_SETS,
  GET_CARDS,
} from "../actions";

const initialState = {
  sets: {},
  cards: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
      case GET_ALL_SETS:
        return {
          ...state,
          sets: action.payload
        }
      case GET_CARDS:
        return {
          ...state,
          cards: action.payload
        }
      default:
        return state;
    }
};

export default rootReducer;