<template>
    <transition
    enter-active-class="transform transition ease-in-out duration-300"
    enter-class="-translate-y-2"
    enter-to-class="translate-y-0"
    leave-active-class="transform transition ease-in-out duration-100"
    leave-from-class="translate-y-0"
    leave-to-class="-translate-y-0"
    >
        <div class="content w-full py-2 px-4 border text-gray-700" :class="visible ? 'border-r border-b border-l': 'border' " v-show="visible">
            {{content}}
        </div>
    </transition>  
</template>
<script>
export default {
    props: {
        content:{
            type: String,
            required: true
        },
        visible:{
            type: Boolean,
            required: true
        }
    },
    
}
</script>