<template>
    <div>          
        <div>
            <TheFormComponentNavbar />
            <form class="bg-bg-form-pattern rounded-3xl pb-2 pt-2 w-full border-l-2 border-b-2 shadow-md">
                <router-view class="mt-10"></router-view>
            </form>
            <button type="submit" @click="signUp()">Register</button>
            <TheFormFooter />
        </div>
    </div>
</template>

<script>

import TheFormComponentNavbar from '../components/TheFormComponentNavbar'
import TheFormFooter from '../components/TheFormFooter'

    export default {
        name: "TheForm",
        data: () => ({
            transitionName: "",
        }),
        components: {
            TheFormComponentNavbar,
            TheFormFooter
        },
        watch: {
            '$route' (to) {
                to.path === '/login' ? this.transitionName = 'slide-right' : this.transitionName = 'slide-left';
            },  
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