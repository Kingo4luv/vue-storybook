<template>
    <div class="w-full flex bg-gray-100">
           <div class="mx-auto mt-12 w-full h-screen sm:max-w-xs">
               <Sidebar />
           </div>
    </div>
</template>
<script>
import Sidebar from './Sidebar'
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
        Sidebar
    }
}
</script>