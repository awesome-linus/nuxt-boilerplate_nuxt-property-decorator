import Vue from 'vue';

export default Vue.extend({
  name: 'CurrentCount',
  props: {
    count: {
      type: Number,
      default: 0,
      required: true
    }
  }
});
