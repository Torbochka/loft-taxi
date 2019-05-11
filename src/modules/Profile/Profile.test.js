import reducer from './Profile';

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe('Reducer Profile', () => {
  const state0 = reducer(undefined, randomAction);
});
