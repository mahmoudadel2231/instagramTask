import produce from 'immer';
import _ from 'lodash';
import {ADD_BUCKET_LIST, REMOVE_BUCKET_LIST} from '../types';

const INITIAL_STATE = {
  cart: [],
  totalPrice: 0,
  totalCount: 0,
};

// uses immer produce to handle immutable the state

export default produce((draft, action = {}) => {
  switch (action.type) {
    case ADD_BUCKET_LIST:
      {
        const newState = draft;
        const index = _.findIndex(newState.cart, {
          prod_id: action.item.prod_id,
        });
        if (index !== -1) {
          newState.cart[index] = {
            ...action.item,
            itemTotalPrice: action.item.qty * action.item.product_price,
            qty: action.item.qty,
          };
        } else {
          newState.cart.push({
            ...action.item,
            itemTotalPrice: action.item.qty * action.item.product_price,
          });
          newState.totalCount += 1;
        }
        newState.totalPrice = _.sumBy(newState.cart, 'itemTotalPrice');
      }
      break;

    case REMOVE_BUCKET_LIST:
      {
        const newState = draft;
        _.remove(newState.cart, {
          prod_id: action.prod_id,
        });
        if (newState.cart.length === 0) {
          newState.totalPrice = 0;
          newState.totalCount = 0;
        } else {
          newState.totalPrice = _.sumBy(newState.cart, 'itemTotalPrice');
          newState.totalCount -= 1;
        }
      }
      break;

    default:
      break;
  }
}, INITIAL_STATE);
