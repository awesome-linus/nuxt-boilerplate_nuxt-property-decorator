import { Component, Vue } from 'nuxt-property-decorator';
import { mapActions, ActionContext } from 'vuex';
import { RootState } from '~/store/index';
import { State } from '~/store/counter';

@Component({
  methods: {
    ...mapActions('counter', ['asyncIncrement'])
  }
})
export default class extends Vue {
  asyncIncrement!: (context: ActionContext<State, RootState>) => void;
}
