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
    title: "Firstname",
    value: "",
};

export const Password = Template.bind({});
Password.args = {
    title: "Password",
    value: "",
    type: "password"
};

export const Email = Template.bind({});
Email.args = {
    title: "Email",
    value: "",
    type: "email",
    placeHolder: "Enter Email"
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
    title: "Lastname",
    value: "",
    type: "text",
    placeHolder: "Enter Lastname.."
};