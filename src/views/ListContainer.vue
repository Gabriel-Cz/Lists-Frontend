<template>
    <div>
        <div class="
          absolute rounded-xl 
          z-20 lg:w-1/2 xl:w-3/5 2xl:w-1/2 lg:h-1/2 xl:h-1/2 
          top-1/4 sm:top-1/2 left-1/2 
          transform -translate-y-1/4 sm:-translate-y-1/2 -translate-x-1/2 
          bg-blue-300 bg-opacity-20 
          backdrop-filter backdrop-blur-3xl 
          flex justify-center align-items-center">
          <div class="
            lg:mt-12 xl:mt-16 xl:w-3/5 2xl:w-1/2
            p-5 lg:p-0
            ">
              <router-view v-slot="List" class="z-30">
                  <transition :name="transitionName">
                      <component :is="List.Component"></component>
                  </transition>
              </router-view>
              <ListFooter />
          </div>
        </div>
    </div>
</template>

<script>

import ListFooter from '@/components/ListsComponents/ListFooter';

    export default {
        name: "ListContainer",
        components: {
            ListFooter,
        },
        data: () => ({
            transitionName: ''
        }),
        methods: {
            closeModal() {
                this.$router.push({
                    name: "UserLists"
                })
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