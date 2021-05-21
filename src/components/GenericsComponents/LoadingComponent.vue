<template>
    <div v-show="loading" class="absolute z-20 top-0 left-0 w-full h-full bg-gray-00 opacity-80 backdrop-filter backdrop-blur-3xl grid place-items-center">
        <div class="flex justify-items-center items-center">
            <span class="italic animate-pulse mr-5 font-regular">Cargando</span>
            <svg class="animate-spin h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="12" y1="0" x2="12" y2="15.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#5D9CA5"/>
<stop offset="1" stop-color="#8DC3CA" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'

    export default {
        name: "LoadingComponent",
        computed: {
            ...mapState('user', {
                loading: state => state.loading,
                serverStatus: state => state.serverStatus,
            })
        },
    }
</script>

<style scoped>

</style>