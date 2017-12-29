import { RECEIVE_ITEMS, TOGGLE_ERROR } from '../constants';

const initialState = {
  error: false,
  items: []
};

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

export default productList;