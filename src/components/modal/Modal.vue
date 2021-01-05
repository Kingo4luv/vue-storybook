<template>
<div class="w-full h-screen flex justify-center items-center">
    <div>
        <button class="px-6 py-2 bg-indigo-500 text-white rounded" @click="open">Open Modal</button>
    </div>
        <!-- This example requires Tailwind CSS v2.0+ -->
    <div v-show="show" class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-start justify-center min-h-screen pt-2 px-2">
            <!--
            Background overlay, show/hide based on modal state.

            Entering: "ease-out duration-300"
                From: "opacity-0"
                To: "opacity-100"
            Leaving: "ease-in duration-200"
                From: "opacity-100"
                To: "opacity-0"
            -->
            <transition
                enter-active-class="transition ease-out duration-300"
                enter-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition ease-in duration-200"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
                >
                    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
            </transition>

            <!--
            Modal panel, show/hide based on modal state.

            Entering: "ease-out duration-300"
                From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
                From: "opacity-100 translate-y-0 sm:scale-100"
                To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            -->
            <transition
            enter-active-class="transition ease-out duration-300"
            enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="transition ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
                <div class="inline-block align-bottom bg-white rounded text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div class="header px-4 py-4 border-b">
                        <h3 class="text-lg leading-6 font-medium text-gray-800" id="modal-headline">
                            {{title}}
                        </h3>
                    </div>
                    <div class="body my-2 px-4">
                        <p class="text-sm text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam perferendis provident non ducimus dicta. Veniam in quas, suscipit tempora, culpa corporis accusamus autem perspiciatis dolore nihil dignissimos assumenda repellat optio?
                        </p>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 flex justify-end">
                            <button @click="close" type="button" class="inline-flex justify-center rounded border leading-5 border-gray-300 shadow-sm px-4 py-2 bg-white text-base text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:text-sm">
                                {{closeText}}
                            </button>
                            <button @click="close" type="button" class="inline-flex justify-center rounded border leading-5 border-transparent shadow-sm px-4 py-2 bg-indigo-400 text-base text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:text-sm">
                                {{confirmText}}
                            </button>
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