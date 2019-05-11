import { createAction } from 'redux-actions';

export const handleLoginSubmit = createAction('HANDLE_LOGIN_SUBMIT');
export const handleLoginSubmitSuccess = createAction(
  'HANDLE_LOGIN_SUBMIT_SUCCESS'
);
export const handleUnAuthorizet = createAction('HANDLE_UNAUTHORIZET');
