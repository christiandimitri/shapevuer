import Banner from "./Banner.vue";

//👇 This default export determines where your story goes in the story list
export default {
    title: "Banner",
    component: Banner
};
//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
    components: {Banner},
    setup() {
        //👇 The args will now be passed down to the template
        return {args};
    },
    template: '<Banner>My first banner</Banner>',
});

export const FirstStory = Template.bind({});

FirstStory.args = {
    /* 👇 The args you need here will depend on your component */
};