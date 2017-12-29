import { removeItem } from '../../static/js/apps/actions/shoppingCart';
import { REMOVE_ITEM } from '../../static/js/apps/constants'

describe('actions', () => {
  it('should create an action to remove an item', () => {
    const key = '123';
    const price = 1500;
    const expectedAction = {
      type: REMOVE_ITEM,
      key,
      price
    }
    expect(removeItem(key, price)).toEqual(expectedAction)
  })
})