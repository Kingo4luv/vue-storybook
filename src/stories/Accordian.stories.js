import Accordion from '../components/accordian/Accordian.vue'

export default {
  title: 'Components/Accordion',
  component: Accordion,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Accordion },
  template: '<Accordion  v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: "Accordion Title" ,
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla mollitia laudantium reiciendis, quis non consectetur ipsum? Porro nesciunt consequatur provident qui accusantium, cum animi quam quibusdam odit voluptatibus! Reiciendis."
};

export const Open = Template.bind({});
Open.args = {
  title: "Open Accordion" ,
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla mollitia laudantium reiciendis, quis non consectetur ipsum? Porro nesciunt consequatur provident qui accusantium, cum animi quam quibusdam odit voluptatibus! Reiciendis.",
  showContent: true
};