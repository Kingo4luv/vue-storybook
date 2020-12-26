<template>
    <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform scale-95 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-300 ease-out"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0"
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