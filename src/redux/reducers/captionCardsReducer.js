import _ from 'lodash';
import {
  ADD_CAPTION,
  ALL_CAPTIONS,
  CREATE_CAPTION_WITH_TAGS,
} from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case ALL_CAPTIONS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case ADD_CAPTION:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_CAPTION_WITH_TAGS:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}