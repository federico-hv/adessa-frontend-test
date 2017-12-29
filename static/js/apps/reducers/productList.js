import { RECEIVE_ITEMS, TOGGLE_ERROR } from '../constants';


const productList = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_ITEMS:
      return {
        ...state,
        items: action.data
      };
    case TOGGLE_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};


export defaut productList;