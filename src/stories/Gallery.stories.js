import Gallery from '../components/gallery/container.vue'

export default {
    title: 'Components/Gallery',
    component: Gallery,
};

const Template = (args, {
    argTypes
}) => ({
    props: Object.keys(argTypes),
    components: {
        Gallery
    },
    template: '<Gallery @onClick="onClick" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    visible: false,
};