import { handleActions } from 'redux-actions';
import {
  handleLoginSubmit,
  handleLoginSubmitSuccess,
  handleUnAuthorize
} from './actions';

const loggedIn = handleActions(
  {
    [handleLoginSubmit]: () => false,
    [handleLoginSubmitSuccess]: () => true,
    [handleUnAuthorize]: () => false
  },
  false
);

export default loggedIn;
export const getIsLoggedIn = state => state.loggedIn;
