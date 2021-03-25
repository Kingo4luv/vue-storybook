import Dropdown from '../components/dropdown/Dropdown.vue'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Dropdown },
  template: '<Dropdown  v-bind="$props" />',
});

export const Default  = Template.bind({});
Default.args = {
  message: "Lorem ipsum dolor sit amet",
  visible: false,
  position: "top-right"
};