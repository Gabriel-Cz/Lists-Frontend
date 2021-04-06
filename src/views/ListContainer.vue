<template>
    <div>
        <div class="absolute z-20 w-full h-full left-0 top-0 bg-gray-300 bg-opacity-75 flex justify-center align-items-center">
          <div class="grid grid-cols-12 grid-rows-2">
              <router-view v-slot="List" class="col-span-4 z-30 row-span-1">
                  <transition :name="transitionName">
                      <component :is="List.Component"></component>
                  </transition>
              </router-view>
              <div class="row-span-1">
                 <button class="bg-secondary-main" @click="toBack()">Regresar</button>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ListContainer",
        data: () => ({
            transitionName: ''
        }),
        methods: {
            toBack() {
                this.$router.back();
            }
        },
        watch: {
            '$route'(to) {
                return to.name ? this.transitionName = 'openList' : 'closeList'
            }
        }
    }
</script>

<style scoped>

.openList {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.3s ease;
}

/* .openList-enter-active,
.openList-leave-active{
  
}

.closeList-enter,
.closeList-leave-to{
  opacity: 0;
  transform: translateX(50px);
}

.closeList-enter-active,
.closeList-leave-active{
  transition: all 0.3s ease;
} */
</style>