<template>
    <div class="header py-2 px-2 font-medium flex justify-between items-center cursor-pointer text-gray-700" :class="visible ? 'border-r border-t border-l': 'border' " @click="$emit('toggleContent')">
        <span>
            {{title}}
        </span>
        <button  class="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-700" v-html="icon"></svg>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        title:{
            type: String,
            required: true
        },
        visible:{
            type: Boolean,
            required: true
        }
    },
    computed:{
        icon(){
            if(this.visible){
                return  `<path class="heroicon-ui" d="M17 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h10z"/>`;
            }
            return `<path class="heroicon-ui" d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"/>`;
        }
    },
}
</script>