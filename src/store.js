/*
 * @Author: Artha Prihardana 
 * @Date: 2019-10-08 13:58:29 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-10-08 15:07:42
 */
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

export default function configureStore() {

  const composeEnhancers =
    typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

  const store = createStore(
      reducers,
      composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}