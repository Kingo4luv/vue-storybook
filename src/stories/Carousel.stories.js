import Carousel from '../components/carousel/container.vue'

export default {
    title: 'Components/Carousel',
    component: Carousel,
};

const Template = (args, {
    argTypes
}) => ({
    props: Object.keys(argTypes),
    components: {
        Carousel
    },
    template: '<Carousel  v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};