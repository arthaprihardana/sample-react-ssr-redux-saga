import { SET_MESSAGE, SET_MESSAGE_SUCCESS, SET_MESSAGE_FAILURE } from "../actions/type";

const INIT_STATE = {
    loading: false,
    message: null
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return { ...state, loading: true }
        case SET_MESSAGE_SUCCESS:
            return { ...state, loading: false, message: action.payload }
        case SET_MESSAGE_FAILURE:
            return { ...state, loading: false, message: null }
        default:
            return { ...state }
    }
}