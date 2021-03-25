import Tab from '../components/tabs/Tab.vue'

export default {
  title: 'Components/Tab',
  component: Tab,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Tab },
  template: '<Tab  v-bind="$props" />',
});

export const Default  = Template.bind({});
Default.args = {
  open: "tab-1", 
  tab_1_title: "Home",
  tab_2_title: "Profile" 
};

export const Center  = Template.bind({});
Center.args = {
  open: "tab-1",  
  position: "center",
  tab_1_title: "Home",
  tab_2_title: "Profile"
};

export const Right  = Template.bind({});
Right.args = {
  open: "tab-1",  
  position: "right",
  tab_1_title: "Home",
  tab_2_title: "Profile"
};