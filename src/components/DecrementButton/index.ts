import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'CounterButton',
  methods: {
    ...mapActions('counter', ['decrement'])
  }
});
