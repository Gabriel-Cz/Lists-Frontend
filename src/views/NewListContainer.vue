<template>
    <div>
        <div 
         class="
          absolute rounded-xl 
          z-20 xl:w-2/5 xl:h-3/5 
          top-1/2 left-1/2 
          transform -translate-y-1/2 -translate-x-1/2 
          bg-gray-300 bg-opacity-50 
          backdrop-filter backdrop-blur-3xl 
          flex justify-center align-items-center">
          <div class="
               xl:mt-20 xl:w-1/2
               p-5
               ">
              <router-view v-slot="NewList">
                  <transition name="fadeIn" mode="out-in">
                      <component :is="NewList.Component"></component>
                  </transition>
              </router-view>
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