import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
import { loadState } from './localStorage';

const createAppStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default createAppStore;
