<template>
    <div class="bg-white rounded border">
        <div class="header py-6 px-4 border-b flex flex-col items-center justify-center space-y-2">
            <span class="w-24 h-24 rounded-full bg-gray-200"></span>
            <div class="flex flex-col justify-center items-center">
                <h4 class="text-xl font-medium text-gray-700">John Doesun</h4>
                <a href="#" class="text-sm hover:underline text-indigo-500">View profile</a>
            </div>
        </div>
        <div class="list-item-container">
            <div class="list-item px-4 py-4 flex items-center space-x-5 cursor-pointer  hover:bg-gray-50">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </span>
                <span>Home</span>
            </div>
            <div class="list-item px-4 py-4 flex items-center space-x-5 cursor-pointer  hover:bg-gray-50">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>
                <span>Profile</span>
            </div>
            <div class="list-item px-4 py-4 flex items-center space-x-5 cursor-pointer hover:bg-gray-50">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </span>
                <span>Portfolio</span>
            </div>
            <div class="list-item px-4 py-4 flex items-center space-x-5 cursor-pointer hover:bg-gray-50">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                </span>
                <span>News</span>
            </div>
        </div>
    </div>
</template>