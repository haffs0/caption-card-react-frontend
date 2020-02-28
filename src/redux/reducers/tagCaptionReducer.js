import {
  ADD_TAGS_TO_CAPTIONS,
  GET_CAPTIONS_UNDER_TAG,
  GET_CAPTION_WITH_MULTIPLE_TAGS,
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_CAPTIONS_UNDER_TAG:
      return [...state, action.payload];
    case GET_CAPTION_WITH_MULTIPLE_TAGS:
      return [...state, action.payload];
    case ADD_TAGS_TO_CAPTIONS:
      return { ...state.concat(action.payload) };
    default:
      return state;
  }
};
