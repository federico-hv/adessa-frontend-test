import * as services from '../services/productList';
import { RECEIVE_ITEMS, TOGGLE_ERROR } from '../constants';

const receiveItems = (data)=>({
    type: RECEIVE_ITEMS,
    data
});

const toggleError = (state)=>({
  type: TOGGLE_ERROR,
  error: state
}); 


export const requestItems = () => {
  return dispatch => {
    return services.fetchItems()
        .then(
          res => {
            dispatch(receiveItems(res.catalog));
          },
          err => {
            dispatch(toggleError(true));
          }
        );
    };
};