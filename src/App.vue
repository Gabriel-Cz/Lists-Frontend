<template>
  <div id="app" class="bg-backgroundPageColor border-4 relative">
      <div class="absolute z-20 top-0 left-0 w-full h-full bg-gray-200 opacity-50 backdrop-filter backdrop-blur-3xl grid place-items-center">
        <svg class="w-20 h-20 animation-spin" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<circle cx="16" cy="12" r="12" fill="#8DC3CA" fill-opacity="0.75"/>
</g>
<path d="M28 12C28 10.4241 27.6896 8.86371 27.0866 7.4078C26.4835 5.95189 25.5996 4.62902 24.4853 3.51472L16 12H28Z" fill="#6AABAB"/>
<defs>
<filter id="filter0_d" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
      <body class="z-10">
        <router-view />
      </body>
      <footer class="w-full pb-4 flex items-end justify-center text-center">
        <small class="text-gray-400">SharedLists ° 2020</small>
      </footer>
  </div> 
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('user', {
      loading: state => state.loading
    })
  },
}
</script>

