import { RECEIVE_ITEMS } from '../constants';

const initialState = {
  items: []
};

const productList = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_ITEMS:
      return {
        ...state,
        items: action.data
      };
    default:
      return state;
  }
};

export default productList;