import _ from 'lodash'
import {
    ADD_TAGS_TO_CAPTIONS,
    CREATE_CAPTION_WITH_TAGS,
    GET_CAPTIONS_UNDER_TAG,
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case GET_CAPTIONS_UNDER_TAG:
            return {...state.concat(action.payload)};
        case CREATE_CAPTION_WITH_TAGS:
            return {...state.concat(action.payload)};
        case ADD_TAGS_TO_CAPTIONS:
            return {...state.concat(action.payload)};
        default:
            return state;
    }
}