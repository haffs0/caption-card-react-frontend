import { combineReducers } from 'redux';
import captionCardsReducer from './captionCardsReducer';
import allTagsReducer from './allTagsReducer';
import multipleTagsCaptionReducer from './multipleTagsCaptionReducer';
import tagCaptionReducer from './tagCaptionReducer';

export default combineReducers({
  posts: captionCardsReducer,
  allTags: allTagsReducer,
  multiple: multipleTagsCaptionReducer,
  tagCaption: tagCaptionReducer,
})
