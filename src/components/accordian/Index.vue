<template>
    <div class="w-full mb-2">
        <Header :title="title" :visible="show" @toggleContent="toggleContents"/>
        <Content :content="content" :visible="show"/>  
    </div> 
</template>
<script>
import Header from './Header';
import Content from './Content';
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
        Header,
        Content
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