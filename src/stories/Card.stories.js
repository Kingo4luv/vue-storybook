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

};