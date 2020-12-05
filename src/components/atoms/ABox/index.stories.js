import { storyFactory } from '~storybook/util/helpers'
import { action } from '@storybook/addon-actions'
import ABox from './index.vue'

export default storyFactory({
  title: 'Atom/Box',
  component: ABox,
  description: 'The completed documentation will sooner release. This docs is about Box Atom',
  argTypes: {
    direction: { control: { type: 'select', options: ['column', 'row', 'row-responsive'] } },
    align: { control: { type: 'select', options: ['stretch', 'start', 'center', 'end', 'baseline'] } },
    justify: { control: { type: 'select', options: ['flex-start', 'center', 'flex-end', 'space-between'] } },
    overflow: { control: { type: 'select', options: ['auto', 'hidden', 'scroll', 'visible', 'undefined'] } },
    text: { control: 'text' },
  },
  excludeStories: /.*Data$/,
});

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ABox },
  template: '<a-box @onClick="action" v-bind="$props"/>',
  methods: { action: action('clicked') }
});

export const Sandbox = Template.bind({});
Sandbox.args = {
  direction: 'column',
  align: 'center',
  text: 'This Box is currently empty. Add components to it, so it can do its layout thing.',
  overflow: 'undefined'
}
