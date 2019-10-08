import {
    createStore,
    compose,
    applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from 'reducers';
import rootSaga from 'middlewares';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export default function configureStore(initialState) {

    const store = createStore(
        reducers,
        initialState,
        compose(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(rootSaga);

    return store;
}