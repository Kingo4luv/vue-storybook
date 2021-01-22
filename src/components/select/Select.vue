<template>
    <div>
        <div class="w-full">
            <label id="listbox-label" class="block font-medium text-gray-700">
                Country
            </label>
            <div class="mt-2 relative">
                <button @click="toggleList" type="button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" class="relative w-full bg-white border border-gray-300 rounded text-gray-700 shadow-sm pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                    <span class="flex items-center">
                        <country-flag :country='currentCountry.icon' size='normal'/>
                        <span class="ml-5 block truncate">
                        {{currentCountry.name}}
                        </span>
                    </span>
                    <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </button>

                <!--
                Select popover, show/hide based on select state.

                Entering: ""
                    From: ""
                    To: ""
                Leaving: "transition ease-in duration-100"
                    From: "opacity-100"
                    To: "opacity-0"
                -->
                <transition
                    enter-active-class="ease-in-out duration-500"
                    enter-class="opacity-0"
                    enter-to-class="opacity-100"
                leave-active-class="ease-in-out duration-500"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
                >
                    <div v-show="open" class="absolute mt-1 w-full rounded bg-white shadow-xl border border-gray-100">
                        <div class="flex items-center border-b">
                            <span class="pl-4 pr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mt-1 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                            <input v-model="search" type="text" class="w-full py-2 bg-white focus:outline-none text-gray-700 px-2">
                        </div>
                        <ul v-if="filteredCountry.length > 0" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="max-h-56 text-base overflow-auto focus:outline-none">
                            <!--
                            Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

                            Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
                            -->
                            <li tabindex="0" v-for="(country, index) in filteredCountry" @click="select(country)"  role="option" :class="currentCountry.name === country.name ? 'bg-gray-100' : ''" class="text-gray-900 cursor-pointer select-none relative py-2 hover:bg-gray-100 -ml-8 focus:outline-none" :key="index">
                                <div class="flex items-center px-4" >
                                
                                    <country-flag :country='country.icon' size='normal'/>
                                    <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                                    <span class="ml-3 block font-normal truncate" :class="currentCountry.name === country.name ? 'font-medium' : ''">
                                        {{country.name}}
                                    </span>
                                </div>

                                <!--
                                    Checkmark, only display for selected option.

                                    Highlighted: "text-white", Not Highlighted: "text-indigo-600"
                                -->
                                <span v-if="currentCountry.name === country.name" class="absolute inset-y-0 right-0 flex items-center pr-4">
                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </li>

                            <!-- More items... -->
                        </ul>
                        <div v-else class="p-4 text-center">
                            <p class="text-sm text-gray-700">No data</p>
                        </div>
                    </div>
                </transition>

            </div>
        </div>

    </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'
export default {
    components: {
        CountryFlag
    },
    data(){
        return{
            open: false,
            currentCountry: {
                name: "Nigeria",
                icon:"ng"
            },
            search: "",
            data: [
               {
                    name: "Afghanistan",
                    icon:"af"
               },
               {
                    name: "Algeria",
                    icon:"dz"
               },
               {
                    name: "Australia",
                    icon:"au"
               },
               {
                    name: "Belgium",
                    icon:"be"
               },
               {
                    name: "Canada",
                    icon:"ca"
               },
               {
                    name: "China",
                    icon:"cn"
               },
               {
                    name: "Ghana",
                    icon:"gh"
               },
               {
                    name: "Nigeria",
                    icon:"ng"
               },
               {
                    name: "USA",
                    icon:"us"
               },

            ]
        }
    },
    methods: {
        toggleList(){
            this.open = !this.open;
        },
        closeList(){
            this.open = false;
        },
        select(country){
            this.currentCountry = country;
            this.closeList();
        },
        
    },

    computed:{
        filteredCountry(){
            return this.data.filter((country) => {
                return country.name.toLowerCase().match(this.search.toLowerCase());
            });
        }
    }
}
</script>