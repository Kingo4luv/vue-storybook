import List from '../components/lists/container.vue'

export default {
  title: 'Components/List',
  component: List,
};

const Template = (args, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    List
  },
  template: '<List @onClick="onClick" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  visible: false,
};