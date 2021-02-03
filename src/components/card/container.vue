<template>
    <div class="w-full flex bg-gray-100">
           <div class="mx-auto mt-12 w-full h-screen sm:max-w-sm">
               <Card  :withImage="withImage" :withAction="withAction" :title="title"/>
           </div>
    </div>
</template>
<script>
import Card from './Card'
export default {
    props:{
        withImage: {
            type: Boolean,
            default: false
        },
        withAction:{
            type: Boolean,
            default: false
        },
        title:{
            type: String,
            required: true
        }
    },
    components:{
        Card
    }
}
</script>