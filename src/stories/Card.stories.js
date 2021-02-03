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
    title: "Card Title for default",
    withImage: false,
    withAction: false,
};

export const WithAction = Template.bind({});
WithAction.args = {
    title: "Card Title with action only",
    withImage: false,
    withAction: true,
};

export const WithImage = Template.bind({});
WithImage.args = {
    title: "Card Title with image Only",
    withImage: true,
    withAction: false,
};

export const WithImageAndAction = Template.bind({});
WithImageAndAction.args = {
    title: "Card Title with Action and Image",
    withImage: true,
    withAction: true,
};