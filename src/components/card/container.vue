<template>
    <div class="w-full flex">
           <div class="mx-auto mt-12 w-full h-52 lg:h-96 sm:w-2/5">
               <Card />
           </div>
    </div>
</template>
<script>
import Card from './Card'
export default {
    props:{
        
    },
    components:{
        Card
    }
}
</script>