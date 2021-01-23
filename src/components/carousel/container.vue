<template>
    <div class="w-full flex">
           <div class="mx-auto mt-12 w-full h-52 lg:h-96 sm:w-2/5">
               <Carousel :autoplay="autoplay" :interval="interval" />
           </div>
    </div>
</template>
<script>
import Carousel from './Carousel'
export default {
    props:{
        autoplay:{
            type: Boolean,
            required: true
        },
        interval:{
            type: Number,
            default: 5000
        }
    },
    components:{
        Carousel
    }
}
</script>