<template>
  <div id="app">
      <body  class="bg-backgroundPageColor h-screen">
        <router-view />
      </body>
      <footer class="w-full pb-4 flex items-end justify-center text-center">
        <small class="text-gray-400">SharedLists ° 2020</small>
        <em class="mx-5 underline">
          <router-link to="/about">
            about
          </router-link>
        </em>
      </footer>
  </div> 
</template>

