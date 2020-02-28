import { combineReducers } from 'redux';
import captionCardsReducer from './captionCardsReducer';
import allTagsReducer from './allTagsReducer';
import tagCaptionReducer from './tagCaptionReducer';

export default combineReducers({
  posts: captionCardsReducer,
  allTags: allTagsReducer,
  tagCaption: tagCaptionReducer,
})
