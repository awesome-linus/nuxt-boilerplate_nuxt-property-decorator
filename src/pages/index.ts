import { Component, Vue } from 'nuxt-property-decorator';
import { mapGetters } from 'vuex';
import CurrentCount from '~/components/CurrentCount';
import IncrementButton from '~/components/IncrementButton';
import AsyncIncrementButton from '~/components/AsyncIncrementButton';
import DecrementButton from '~/components/DecrementButton';

@Component({
  computed: {
    ...mapGetters('counter', ['currentCount'])
  },
  components: {
    CurrentCount,
    AsyncIncrementButton,
    IncrementButton,
    DecrementButton
  }
})
export default class extends Vue {}
