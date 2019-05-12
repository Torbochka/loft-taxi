import { handleActions } from 'redux-actions';
import { handleProfileSubmit } from './actions';

const profile = handleActions(
  {
    [handleProfileSubmit]: (state, action) => action.payload
  },
  null
);

export default profile;

export const getProfile = state => state.profile;
export const getIsProfile = state => !!state.profile;
