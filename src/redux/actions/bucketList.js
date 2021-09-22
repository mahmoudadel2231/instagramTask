import {ADD_BUCKET_LIST, REMOVE_BUCKET_LIST} from '../types';

export const addToCart = item => ({
  type: ADD_BUCKET_LIST,
  item,
});

export const removeFromCart = prod_id => ({
  type: REMOVE_BUCKET_LIST,
  prod_id,
});
