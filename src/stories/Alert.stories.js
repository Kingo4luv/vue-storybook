import Alert from '../components/alert/Container.vue';

export default {
  title: 'Components/Alert',
  component: Alert,
};


const Template = (args, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    Alert
  },
  template: '<Alert @onClick="onClick" v-bind="$props" />',
});

export const BasicAlert = Template.bind({});
BasicAlert.args = {
  title: "Alert Title",
};

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  showIcon: true,
  title: "Primary",
  description: "Alert description to help provide more info for the context"

};

export const Danger = Template.bind({});
Danger.args = {
  type: "danger",
  showIcon: true,
  title: "Danger",
  description: "Alert description to help provide more info for the context"

};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  showIcon: true,
  title: "Warning",
  description: "Alert description to help provide more info for the context"

};

export const Success = Template.bind({});
Success.args = {
  type: "success",
  showIcon: true,
  title: "Success",
  description: "Alert description to help provide more info for the context"

};

export const Dismissible = Template.bind({});
Dismissible.args = {
  dismissible: true,
  title: "Alert title",

};

export const WithIcon = Template.bind({});
WithIcon.args = {
  showIcon: true,
  title: "Alert title",

};

export const WithDescription = Template.bind({});
WithDescription.args = {
  title: "Alert title",
  description: "Alert description to help provide more info for the context"

};