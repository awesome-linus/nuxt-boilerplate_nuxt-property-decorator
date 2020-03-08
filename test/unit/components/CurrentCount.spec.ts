import { shallowMount } from '@vue/test-utils';
import CurrentCount from '~/components/CurrentCount/index.vue';

describe('components/CurrentCount', () => {
  it('should be expected 1', () => {
    const countTestData = { count: 1 };
    const wrapper = shallowMount(CurrentCount, {
      propsData: { count: countTestData.count }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should be expected 3', () => {
    const countTestData = { count: 3 };
    const wrapper = shallowMount(CurrentCount, {
      propsData: { count: countTestData.count }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
