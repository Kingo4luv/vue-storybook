import Modal from '../components/modal/Modal.vue'

export default {
  title: 'Components/Modal',
  component: Modal,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Modal },
  template: '<Modal @onClick="onClick" v-bind="$props" />',
});

export const Default  = Template.bind({});
Default.args = {
  title: "Modal Title",  
  visible: false,
  confirmText: "Ok",
  closeText: "Close",
};