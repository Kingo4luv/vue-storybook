<template>
    <div class="w-full flex bg-gray-100">
           <div class="mx-auto mt-12 w-full h-screen sm:max-w-sm px-2 sm:px-0">
               <List />
           </div>
    </div>
</template>
<script>
import List from './List'
export default {
    // props:{
    //     withImage: {
    //         type: Boolean,
    //         default: false
    //     },
    //     withAction:{
    //         type: Boolean,
    //         default: false
    //     },
    //     title:{
    //         type: String,
    //         required: true
    //     }
    // },
    components:{
        List
    }
}
</script>