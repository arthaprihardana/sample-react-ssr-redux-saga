import { SET_MESSAGE, SET_MESSAGE_SUCCESS, SET_MESSAGE_FAILURE } from "./type";

export const setMessage = () => ({
    type: SET_MESSAGE
});

export const setMessageSuccess = response => ({
    type: SET_MESSAGE_SUCCESS,
    payload: response
});

export const setMessageFailure = error => ({
    type: SET_MESSAGE_FAILURE,
    payload: error
});