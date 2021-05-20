<template>
    <div>             
        <div class="bg-bg-form-pattern rounded-3xl pb-2 pt-2 w-full transitionHeight formShadow">
            <TheFormComponentNavbar />
            <form class="mx-2 my-2 mt-5 relative">
                <LoadingComponent />
                <router-view v-slot="Form">
                  <transition :name="transitionName" mode="out-in">
                    <component :is="Form.Component" />
                  </transition>
                </router-view>
            </form>
            <div v-show="message" class="transition fade-in-out duration-500 text-center justify-items-center text-sm text-red-900">
              <p>{{ message }}</p>
            </div>
            <TheFormFooter />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import TheFormComponentNavbar from '../FormComponents/TheFormComponentNavbar'
import LoadingComponent from '../GenericsComponents/LoadingComponent'
import TheFormFooter from '../FormComponents/TheFormFooter'

    export default {
        name: "TheForm",
        data: () => ({
          transitionName: ''
        }),
        components: {
            TheFormComponentNavbar,
            LoadingComponent,
            TheFormFooter
        },
        computed: {
          ...mapState('user', {
            message: state => state.message,
          })
        },
        watch: {
          '$route' (to) {
            to.path === '/login' ? this.transitionName = 'slide-right' : this.transitionName = 'slide-left';
          }
        }
    }
</script>

<style scoped>

.slide-right-enter,
.slide-right-leave-to{
  opacity: 0;
  transition: 250ms ease-in-out;
}

.slide-right-enter-active,
.slide-right-leave-active{
  transition: 250ms ease-in-out;
}

.slide-left-enter,
.slide-left-leave-to{
  transition: 250ms ease-in-out;
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active{
  transition: 250ms ease-in-out;
}
</style>