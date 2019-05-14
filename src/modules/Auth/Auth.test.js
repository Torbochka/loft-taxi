import reducer from '../../modules';
import {
  handleLoginSubmit,
  handleLoginSubmitSuccess,
  handleUnAuthorize
} from './actions';

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe('Reducer Auth', () => {
  const state0 = reducer(undefined, randomAction);

  describe('action handleLoginSubmit', () => {
    it('Запрос на авторизацию', () => {
      const state1 = reducer(state0, handleLoginSubmit());
      expect(state1.loggedIn).toBeFalsy();
    });
  });

  describe('action handleLoginSubmitSuccess', () => {
    it('Успешная авторизация', () => {
      const state1 = reducer(state0, handleLoginSubmitSuccess());
      expect(state1.loggedIn).toBeTruthy();
    });
  });

  describe('action handleUnAuthorize', () => {
    it('Ошибка авторизации', () => {
      const state1 = reducer(state0, handleUnAuthorize());
      expect(state1.loggedIn).toBeFalsy();
    });
  });
});
