<template>
    <div>
        <div class="absolute rounded-lg z-20 w-2/5 h-1/2 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-black bg-opacity-10 backdrop-filter backdrop-blur-3xl flex justify-center align-items-center">
          <div class="mt-5 w-1/2">
              <router-view v-slot="NewList">
                  <transition name="fadeIn" mode="fade-in">
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
    transition: all ease;
    animation: fadeIn 2s;
    animation-delay: 1s;
}

.fadeIn-enter-active{
    opacity: 1;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }
    100% {
        opacity: 1;
        transform: translate(-50, -50);
    }
}

</style>