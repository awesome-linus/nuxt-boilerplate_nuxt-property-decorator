import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import MockAdapter from 'axios-mock-adapter';
import { httpClient } from '~/api/count';
import { actions, mutations } from '~/store/counter';

describe('store/counter/actions/asyncIncrement', () => {
  const mockAxios = new MockAdapter(httpClient);

  const state = {
    count: 0
  };

  const initStore = () => {
    return {
      state,
      mutations,
      actions
    };
  };

  // @ts-ignore
  let store: Vuex.Store;
  let localVue;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store(
      // @ts-ignore
      initStore()
    );
  });

  it('should execute the asyncIncrement action', async () => {
    const mockResponse = {
      count: 5
    };

    mockAxios.onGet('/counts').reply(200, mockResponse);

    await store.dispatch('asyncIncrement');

    expect(store.state).toStrictEqual(mockResponse);
  });
});
