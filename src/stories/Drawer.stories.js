import Drawer from '../components/drawer/Drawer.vue'

export default {
  title: 'Components/Drawer',
  component: Drawer,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Drawer },
  template: '<Drawer @onClick="onClick" v-bind="$props" />',
});

export const Default  = Template.bind({});
Default.args = {
  title: "Drawer Title",  
  visible: false,
  confirmText: "Ok",
  closeText: "Close",
};