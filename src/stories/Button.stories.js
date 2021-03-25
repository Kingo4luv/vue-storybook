import Button from '../components/button/container.vue';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color'
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    },
  },
};

const Template = (args, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    Button
  },
  template: '<Button v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const Loading = Template.bind({});
Loading.args = {
  primary: true,
  loading: true,
  label: 'Processing...',
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};