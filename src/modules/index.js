import { combineReducers } from 'redux';
// import { fork } from 'redux-saga/effects';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  form: formReducer
});

export function* rootSaga() {
  // yield fork(roverSagas);
}
