<template>
    <div>
        <div class="container mx-auto">
            <div 
         class="
          absolute rounded-xl 
          z-20 lg:w-1/2 xl:w-3/5 2xl:w-1/2 lg:h-1/2 xl:h-1/2 
          top-1/4 sm:top-1/2 left-1/2 
          transform -translate-y-1/4 sm:-translate-y-1/2 -translate-x-1/2 
          bg-green-200 bg-opacity-20 
          backdrop-filter backdrop-blur-3xl 
          flex justify-center align-items-center">
          <div class="
               lg:mt-12 xl:mt-16 xl:w-3/5 2xl:w-1/2
               p-5 lg:p-0
               ">
              <router-view v-slot="NewList">
                  <transition name="fadeIn" mode="out-in">
                      <component :is="NewList.Component"></component>
                  </transition>
              </router-view>
          </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewListContainer",
    }
</script>

<style scoped>

.fadeIn-enter, 
.fadeIn-leave-to{
    opacity: 0;
    transition: 0.3s ease-in-out;
}

.fadeIn-enter-active
.fadeIn-leave-to-active{
    opacity: 1;
    transition: 0.3s ease-in-out;
}

</style>