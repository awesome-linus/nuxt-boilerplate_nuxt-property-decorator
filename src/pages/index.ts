import Vue from 'vue';
import { mapGetters } from 'vuex';
import CurrentCount from '~/components/CurrentCount';
import IncrementButton from '~/components/IncrementButton';
import AsyncIncrementButton from '~/components/AsyncIncrementButton';
import DecrementButton from '~/components/DecrementButton';

export default Vue.extend({
  components: {
    CurrentCount,
    AsyncIncrementButton,
    IncrementButton,
    DecrementButton
  },
  computed: {
    ...mapGetters('counter', ['currentCount'])
  }
});
