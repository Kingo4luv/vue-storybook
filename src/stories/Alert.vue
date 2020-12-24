<template>
    <div v-show="show" :class="color" class="border px-4 rounded flex justify-between items-center">
        <div class="flex space-x-2 items-center">
            <span v-show="showIcon">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" :class="color" v-html="icon"></svg>
            </span>
            <p>Alert text</p>
        </div>
        <button  v-show="dismissible" class="cursor-pointer" @click="dismiss">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20" fill="currentColor" class="w-6 h-6" :class="color"><path d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/></svg>
        </button>
    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            required: true,
        },
        dismissible:{
            type: Boolean,
            default: false
        },
        showIcon:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            show: true,
        }
    },
    computed:{
        color(){
            if(this.type === "primary"){
                return "bg-blue-500 text-white";
            }else if(this.type === "danger") {
                return "bg-red-500 text-white";
            }else if(this.type === "warning") {
                return "bg-green-200 text-gray-700";
            }
            else if(this.type === "success") {
                return "bg-green-500 text-white";
            }
            return "bg-gray-100 text-gray-700";
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
    methods: {
        dismiss(){
            this.show = false;
        }
    },
    
}
</script>