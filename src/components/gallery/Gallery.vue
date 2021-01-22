<template>
    <div>
        <div class="w-full h-96 border rounded">
            <div class="w-full h-full justify-center flex items-center capitalize overflow-hidden">
                <img :src="current.image" class="w-full object-cover" alt="">
            </div>
        </div>
        <div class="w-full flex overflow-auto flex-nowrap">
            <div class="w-1/4 h-32 flex-none overflow-hidden" :class="gallery.name === current.name ? 'opacity-70 border-4 border-white' : ''"  v-for="(gallery, index) in data" :key="index" @click="chooseCurrent(gallery)">
                <img :src="gallery.image" class="w-full h-full object-cover" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            current: {
                 name: "gallery 1",
                 image: "https://pixabay.com/get/g6e968ee81a391e9d5468ff4013d72c945a9ec560039fb42f29659a7860be57e3092fa0ddc502bdb3f5afd0b397b14626_640.jpg"
            },
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
                    image: "https://pixabay.com/get/g7c61d4b623f5bfa4aac37bd7b2f95cf6a4baeb72cde7f81fbaec760c0846a7b63498e616783de44d1eb17a6ec1a70a4d_640.jpg"
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
        chooseCurrent(gallery){
            this.current = gallery;
        }
    }
}
</script>