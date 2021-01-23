<template>
    <div class="w-full flex">
           <div class="mx-auto mt-12 w-full h-52 lg:h-96 sm:w-2/5">
               <Carousel />
           </div>
    </div>
</template>
<script>
import Carousel from './Carousel'
export default {
    components:{
        Carousel
    }
}
</script>