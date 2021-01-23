<template>
    <div>
        <div class="w-full h-48 lg:h-96 ">
            <div class="w-full h-full justify-center flex items-center capitalize overflow-hidden">
                <img :src="data[currentIndex].image" class="w-full object-cover" alt="">
            </div>
        </div>
        <div class="w-full flex overflow-auto flex-nowrap mt-2">
            <div class="w-1/5 lg:w-1/6 h-12 lg:h-20 flex-none overflow-hidden border-2" :class="index === currentIndex ? 'opacity-70 border-red-600 rounded' : ''"  v-for="(gallery, index) in data" :key="index" @mouseenter="chooseCurrent(index)">
                <img :src="gallery.image" class="w-full h-full object-cover" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
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
        chooseCurrent(index){
            this.currentIndex = index;
        }
    }
}
</script>