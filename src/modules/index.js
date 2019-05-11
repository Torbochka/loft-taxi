import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import { reducer as formReducer } from 'redux-form';
import loggedIn, { sagas as formSagas } from './Login';

export default combineReducers({
  loggedIn,
  form: formReducer
});

export function* rootSaga() {
  yield fork(formSagas);
}
