import { createAction } from 'redux-actions';

export const fetchAddressListRequest = createAction(
  'FETCH_ADDRESS_LIST_REQUEST'
);

export const fetchAddressListSuccess = createAction(
  'FETCH_ADDRESS_LIST_SUCCESS'
);
export const fetchAddressListFailure = createAction(
  'FETCH_ADDRESS_LIST_FAILURE'
);

export const handleRouteSubmit = createAction('HANDLE_ROUTE_SUBMIT');
export const handleRouteSubmitSuccess = createAction(
  'HANDLE_ROUTE_SUBMIT_SUCCESS'
);

export const handleClearSubmit = createAction('HANDLE_CLEAR_SUBMIT');
