import _ from 'lodash'
import {
    ADD_TAGS,
    ALL_TAGS,
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case ALL_TAGS:
            return {...state.concat(...action.payload)}
        case ADD_TAGS:
            return {...state.concat(...action.payload)};
        default:
            return state;
    }
}