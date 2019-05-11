// import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { handleLoginSubmit, handleLoginSubmitSuccess } from './actions';

const loggedIn = handleActions(
  {
    [handleLoginSubmit]: () => false,
    [handleLoginSubmitSuccess]: () => true
  },
  false
);

export default loggedIn;

export const getIsLoggedIn = state => state.loggedIn;
