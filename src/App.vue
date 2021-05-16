<template>
  <div id="app" class="bg-backgroundPageColor border-4 relative">
      <LoadingComponent />
      <body class="z-10 h-screen">
        <router-view />
      </body>
      <footer class="w-full pb-4 flex items-end justify-center text-center">
        <small class="text-gray-400">SharedLists ° 2020</small>
      </footer>
  </div> 
</template>

<script>

import LoadingComponent from '@/components/GenericsComponents/LoadingComponent'

export default {
  components: {
    LoadingComponent 
  }
}
</script>

