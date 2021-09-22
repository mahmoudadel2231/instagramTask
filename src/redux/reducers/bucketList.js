import produce from 'immer';
import _ from 'lodash';
import {ADD_BUCKET_LIST, REMOVE_BUCKET_LIST} from '../types';

const INITIAL_STATE = {
  list: [],
};

export default produce((draft, action = {}) => {
  switch (action.type) {
    case ADD_BUCKET_LIST:
      {
        const newState = draft;
        const index = _.findIndex(newState.list, {
          id: action.item.id,
        });
        if (index !== -1) {
          newState.list[index] = {
            ...action.item,
          };
        } else {
          newState.list.push({
            ...action.item,
          });
        }
      }
      break;

    case REMOVE_BUCKET_LIST:
      {
        const newState = draft;
        _.remove(newState.list, {
          id: action.id,
        });
      }
      break;

    default:
      break;
  }
}, INITIAL_STATE);
