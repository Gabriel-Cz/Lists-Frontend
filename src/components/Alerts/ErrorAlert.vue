<template>
    <div>
        <div 
          class="
            lg:w-1/4 sm:w-7/12 xs:w-full 
            py-4 px-2 mb-10 pt-6 bg-red-400 bg-opacity-50 shadow-xl rounded
            flex justify-center items-center  
            fixed z-30 bottom-0 left-1/2 transform -translate-x-1/2">
            <span @click="(false)" class="cursor-pointer absolute right-0 top-0">
                <div class="bg-red-400 text-white p-1 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </span>
            <p class="text-lg capitalize font-body font-medium">
                {{ message }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ErrorAlert",
        props: ['message'],
    }
</script>
