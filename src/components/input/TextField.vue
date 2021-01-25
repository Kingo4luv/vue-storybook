<template>
    <div>
        <label for="email_address" class="block font-medium text-gray-700">{{title}}</label>
        <input :type="type" :placeholder="placeHolder" :v-model="value" class="mt-1 px-2 text-gray-700 border border-gray-300 w-full py-2 rounded focus:outline-none focus:border-gray-400">
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
        },
        value:{
            type: String,
            required: true
        },
        type:{
            type: String,
            default: 'text'
        }, 
        placeHolder:{
            type: String,
            default: ""
        }
    },
}
</script>