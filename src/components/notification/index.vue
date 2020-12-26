<template>
    <div class="w-full h-screen flex justify-center items-center">
        <div>
            <button class="px-6 py-2 bg-blue-700 text-white rounded" @click="open">Show</button>
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
                <div :class="direction" class="fixed w-1/4 bg-white shadow-lg space-y-2 p-4 border border-gray-100" v-show="show">
                    <div class="flex justify-between items-center">
                        <h3 class="font-medium text-gray-700">Notification Title</h3>
                        <button class="cursor-pointer" @click="dismiss">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" :class="color"><path d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/></svg>
                        </button>
                    </div>
                    <p class="text-sm tracking-wide leading-5 text-gray-600">
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
        position: {
            type: String,
            default: "bottom-left",
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
            show: false
        }
    },
    computed:{
        direction(){
            if(this.position === "top-left"){
                return `top-0 left-0 ml-2 mt-2`;
            }else if(this.position === "bottom-left"){
                return `bottom-0 left-0 ml-2 mb-2`;
            }else if(this.position === "bottom-right"){
                return `bottom-0 right-0 mr-2 mb-2`;
            }
            return `top-0 right-0 mr-2 mt-2`;
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