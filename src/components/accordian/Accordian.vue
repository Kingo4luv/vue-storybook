<template>
    <div class="accordian-container w-full flex justify-center">
        <div class="w-full md:w-1/3 sm:w-1/4">
           <Index :title="title" :content="content" :showContent="showContent" />
           <Index :title="title" :content="content" :showContent="showContent" />
        </div>
    </div>
</template>
<script>
import Index from './Index';
export default {
    props: {
        title:{
            type: String,
            required: true
        },
        content:{
            type: String,
            required: true
        },
        showContent:{
            type: Boolean,
            default: false
        }
    },
    components:{
        Index,
    },

    data(){
        return{
            show: this.showContent,
        }
    },

    methods:{
        toggleContents(){
            this.show = !this.show;
        }
    }
    
}
</script>