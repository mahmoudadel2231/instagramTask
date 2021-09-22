import {ADD_BUCKET_LIST, REMOVE_BUCKET_LIST} from '../types';

export const add = item => ({
  type: ADD_BUCKET_LIST,
  item,
});

export const remove = id => ({
  type: REMOVE_BUCKET_LIST,
  id,
});
