<template>
    <div>
        <div class="absolute z-20 w-full h-full left-0 top-0 bg-black bg-opacity-40 flex justify-center align-items-center">
          <div class=" mt-10 grid grid-rows-2 grid-cols-2">
              <router-view v-slot="NewList" class="col-span-2">
                  <transition name="fadeIn">
                      <component :is="NewList.Component"></component>
                  </transition>
              </router-view>
              
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserNewListContainer",
        data: () => ({
        }),
    }
</script>

<style scoped>

.fadeIn-enter, 
.fadeIn-leave-to{
    opacity: 0;
    transition: all ease 0.5s;
}

.fadeIn-enter-active{
    opacity: 1;
}

</style>