import Sidebar from '../components/sidebar/container.vue'

export default {
    title: 'Components/Sidebar',
    component: Sidebar,
};

const Template = (args, {
    argTypes
}) => ({
    props: Object.keys(argTypes),
    components: {
        Sidebar
    },
    template: '<Sidebar  v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {

};