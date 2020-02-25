import axios from 'axios';
import history from '../../history';
import store from '../store';
import {
  ADD_CAPTION,
  ADD_TAGS,
  ADD_TAGS_TO_CAPTIONS,
  ALL_TAGS,
  ALL_CAPTIONS,
  CREATE_CAPTION_WITH_TAGS,
  GET_CAPTIONS_UNDER_TAG,
  GET_CAPTION_WITH_MULTIPLE_TAGS,
} from './types';


export const addCaption = (caption) => async (dispatch) => {
  try {
    const response = await axios.post('caption', caption);
    console.log(response);
    dispatch({ type: ADD_CAPTION, payload: '' });
    // history.push('/feeds');
  } catch (err) {
    console.log(err);
  }
};

export const addTags = (tag) => async (dispatch) => {
  try {
    const response = await axios.post('tag', tag);
    console.log(response);
    dispatch({ type: ADD_TAGS, payload: '' });
    // history.push('/');
  } catch (err) {
    console.log(err);
  }
};

export const addTagsToCaptions = (value) => async (dispatch) => {
  try {
    const response = await axios.post('add-tag', value);
    console.log(response);
    dispatch({ type: ADD_TAGS_TO_CAPTIONS, payload: '' });
    // history.push('/');
  } catch (err) {
    console.log(err);
  }
};

export const allTags = () => async (dispatch) => {
  try {
    const response = await axios.get('tag');
    console.log(response);
    dispatch({ type: ALL_TAGS, payload: '' });
    // history.push('/');
  } catch (err) {
    console.log(err);
  }
};

export const allCaptions = () => async (dispatch) => {
  try {
    const response = await axios.get('caption');
    console.log(response);
    dispatch({ type: ALL_CAPTIONS, payload: '' });
    // history.push('/');
  } catch (err) {
    console.log(err);
  }
};

export const createCaptionWithTags = (value) => async (dispatch) => {
  try {
    const response = await axios.post('multi', value);
    console.log(response);
    dispatch({ type: CREATE_CAPTION_WITH_TAGS, payload: '' });
    // history.push('/');
  } catch (err) {
    console.log(err);
  }
};

export const getCaptionUnderTag = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`withTag?tagId=${id}`);
    console.log(response);
    dispatch({ type: GET_CAPTIONS_UNDER_TAG, payload: '' });
    // history.push('/');
  } catch (err) {
    console.log(err);
  }
};

export const captionMultipleTags = (value) => async (dispatch) => {
  try {
    const response = await axios.post('array', value);
    console.log(response);
    dispatch({ type: GET_CAPTION_WITH_MULTIPLE_TAGS, payload: '' });
    // history.push('/');
  } catch (err) {
    console.log(err);
  }
};
