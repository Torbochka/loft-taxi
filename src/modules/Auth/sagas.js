import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import {
  handleLoginSubmit,
  handleLoginSubmitSuccess,
  handleUnAuthorize
} from './actions';
import { getUserInfo } from './api';
import { updateState } from '../../localStorage';

import {
  startSubmit,
  stopSubmit,
  SubmissionError,
  getFormValues
} from 'redux-form';

function* fetchLoginInWatcher() {
  yield takeLatest(handleLoginSubmit, fetchLoginFlow);
}

export function* fetchLoginFlow() {
  try {
    const { username, password } = yield select(getFormValues('LoginForm'));
    yield call(authorize, username, password);
  } catch (e) {
    throw new SubmissionError(e.message);
  }
}

function* authorize(username, password) {
  const res = yield call(getUserInfo, username, password);
  if (res.success) {
    yield put(startSubmit('LoginForm'));
    yield put(handleLoginSubmitSuccess());
    yield call(updateState, { loggedIn: true });
  } else {
    yield put(stopSubmit('LoginForm', res.error));
  }
}

function* fetchLogoutInWatcher() {
  yield takeLatest(handleUnAuthorize, fetchLogoutFlow);
}

export function* fetchLogoutFlow() {
  yield call(updateState, { loggedIn: false });
}

export default function*() {
  yield fork(fetchLoginInWatcher);
  yield fork(fetchLogoutInWatcher);
}
