import Card from '../components/card/container.vue'

export default {
    title: 'Components/Card',
    component: Card,
};

const Template = (args, {
    argTypes
}) => ({
    props: Object.keys(argTypes),
    components: {
        Card
    },
    template: '<Card  v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    withImage: false,
    withAction: false,
};

export const WithImage = Template.bind({});
WithImage.args = {
    withImage: true,
    withAction: false,
};

export const WithAction = Template.bind({});
WithAction.args = {
    withImage: false,
    withAction: true,
};