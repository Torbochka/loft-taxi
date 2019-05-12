import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import { reducer as formReducer } from 'redux-form';
import loggedIn, { sagas as loginFormSagas } from './Auth';
import profile, { sagas as payloadFormSagas } from './Profile';

export default combineReducers({
  loggedIn,
  profile,
  form: formReducer
});

export function* rootSaga() {
  yield fork(loginFormSagas);
  yield fork(payloadFormSagas);
}
