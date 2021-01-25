import TextField from '../components/input/container.vue'

export default {
    title: 'Inputs/TextField',
    component: TextField,
};

const Template = (args, {
    argTypes
}) => ({
    props: Object.keys(argTypes),
    components: {
        TextField
    },
    template: '<TextField  v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {

};