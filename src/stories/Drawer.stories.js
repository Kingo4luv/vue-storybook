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

export const Left  = Template.bind({});
Left.args = {
  title: "Drawer Title",  
  visible: false,
  confirmText: "Ok",
  closeText: "Close",
  position: "left"
};

export const Top  = Template.bind({});
Top.args = {
  title: "Drawer Title",  
  visible: false,
  confirmText: "Ok",
  closeText: "Close",
  position: "top"
};

export const Bottom  = Template.bind({});
Bottom.args = {
  title: "Drawer Title",  
  visible: false,
  confirmText: "Ok",
  closeText: "Close",
  position: "bottom"
};