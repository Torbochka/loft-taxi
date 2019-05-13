import { takeLatest, put, select, call, fork } from 'redux-saga/effects';
import {
  fetchAddressListRequest,
  fetchAddressListSuccess,
  fetchAddressListFailure,
  handleRouteSubmit,
  handleRouteSubmitSuccess
} from './actions';
import { getAddressList, getRoute } from './api';
import { getIsAddresses } from './Map';
import {
  getFormValues,
  startSubmit,
  stopSubmit,
  SubmissionError
} from 'redux-form';

function* fetchAddressListWatcher() {
  yield takeLatest(fetchAddressListRequest, fetchAddressListFlow);
}

export function* fetchAddressListFlow() {
  try {
    const isAddress = yield select(getIsAddresses);

    if (!isAddress) {
      const { addresses } = yield call(getAddressList);
      yield put(fetchAddressListSuccess(addresses));
    }
  } catch (error) {
    yield put(fetchAddressListFailure({ error }));
  }
}

function* fetchRouteWatcher() {
  yield takeLatest(handleRouteSubmit, fetchRouteFlow);
}

export function* fetchRouteFlow() {
  try {
    const { from, to } = yield select(getFormValues('mapForm'));
    const res = yield call(getRoute, from, to);
    yield put(handleRouteSubmitSuccess(res));
    yield put(startSubmit('mapForm'));
  } catch (e) {
    yield put(stopSubmit('mapForm', e.message));
    throw new SubmissionError(e.message);
  }
}

export default function*() {
  yield fork(fetchAddressListWatcher);
  yield fork(fetchRouteWatcher);
}
