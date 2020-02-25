import _ from 'lodash'
import {
    GET_CAPTION_WITH_MULTIPLE_TAGS,
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case GET_CAPTION_WITH_MULTIPLE_TAGS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
}