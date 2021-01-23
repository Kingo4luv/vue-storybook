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
        if(this.autoplay){
            this.makeInvisible();
        }
    },
    data(){
        return{
            show: true,
            currentIndex: 0,
            data: [
                {
                    name: "gallery 1",
                    image: "https://pixabay.com/get/g6e968ee81a391e9d5468ff4013d72c945a9ec560039fb42f29659a7860be57e3092fa0ddc502bdb3f5afd0b397b14626_640.jpg"
                },
                {
                    name: "gallery 2",
                    image: "https://pixabay.com/get/g57502d0ca5d9d1e570bb6385abc1f3173932349ea7e98ebb2941dcbadea889bc0edfa52ec7ac0c943fbf24c260cdcbc2_640.jpg"
                },
                {
                    name: "gallery 3",
                    image: "https://pixabay.com/get/g8366b45ae6eaea4f8ece13aa2ebf18779a611fb56d9ddcaee7b1005010cf8d940ea4ea89a3ca9723628d81a285b4b307_640.jpg"
                },
                {
                    name: "gallery 4",
                    image: "https://pixabay.com/get/gb2e89249669da70fdc68df7b4a4f78215733c34bbc27f2f99096c6ca59594b7b681c422c21bc60cfa8d408badfb72563_640.jpg"
                },
                {
                    name: "gallery 5",
                    image: "https://pixabay.com/get/g4df2129ef836b33128d033ed05862257e6e148a0010f8a516c5177bd87bb341ed0261278f07548f61409c4fc29c95fb3_640.jpg"
                },
                {
                    name: "gallery 6",
                    image: "https://pixabay.com/get/gd0aa3bc7abb804015822a8f9de9ac450985fe78f9721f940f8578f28b31c456ede0f2dd3f64256ec43c5824b20eeefb5_640.jpg"
                },
                {
                    name: "gallery 7",
                    image: "https://pixabay.com/get/g0ab944ebc94981d6f1312ad50a6538cb990bd564d753ccb532949066909dc51e7aece95b3aacbbc949ce1bf22337dc57_640.jpg"
                },
                {
                    name: "gallery 8",
                    image: "https://pixabay.com/get/g9982d5e77c0fb3f0233f81f88dbae428574f1ac7d4ace2cd99e6e5a0ed0399a73197f24d99d1c11745c5b9f8eb22f8e5_640.jpg"
                },
            ]
        }
    },
    methods:{
        makeInvisible(){
           timeout = setTimeout(() => {
                this.show = false;
                this.makeVisible();
            }, this.interval)
        },
        makeVisible(){
            this.currentIndex = this.nextOptionIndex;
            this.show = true
            this.makeInvisible();
        },

        next(){
            this.show = false
            this.currentIndex = this.prevOptionIndex;
            this.show = true

        },
        prev(){
            this.show = false
            this.currentIndex = this.nextOptionIndex;
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