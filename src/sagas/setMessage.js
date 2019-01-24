import 'babel-polyfill';
import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import { setMessageSuccess, setMessageFailure } from '../actions/index'
import Axios from 'axios';
import { SET_MESSAGE } from '../actions/type';

// Saga
const setAsyncMessageRequest = async () => {
    return await Axios.get("http://localhost:8000/messages/1")
        .then(response => response)
        .catch(error => error);
}

function* setAsyncMessageFromServer() {
    try {
        let response = yield call(setAsyncMessageRequest);
        yield put(setMessageSuccess(response.data.message))
    } catch (error) {
        yield put(setMessageFailure("error dari api"))
    }
}

export function* setAsyncMessageSaga() {
    yield takeEvery(SET_MESSAGE, setAsyncMessageFromServer)
}

export default function* rootSaga() {
    yield all([
        fork(setAsyncMessageSaga)
    ])
}