import Select from '../components/select/Select.vue'

export default {
  title: 'Components/Select',
  component: Select,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Select },
  template: '<Select @onClick="onClick" v-bind="$props" />',
});

export const Default  = Template.bind({});
Default.args = {
  visible: false,
};