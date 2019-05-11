import reducer from './Login';

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe('Reducer Login', () => {
  const state0 = reducer(undefined, randomAction);
});
