<template>
    <div class="w-full h-screen flex justify-center items-center bg-gray-50">
        <div>
            <button class="px-6 py-2 bg-blue-700 text-white rounded" @click="open">Open Snackbar</button>
        </div>
        <transition
            enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
            :enter-class="transitionEnter"
            :enter-to-class="transitionEnterTo"
            leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
            :leave-from-class="transitionLeaveFrom"
            :leave-to-class="transitionLeaveTo"
            >
            <div :class="`${direction} ${color}`"  class="fixed w-full sm:w-1/4 shadow-xl space-y-2 px-4 py-1 z-10 rounded" v-show="show">
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <span v-show="showIcon" class="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6" :class="color" v-html="icon"></svg>
                        </span>
                        <p class="leading-4">{{message}}</p>
                    </div>
                </div>
            </div>
        </transition>    
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
        message:{
            type: String,
            required: true
        },
    },
    data(){
        return{
            show: this.visible
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
        },
        color(){
            if(this.type === "primary"){
                return "bg-blue-500 text-white";
            }else if(this.type === "danger") {
                return "bg-red-500 text-white";
            }else if(this.type === "warning") {
                return "bg-yellow-500 text-white";
            }
            else if(this.type === "success") {
                return "bg-green-600 text-white";
            }
            return "bg-white text-gray-700 border border-gray-100";
        },

        icon(){
            if(this.type === "primary"){
                return  `<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />`;
            }else if(this.type === "danger") {
                return `<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />`;
            }else if(this.type === "warning") {
                return `<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />`;
            }
            else if(this.type === "success") {
                return `<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />`;
            }
            return `<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />`;
        }
    },
    methods:{
        open(){
            this.show = open;
            setTimeout(() => {
                 this.show = false;
            }, 5000)
        }
    } 
}
</script>