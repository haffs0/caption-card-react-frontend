import axios from 'axios';
import history from '../../history';
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

const baseUrl = 'https://capcards-api.herokuapp.com/v1.0/api/'

export const addCaption = (caption) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}caption`, caption);
    const {data} = response.data;
    dispatch({ type: ADD_CAPTION, payload: data });
    history.push('/');
  } catch (err) {
    console.log(err);
  }
};

export const addTags = (tag) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}tag`, tag);
    const { data } = response.data;
    dispatch({ type: ADD_TAGS, payload: data.tag });
    history.push('/');
  } catch (err) {
    console.log(err);
  }
};

export const addTagsToCaptions = (value) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}add-tag`, value);
    console.log(response);
    dispatch({ type: ADD_TAGS_TO_CAPTIONS, payload: '' });
    // history.push('/');
  } catch (err) {
    console.log(err);
  }
};

export const allTags = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}tag`);
    const {data} = response.data;
    dispatch({ type: ALL_TAGS, payload: data.tags });
  } catch (err) {
    console.log(err);
  }
};

export const allCaptions = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}caption`);
    const { data } = response.data;
    console.log(data.captions);
    dispatch({ type: ALL_CAPTIONS, payload: data.captions });
    // history.push('/');
  } catch (err) {
    console.log(err);
  }
};

export const createCaptionWithTags = (value) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}caption/multi`, value);
    const {data} = response.data;
    const {createdCaption} =data;
    dispatch({ type: CREATE_CAPTION_WITH_TAGS, payload: createdCaption });
    history.push('/');
  } catch (err) {
    console.log(err);
  }
};

export const getCaptionUnderTag = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}caption/withTag?tagId=${id}`);
    const { data } = response.data;
    dispatch({ type: GET_CAPTIONS_UNDER_TAG, payload: data });
    history.push('/search-result');
  } catch (err) {
    console.log(err);
  }
};

export const captionMultipleTags = (value) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}tag/array`, value);
    const { data } = response.data;
    dispatch({ type: GET_CAPTION_WITH_MULTIPLE_TAGS, payload: data });
    history.push('/search-result');
  } catch (err) {
    console.log(err);
  }
};
