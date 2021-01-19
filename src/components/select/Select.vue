<template>
    <div>
        <div class="w-full h-screen bg-gray-50 flex">
           <div class="mx-auto mt-12 w-1/4">
                <label id="listbox-label" class="block font-medium text-gray-700">
                    Country
                </label>
                <div class="mt-2 relative">
                    <button type="button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" class="relative w-full bg-white border border-gray-300 rounded text-gray-700 shadow-sm pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                        <span class="flex items-center">
                            <country-flag country='us' size='normal'/>
                            <span class="ml-5 block truncate">
                            USA
                            </span>
                        </span>
                        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </button>
                </div>
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
}
</script>