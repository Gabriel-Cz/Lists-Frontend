<template>
  <div class="home">
    <div class="container mx-auto">
      <TheLogo class="md:pt-4 md:pl-4" />
    <div class="grid grid-rows-2 md:grid md:grid-cols-2 place-items-center">
      <div class="row order-last md:col-span-1 md:order-first xl:pt-5 2xl:pt-5 w-full flex flex-col justify-center items-center">
        <div class="xl:py-5">
          <p class="font-thin text-center text-lg tracking-wide">Registrate y comienza a crear Listas.</p>
        </div>
        <TheForm class="w-full lg:w-7/12 xl:1/2 xl:mt-5 2xl:mt-15" />
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
import TheForm from '@/components/TheForm';
import TheAnimationComponent from '@/components/TheAnimationComponent';

export default {
  name: 'Home',
  components: {
    TheLogo,
    TheForm,
    TheAnimationComponent
  },
}
</script>

