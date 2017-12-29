import { ADD_ITEM, REMOVE_ITEM } from '../constants';

const initialState = {
  total: 0,
  items: []
};

const shoppingCart = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return {
        total: state.total + action.item.price,
        items: [
          ...state.items,
          action.item
        ]
      };
    case REMOVE_ITEM:
      const index = state.items.indexOf(state.items.find(el => el.key === action.key));
      return {
        total: state.total - action.price,
        items: [ ...state.items.slice(0, index), ...state.items.slice(index+1)]
      };
    default:
      return state;
  }
};

export default shoppingCart;