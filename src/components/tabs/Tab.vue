<template>
    <div class="w-full sm:w-3/5 h-screen mx-auto">
        <div class="header w-full flex border-b" :class="float">
            <div @click="setActive('tab-1')" :class="active === 'tab-1' ? 'border-b border-indigo-500 text-indigo-500 font-medium': ''" class="tab-1 py-2 px-2 text-sm text-gray-700 cursor-pointer transition-all duration-500 ease-in-out">
                 <h4>{{tab_1_title}}</h4>
            </div>
            <div @click="setActive('tab-2')" :class="active === 'tab-2' ? 'border-b border-indigo-500 text-indigo-500 font-medium': ''"  class="tab-1 py-2 px-2 text-sm text-gray-700 cursor-pointer transition-all duration-500 ease-in-out">
                <h4>{{tab_2_title}}</h4>
            </div>
        </div>
        <div class="content w-full text-sm text-gray-800 ">
            <div v-if="active === 'tab-1'" class="content-1 w-full h-full px-2 sm:px-4 py-2">
                <p>Content 1 Voluptate non asperiores nesciunt sint error aspernatur, ab saepe consequuntur mollitia maxime, molestiae reiciendis repellendus similique possimus, quasi culpa itaque sunt voluptates.</p>
            </div>
            <div v-if="active === 'tab-2'" class="content-1 w-full h-full px-2 sm:px-4 py-2">
                <p>Content 2 Expedita tenetur a culpa, in labore, quia totam quos sapiente harum tempore illum, nesciunt veniam adipisci! Maxime perferendis tempore modi sed repudiandae.</p>
            </div>
        </div>
       
    </div>
</template>
<script>
export default {
    props:{
        open:{
            type: String
        },
        position:{
            type: String
        },
        tab_1_title:{
            type: String,
            required: true
        },
        tab_2_title:{
            type: String,
            required: true
        },
    },
    computed:{
        float(){
            if(this.position === 'center'){
                return 'justify-center';
            }else if(this.position === 'right'){
                return 'justify-end'
            }
            return ''
        }
    },
    data(){
        return{
            active: 'tab-1'
        }
    },

    methods:{
        setActive(tab){
            this.active = tab
        }
    }
}
</script>