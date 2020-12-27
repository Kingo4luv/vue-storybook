import Snackbar from '../components/snackbar/Snackbar.vue'

export default {
  title: 'Components/Snackbar',
  component: Snackbar,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Snackbar },
  template: '<Snackbar @onClick="onClick" v-bind="$props" />',
});

export const TopRight  = Template.bind({});
TopRight.args = {
  message: "Lorem ipsum dolor sit amet",
  visible: false,
  position: "top-right"
};
export const TopLeft  = Template.bind({});
TopLeft.args = {
  message: "Lorem ipsum dolor sit amet",
  visible: false,
  position: "top-left"
};
export const BottomLeft  = Template.bind({});
BottomLeft.args = {
  message: "Lorem ipsum dolor sit amet",
  visible: false,
  position: "bottom-left"
};

export const BottomRight  = Template.bind({});
BottomRight.args = {
  message: "Lorem ipsum dolor sit amet",
  visible: false,
  position: "bottom-right"
};

export const WithIcon  = Template.bind({});
WithIcon.args = {
  message: "Lorem ipsum dolor sit amet",
  visible: false,
  showIcon: true
};

export const Success  = Template.bind({});
Success.args = {
  message: "Lorem ipsum dolor sit amet",
  visible: false,
  showIcon: true,
  type: "success"
};
export const Primary  = Template.bind({});
Primary.args = {
  message: "Lorem ipsum dolor sit amet",
  visible: false,
  showIcon: true,
  type: "primary"
};
export const Warning  = Template.bind({});
Warning.args = {
  message: "Lorem ipsum dolor sit amet",
  visible: false,
  showIcon: true,
  type: "warning"
};
export const Danger  = Template.bind({});
Danger.args = {
  message: "Lorem ipsum dolor sit amet",
  visible: false,
  showIcon: true,
  type: "danger"
};