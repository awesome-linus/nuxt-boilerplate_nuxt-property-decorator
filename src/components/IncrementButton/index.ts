import { Component, Vue } from 'nuxt-property-decorator';
import { mapActions, ActionContext } from 'vuex';
import { RootState } from '~/store/index';
import { State } from '~/store/counter';

@Component({
  methods: {
    ...mapActions('counter', ['increment'])
  }
})
export default class extends Vue {
  increment!: (context: ActionContext<State, RootState>) => void;
}
