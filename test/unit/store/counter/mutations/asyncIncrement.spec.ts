import { mutations } from '~/store/counter';
const { ASYNC_INCREMENT } = mutations;

describe('store/counter/mutations/asyncIncrement', () => {
  it('should have been called the specified mutation', () => {
    const state = { count: 0 };

    ASYNC_INCREMENT(state, { count: 3 });

    expect(state.count).toEqual(3);
  });
});
