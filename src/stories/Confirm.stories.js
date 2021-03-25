import Confirm from '../components/popconfirm/Confirm.vue'

export default {
  title: 'Components/Confirm',
  component: Confirm,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Confirm },
  template: '<Confirm  v-bind="$props" />',
});

export const Default  = Template.bind({});
Default.args = {
  title: "Confirm Title",  
  message: "Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.",
  visible: false,
  confirmText: "Deactivate",
  cancelText: "Cancel",
};