import { takeLatest, select, call, fork } from 'redux-saga/effects';
import { handleProfileSubmit } from './actions';
import { updateState } from '../../localStorage';
import { getFormValues } from 'redux-form';

function* fetchProfileInWatcher() {
  yield takeLatest(handleProfileSubmit, fetchProfileFlow);
}

export function* fetchProfileFlow() {
  const profile = yield select(getFormValues('paymentForm'));
  yield call(updateState, { profile });
}

export default function*() {
  yield fork(fetchProfileInWatcher);
}
