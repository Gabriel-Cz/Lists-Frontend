<template>
  <div class="home">
    <div class="container mx-auto">
      <TheLogo class="md:pt-4 md:pl-4" />
      <div class="grid grid-rows-2 md:grid-rows-none md:grid-cols-2">
        <div class="row order-last md:col-span-1 md:order-first xl:pt-5 2xl:pt-5 w-full flex flex-col justify-center items-center">
          <div class="xl:py-5">
            <p class="font-thin text-center mt-10 xl:mt-0 3xl:mt-10 text-lg tracking-wide">Registrate y comienza a crear Listas.</p>
          </div>
          <TheForm class="w-full lg:w-9/12 xl:w-3/5 mt-10 xl:mt-5 2xl:mt-15 px-5 lg:px-0" />
        </div>
        <div class="row md:col-span-1 w-full flex justify-center items-center">
          <TheAnimationComponent />
        </div>      
      </div>
    </div>
  </div>
</template>

<script>
import TheLogo from '@/components/TheLogo'
import TheForm from '@/components/FormComponents/TheForm';
import TheAnimationComponent from '@/components/TheAnimationComponent';

export default {
  name: 'Home',
  components: {
    TheLogo,
    TheForm,
    TheAnimationComponent
  },
  data: () => ({
    transitionName: ''
  }),
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
  transition: all 0.3s ease;
}

/* .slide-right-enter-active,
.slide-right-leave-active{
  transition: all 0.3s ease;
} */

.slide-left-enter,
.slide-left-leave-to{
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.3s ease;
}

/*.slide-left-enter-active,
.slide-left-leave-active{
  transition: all 0.3s ease;
}*/
</style>
