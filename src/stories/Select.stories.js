import Select from '../components/select/index.vue'

export default {
  title: 'Components/Select',
  component: Select,
};

const Template = (args, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    Select
  },
  template: '<Select  v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  visible: false,
};

export const Open = Template.bind({});
Open.args = {
  visible: true,
};