<template>
    <div class="w-full h-screen bg-gray-100 flex">
           <div class="mx-auto mt-12 w-full sm:w-1/4">
                <Select :visible="visible" />
           </div>
    </div>
</template>

<script>
import Select from './Select'
export default {
    components:{
        Select
    },
    props:{
        visible:{
            type: Boolean,
            required: true
        }
    }
}
</script>