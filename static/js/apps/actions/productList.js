import * as services from '../services/productList';
import v4 from 'uuid';
import { 
  ADD_ITEM, 
  RECEIVE_ITEMS
} from '../constants';

export const receiveItems = (data)=>({
    type: RECEIVE_ITEMS,
    data
});

export const requestItems = () => {
  return dispatch => {
    return services.fetchItems()
        .then(
          res => {
            dispatch(receiveItems(res.catalog));
          },
          err => {
            alert(`Hubo un error al traer los items: ${err.message}`);
          }
        );
    };
};

export const addItem = (id, price)=>({
  type: ADD_ITEM,
  item: {
    key: v4(),
    id,
    price
  }
});
