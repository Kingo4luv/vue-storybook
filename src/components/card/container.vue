<template>
    <div class="w-full flex bg-gray-100">
           <div class="mx-auto mt-12 w-full h-screen sm:max-w-sm">
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