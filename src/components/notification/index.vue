<template>
    <div class="w-full h-screen flex justify-center items-center bg-gray-50">
        <div>
            <button class="px-6 py-2 bg-blue-700 text-white rounded" @click="open">Open Notification</button>
        </div>
        <div class="notification">
            <transition
            enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
            :enter-class="transitionEnter"
            :enter-to-class="transitionEnterTo"
            leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
            :leave-from-class="transitionLeaveFrom"
            :leave-to-class="transitionLeaveTo"
            >
                <div :class="direction" class="fixed w-full sm:w-1/4 bg-white shadow-xl space-y-2 p-4 border border-gray-100 z-10" v-show="show">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <span v-show="showIcon" class="mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" :class="color" v-html="icon"></svg>
                            </span>
                            <h3 class="font-medium text-gray-700">Notification Title</h3>
                        </div>
                        <button class="cursor-pointer" @click="dismiss">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" :class="color"><path d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/></svg>
                        </button>
                    </div>
                    <p class="text-sm leading-6 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat a, dolor soluta labore nesciunt, error, tempore harum mollitia cupiditate delectus sapiente. Nostrum totam similique modi libero praesentium asperiores neque.
                    </p>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            default: "top-right",
        },
        visible: {
            type: Boolean,
            required: true
        },
        showIcon:{
            type: Boolean,
            default: false
        },
        title:{
            type: String,
            required: true
        },
        content:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            show: this.visible
        }
    },
    computed:{
        direction(){
            if(this.position === "top-left"){
                return `top-0 left-0 ml-0 sm:ml-2 mt-2`;
            }else if(this.position === "bottom-left"){
                return `bottom-0 left-0 ml-2 mb-2`;
            }else if(this.position === "bottom-right"){
                return `bottom-0 right-0 mr-2 mb-2`;
            }
            return `top-0 right-0 mr-0 sm:mr-2 mt-2`;
        },
        transitionEnter(){
            if(this.position === "top-left" || this.position === "bottom-left"){
                return `-translate-x-full`;
            }
            return `translate-x-full`;
        },
        transitionEnterTo(){
            if(this.position === "top-left" || this.position === "bottom-left"){
                return `-translate-x-0`;
            }
            return `translate-x-0`;
        },
        transitionLeaveFrom(){
            if(this.position === "top-left" || this.position === "bottom-left"){
                return `-translate-x-0`;
            }
            return `translate-x-0`;
        },
        transitionLeaveTo(){
            if(this.position === "top-left" || this.position === "bottom-left"){
                return `-translate-x-full`;
            }
            return `translate-x-full`;
        },
        color(){
            if(this.type === "primary"){
                return "text-blue-600";
            }else if(this.type === "danger") {
                return "text-red-600";
            }else if(this.type === "warning") {
                return "text-yellow-500";
            }
            else if(this.type === "success") {
                return "text-green-600";
            }
            return "text-gray-700";
        },
        icon(){
            if(this.type === "primary"){
                return  `<path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>`;
            }else if(this.type === "danger") {
                return `<path d="M4.93 19.07A10 10 0 1 1 19.07 4.93 10 10 0 0 1 4.93 19.07zm1.41-1.41A8 8 0 1 0 17.66 6.34 8 8 0 0 0 6.34 17.66zM13.41 12l1.42 1.41a1 1 0 1 1-1.42 1.42L12 13.4l-1.41 1.42a1 1 0 1 1-1.42-1.42L10.6 12l-1.42-1.41a1 1 0 1 1 1.42-1.42L12 10.6l1.41-1.42a1 1 0 1 1 1.42 1.42L13.4 12z"/>`;
            }else if(this.type === "warning") {
                return `<path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>`;
            }
            else if(this.type === "success") {
                return `<path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"/>`;
            }
            return `<path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>`;
        }
    },
    methods:{
        dismiss(){
            this.show = false;
        },
        open(){
            this.show = open;
            setTimeout(() => {
                 this.show = false;
            }, 5000)
        }
    }
}
</script>