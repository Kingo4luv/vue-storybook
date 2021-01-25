<template>
    <div class="w-full h-full">
        <div class="w-full h-full relative overflow-hidden">
                <div v-show="show" class="w-full h-full absolute" @mouseenter="clearTiming" @mouseleave="continueTiming">
                    <img :src="data[currentIndex].image" class="w-full h-full object-cover" alt="">
                </div>
            <div class="text-white absolute bottom-6 left-0 w-full flex justify-center items-center ">
                <div class="flex space-x-2">
                    <button @click="selectCurrent(i)" class="block h-1 w-5 lg:w-6 cursor-pointer rounded focus:outline-none" :class="currentIndex === i ? 'bg-yellow-400' : 'bg-white'" v-for="(img, i) in data" :key="i"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let timeout;
export default {
    props:{
        autoplay:{
            type: Boolean,
            required: true
        },
        interval:{
            type: Number,
            default: 5000
        }
    },
    mounted(){

        this.makeInvisible();
      
    },
    data(){
        return{
            show: true,
            currentIndex: 0,
            data: [
                {
                    name: "gallery 1",
                    image: "https://images.pexels.com/photos/2532442/pexels-photo-2532442.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                },
                {
                    name: "gallery 2",
                    image: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                },
                {
                    name: "gallery 3",
                    image: "https://images.pexels.com/photos/6470280/pexels-photo-6470280.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                },
                {
                    name: "gallery 4",
                    image: "https://images.pexels.com/photos/6037918/pexels-photo-6037918.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                },
                {
                    name: "gallery 5",
                    image: "https://images.pexels.com/photos/3135801/pexels-photo-3135801.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                },
                {
                    name: "gallery 6",
                    image: "https://images.pexels.com/photos/3686791/pexels-photo-3686791.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                },
                {
                    name: "gallery 7",
                    image: "https://images.pexels.com/photos/1524113/pexels-photo-1524113.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                },
                {
                    name: "gallery 8",
                    image: "https://images.pexels.com/photos/2974623/pexels-photo-2974623.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                },
            ]
        }
    },
    methods:{
        makeInvisible(){
           if(this.autoplay){
               timeout = setTimeout(() => {
                this.show = false;
                this.makeVisible();
               }, this.interval)
           } 
           
        },
        makeVisible(){
            this.currentIndex = this.nextOptionIndex;
            this.show = true
            this.makeInvisible();
        },

        next(){
            this.show = false
            this.currentIndex = this.nextOptionIndex;
            this.show = true

        },
        prev(){
            this.show = false
            this.currentIndex = this.prevOptionIndex;
            this.show = true

        },
        selectCurrent(index){
            this.show = false
            this.currentIndex = index
            this.show = true
            clearTimeout(timeout);
        },
        clearTiming(){
            clearTimeout(timeout);
        },
        continueTiming(){
            this.makeInvisible();
        }
    },
    computed:{
        activeOptionIndex() {
            return this.data.findIndex(
                (x, index) => index === this.currentIndex || index === this.currentIndex
            );
        },
        prevOptionIndex() {
            const next = this.activeOptionIndex - 1;
            return next >= 0 ? next : this.data.length - 1;
        },
        nextOptionIndex() {
            const next = this.activeOptionIndex + 1;
            return next <= this.data.length - 1 ? next : 0;
        },
    }
}
</script>