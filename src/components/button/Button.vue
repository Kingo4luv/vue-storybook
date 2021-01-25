<template>
    <div>
        <button class="py-2 px-4 border text-gray-700 rounded text-sm leading-5 focus:outline-none focus:bg-gray-50">{{label}}</button>
    </div>
</template>

<script>
export default {
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
    },
    methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
}
</script>