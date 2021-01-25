<template>
    <div class="w-full flex">
           <div class="mx-auto mt-12 w-full sm:w-1/4">
               <TextField :title="title" :value="value" :type="type" :placeHolder="placeHolder" />
           </div>
    </div>
</template>
<script>
import TextField from './TextField'
export default {
    components:{
        TextField
    },
    props:{
        title:{
            type: String,
            required: true
        },
        value:{
            type: String,
            required: true
        },
        type:{
            type: String,
        },
        placeHolder:{
            type: String,
        }
    }
}
</script>