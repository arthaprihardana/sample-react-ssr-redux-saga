import { all } from 'redux-saga/effects';

import setMessage from './setMessage';

export default function* rootSaga() {
    yield all([
        setMessage()
    ])
}