<template>
    <div>             
        <div class="bg-bg-form-pattern rounded-3xl pb-2 pt-2 w-full formShadow">
            <TheFormComponentNavbar />
            <form class="mx-2 my-2 mt-5">
                <router-view v-slot="Form">
                  <transition :name="transitionName">
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
import TheFormComponentNavbar from '../components/TheFormComponentNavbar'
import TheFormFooter from '../components/TheFormFooter'

    export default {
        name: "TheForm",
        data: () => ({
          transitionName: ''
        }),
        components: {
            TheFormComponentNavbar,
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
  transform: translateX(-50px);
}

.slide-right-enter-active,
.slide-right-leave-active{
  transition: all 0.3s ease;
}

.slide-right-enter-active{
  transition-delay: 500ms;
}

.slide-left-enter,
.slide-left-leave-to{
  opacity: 0;
  transform: translateX(50px);
}

.slide-left-enter-active,
.slide-left-leave-active{
  transition: all 0.3s ease;
}
</style>