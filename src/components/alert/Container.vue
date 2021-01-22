<template>
    <div class="w-full h-screen flex">
           <div class="mx-auto mt-12 w-full sm:w-1/2">
                <Alert  :type='type' :dismissible='dismissible' :showIcon='showIcon' :title='title' :description='description' />
           </div>
    </div>
</template>

<script>
import Alert from './Alert'
export default {
    components:{
        Alert
    },
    props: {
        type: {
            type: String,
            required: true,
        },
        dismissible:{
            type: Boolean,
            default: false
        },
        showIcon:{
            type: Boolean,
            default: false
        },
        title:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        }
    },
}
</script>