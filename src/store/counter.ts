import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex';
import { RootState } from './index';
import { fetchCount } from '~/api/count';

export interface State {
  count: number;
}

export const types = {
  INCREMENT: 'INCREMENT',
  ASYNC_INCREMENT: 'ASYNC_INCREMENT',
  DECREMENT: 'DECREMENT'
};

export const state = (): State => ({
  count: 0
});

export const getters: GetterTree<State, RootState> = {
  currentCount: state => () => {
    return { count: state.count };
  }
};

export interface Actions<S, R> extends ActionTree<S, R> {
  increment(context: ActionContext<S, R>): void;
  asyncIncrement(context: ActionContext<S, R>): void;
  decrement(context: ActionContext<S, R>): void;
}

export const actions: Actions<State, RootState> = {
  increment: ({ commit }) => {
    commit(types.INCREMENT);
  },
  asyncIncrement: async ({ commit }) => {
    const count = await fetchCount();
    commit(types.ASYNC_INCREMENT, count);
  },
  decrement: ({ commit }) => {
    commit(types.DECREMENT);
  }
};

export const mutations: MutationTree<State> = {
  [types.INCREMENT]: (state: State): void => {
    state.count++;
  },
  [types.ASYNC_INCREMENT]: (state: State, { count }): void => {
    state.count = state.count + count;
  },
  [types.DECREMENT]: (state: State): void => {
    state.count--;
  }
};
