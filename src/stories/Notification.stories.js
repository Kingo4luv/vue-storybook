import Notification from '../components/notification/index.vue'

export default {
  title: 'Components/Notification',
  component: Notification,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Notification },
  template: '<Notification @onClick="onClick" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: "Notification Title" ,
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla mollitia laudantium reiciendis, quis non consectetur ipsum? Porro nesciunt consequatur provident qui accusantium, cum animi quam quibusdam odit voluptatibus! Reiciendis.",
  visible: true  
};

export const Closed  = Template.bind({});
Closed.args = {
  title: "Notification Title" ,
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla mollitia laudantium reiciendis, quis non consectetur ipsum? Porro nesciunt consequatur provident qui accusantium, cum animi quam quibusdam odit voluptatibus! Reiciendis.",
  visible: false
};

export const TopRight  = Template.bind({});
TopRight.args = {
  title: "Notification Title" ,
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla mollitia laudantium reiciendis, quis non consectetur ipsum? Porro nesciunt consequatur provident qui accusantium, cum animi quam quibusdam odit voluptatibus! Reiciendis.",
  visible: false,
  position: "top-right"
};
export const TopLeft  = Template.bind({});
TopLeft.args = {
  title: "Notification Title" ,
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla mollitia laudantium reiciendis, quis non consectetur ipsum? Porro nesciunt consequatur provident qui accusantium, cum animi quam quibusdam odit voluptatibus! Reiciendis.",
  visible: false,
  position: "top-left"
};
export const BottomLeft  = Template.bind({});
BottomLeft.args = {
  title: "Notification Title" ,
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla mollitia laudantium reiciendis, quis non consectetur ipsum? Porro nesciunt consequatur provident qui accusantium, cum animi quam quibusdam odit voluptatibus! Reiciendis.",
  visible: false,
  position: "bottom-left"
};

export const BottomRight  = Template.bind({});
BottomRight.args = {
  title: "Notification Title" ,
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla mollitia laudantium reiciendis, quis non consectetur ipsum? Porro nesciunt consequatur provident qui accusantium, cum animi quam quibusdam odit voluptatibus! Reiciendis.",
  visible: false,
  position: "bottom-right"
};

export const WithIcon  = Template.bind({});
WithIcon.args = {
  title: "Notification Title" ,
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla mollitia laudantium reiciendis, quis non consectetur ipsum? Porro nesciunt consequatur provident qui accusantium, cum animi quam quibusdam odit voluptatibus! Reiciendis.",
  visible: false,
  showIcon: true
};

export const Success  = Template.bind({});
Success.args = {
  title: "Notification Title" ,
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla mollitia laudantium reiciendis, quis non consectetur ipsum? Porro nesciunt consequatur provident qui accusantium, cum animi quam quibusdam odit voluptatibus! Reiciendis.",
  visible: false,
  showIcon: true,
  type: "success"
};
export const Primary  = Template.bind({});
Primary.args = {
  title: "Notification Title" ,
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla mollitia laudantium reiciendis, quis non consectetur ipsum? Porro nesciunt consequatur provident qui accusantium, cum animi quam quibusdam odit voluptatibus! Reiciendis.",
  visible: false,
  showIcon: true,
  type: "primary"
};
export const Warning  = Template.bind({});
Warning.args = {
  title: "Notification Title" ,
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla mollitia laudantium reiciendis, quis non consectetur ipsum? Porro nesciunt consequatur provident qui accusantium, cum animi quam quibusdam odit voluptatibus! Reiciendis.",
  visible: false,
  showIcon: true,
  type: "warning"
};
export const Danger  = Template.bind({});
Danger.args = {
  title: "Notification Title" ,
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla mollitia laudantium reiciendis, quis non consectetur ipsum? Porro nesciunt consequatur provident qui accusantium, cum animi quam quibusdam odit voluptatibus! Reiciendis.",
  visible: false,
  showIcon: true,
  type: "danger"
};
