<template>
  <div id="app" class="bg-backgroundPageColor relative">
      <body class="z-10 min-h-screen max-h-full">
        <router-view />
      </body>
      <footer class="w-full pb-4 flex items-end justify-center text-center">
        <small class="text-gray-400">SharedLists ° 2020</small>
      </footer>
  </div> 
</template>

<script>

export default {
  name: "App",
  metaInfo: {
    title: "SharedLists",
    titleTemplate: "%s | SharedLists"
  }
}

</script>

