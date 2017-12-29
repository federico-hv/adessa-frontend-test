import { REMOVE_ITEM } from '../constants';

export const removeItem = (key, price)=>({
  type: REMOVE_ITEM,
  key,
  price
});