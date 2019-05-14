import { handleActions } from 'redux-actions';
import {
  fetchAddressListRequest,
  fetchAddressListSuccess,
  fetchAddressListFailure,
  handleRouteSubmit,
  handleClearSubmit,
  handleRouteSubmitSuccess
} from './actions';

const addresses = handleActions(
  {
    [fetchAddressListRequest]: state => state,
    [fetchAddressListSuccess]: (state, action) => action.payload,
    [fetchAddressListFailure]: (state, action) => action.payload
  },
  []
);

export const route = handleActions(
  {
    [handleRouteSubmit]: () => [],
    [handleClearSubmit]: () => [],
    [handleRouteSubmitSuccess]: (state, action) => action.payload
  },
  []
);

export default addresses;

export const getAddresses = ({ addresses }) => addresses;
export const getIsAddresses = ({ addresses }) =>
  Array.isArray(addresses) && addresses.length > 0;

export const getIsRoute = ({ route }) =>
  Array.isArray(route) && route.length > 0;
export const getRoute = ({ route }) => route;
