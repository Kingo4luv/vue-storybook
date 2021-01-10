<template>
    <div class="w-full h-screen flex justify-center items-center">
        <div>
            <button class="px-6 py-2 bg-indigo-500 text-white rounded" @click="open">Open Modal</button>
        </div>
        <div v-show="show" class="fixed z-10 inset-0 overflow-y-auto w-full">
            <div class="flex justify-end min-h-screen h-screen bg-white w-full">

                    <div class="fixed inset-0 transition-opacity" aria-hidden="true" @click="close">
                        <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                    </div>
                <transition
                enter-active-class="transform transition ease-in-out duration-700 sm:duration-700"
                enter-class="translate-x-full"
                enter-to-class="translate-x-0"
                leave-active-class="transform transition ease-in-out duration-700 sm:duration-700"
                leave-from-class="translate-x-0"
                leave-to-class="translate-x-full"
                >
                    <div class="bg-white text-left overflow-hidden shadow-xl transform transition-all w-1/4 h-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div class="header px-4 py-4 border-b">
                            <h3 class="text-lg leading-6 font-medium text-gray-800" id="modal-headline">
                                {{title}}
                            </h3>
                        </div>
                    </div>
                </transition>
            </div>
        </div>    
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
        transitionEnter(){
            if(this.position === "left"){
                return `-translate-x-full`;
            }
            return `translate-x-full`;
        },
        transitionEnterTo(){
            if(this.position === "left"){
                return `-translate-x-0`;
            }
            return `translate-x-0`;
        },
        transitionLeaveFrom(){
            if(this.position === "left"){
                return `-translate-x-0`;
            }
            return `translate-x-0`;
        },
        transitionLeaveTo(){
            if(this.position === "left"){
                return `-translate-x-full`;
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