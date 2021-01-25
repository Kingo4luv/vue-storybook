<template>
    <div class="w-full flex">
           <div class="mx-auto mt-12 w-full sm:w-1/4">
               <Button :label="label" :loading="loading" :color="color" />
           </div>
    </div>
</template>
<script>
import Button from './Button'
export default {
    components:{
        Button
    },
    props:{
        label:{
            type: String,
        },
        loading:{
            type: Boolean,
            default: false
        },
        color:{
            type: String,
            default: "primary"
        }
    }
}
</script>