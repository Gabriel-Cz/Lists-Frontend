<template>
    <div v-if="listsLoader">
        <svg class="animate-pulse h-80 w-full" viewBox="0 0 73 88" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<path d="M4 0H69V75C69 77.7614 66.7614 80 64 80H9C6.23858 80 4 77.7614 4 75V0Z" fill="#E1E1E1"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="73" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
    </div>
</template>

<script>

import { mapState } from 'vuex'

    export default {
        name: "ListsLoaderComponent",
        computed: {
            ...mapState('lists', {
                listsLoader: state => state.listsLoader
            })
        }
    }
</script>

<style scoped>

</style>