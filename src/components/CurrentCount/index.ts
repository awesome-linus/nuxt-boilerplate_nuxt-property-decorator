import { Prop, Component, Vue } from 'nuxt-property-decorator';

@Component
export default class extends Vue {
  @Prop({
    type: Number,
    required: true,
    default: 0
  })
  count!: number;
}
