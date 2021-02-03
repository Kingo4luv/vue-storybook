<template>
    <div>
       <div class="w-full bg-white rounded border">
           <img v-show="withImage" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="card-img" class="w-full h-52 rounded-t object-cover">
           <div class="card-body mt-6 px-4">
                <h2 class="card-title text-gray-700 font-semibold text-xl">
                   {{title}}
                </h2>
                <p class="text-gray-600 leading-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, deleniti repellendus, fugiat debitis necessitatibus odit, inventore facere nam labore non consequatur eos aliquam blanditiis iure! Dolor assumenda dolore placeat inventore!
                </p>
           </div>
           <div v-show="withAction" class="card-action flex justify-between px-4 mb-4">
               <a href="#" class="text-indigo-500 bg-gray-50 p-1 hover:underline hover:bg-gray-100 rounded">Read more</a>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    props:{
        withImage: {
            type: Boolean,
            default: false
        },
        withAction:{
            type: Boolean,
            default: false
        },
        title:{
            type: String,
            required: true
        }
    },
}
</script>