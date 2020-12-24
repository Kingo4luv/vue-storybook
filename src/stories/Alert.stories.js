import Alert from './Alert.vue';

export default {
  title: 'Components/Alert',
  component: Alert,
};

export const BasicAlert = () => ({
  render() {
    return <Alert />;
  },
})

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Alert },
  template: '<Alert @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  showIcon: true ,

};

export const Danger = Template.bind({});
Danger.args = {
  type: "danger",
  showIcon: true ,
  
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  showIcon: true ,
  
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
  showIcon: true ,
  
};

export const Dismissible = Template.bind({});
Dismissible.args = {
  dismissible: true,
  
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  showIcon: true ,
  
};