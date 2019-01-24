import { combineReducers } from 'redux';
import setMessage from './setMessage';

const reducers = combineReducers({
    message: setMessage
});

export default reducers;