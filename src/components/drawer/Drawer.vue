<template>
    <div class="w-full h-screen flex justify-center items-center">
        <div>
            <button class="px-6 py-2 bg-indigo-500 text-white rounded" @click="open">Open Modal</button>
        </div>
        <transition
                enter-active-class="ease-in-out duration-500"
                enter-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transform transition ease-in-out duration-500"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
                >
            <div v-show="show" class="fixed inset-0 w-full h-screen min-h-screen bg-gray-500 bg-opacity-30" @click="close">
                <transition
                    enter-active-class="transform transition ease-in-out duration-500"
                    :enter-class="transitionEnter"
                    :enter-to-class="transitionEnterTo"
                    leave-active-class="transform transition ease-in-out duration-500"
                    :leave-from-class="transitionLeaveFrom"
                    :leave-to-class="transitionLeaveTo"
                    >
                    <div v-show="show" :class="direction" class="absolute bg-white shadow-xl">
                        <div class="header py-4 border-b px-4">
                           <h3 class="font-medium text-gray-700"> {{title}}</h3>
                        </div>
                        <div class="body px-4">
                            <p>Hello</p>
                        </div>
                    </div>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            required: true
        },
        title:{
            type: String,
            required: true
        },
        confirmText:{
            type: String,
            required: true
        },
        closeText:{
            type: String,
            required: true
        },
        position:{
            type: String,
            default: "right"
        }
    },
    computed:{
        direction(){
            if(this.position === "left"){
                return `top-0 left-0 h-full w-1/4`;
            }else if(this.position === "top"){
                return `top-0 right-0 h-64 w-full`;
            }else if(this.position === "bottom"){
                return `bottom-0 h-64 w-full`;
            }
            return `top-0 right-0 w-1/4 h-full`;
        },
        transitionEnter(){
            if(this.position === "left"){
                return `-translate-x-full`;
            }else if(this.position === "top"){
                return `-translate-y-full`;
            }else if(this.position === "bottom"){
                return `translate-y-full`;
            }
            return `translate-x-full`;
        },
        transitionEnterTo(){
            if(this.position === "left"){
                return `-translate-x-0`;
            }else if(this.position === "top"){
                return `-translate-y-0`;
            }else if(this.position === "bottom"){
                return `translate-y-0`;
            }
            return `translate-x-0`;
        },
        transitionLeaveFrom(){
            if(this.position === "left"){
                return `-translate-x-0`;
            }else if(this.position === "top"){
                return `-translate-y-0`;
            }else if(this.position === "bottom"){
                return `translate-y-0`;
            }
            return `translate-x-0`;
        },
        transitionLeaveTo(){
            if(this.position === "left"){
                return `-translate-x-full`;
            }else if(this.position === "top"){
                return `-translate-y-full`;
            }else if(this.position === "bottom"){
                return `translate-y-full`;
            }
            return `translate-x-full`;
        },
    },
    data(){
        return{
            show: this.visible
        }
    },

    methods:{
        close(){
            this.show = false
        },
        open(){
            this.show = true
        }
    }
}
</script>