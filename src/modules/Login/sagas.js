import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { handleLoginSubmit, handleLoginSubmitSuccess } from './actions';
import { getUserInfo } from './api';
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
    const res = yield call(getUserInfo, username, password);
    if (res.success) {
      yield put(startSubmit('LoginForm'));
      yield put(handleLoginSubmitSuccess());
    } else {
      yield put(stopSubmit('LoginForm', res.error));
    }
  } catch (e) {
    throw new SubmissionError(e.message);
  }
}

export default function*() {
  yield fork(fetchLoginInWatcher);
}
