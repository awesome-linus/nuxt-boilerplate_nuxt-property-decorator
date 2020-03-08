import { mutations } from '~/store/counter';
const { INCREMENT } = mutations;

describe('store/counter/mutations/increment', () => {
  it('should have been called the specified mutation', () => {
    const state = { count: 0 };

    INCREMENT(state, {});

    expect(state.count).toEqual(1);
  });
});
