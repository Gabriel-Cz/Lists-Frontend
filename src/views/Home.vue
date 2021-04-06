<template>
  <div class="home">
    <TheLogo class="md:pt-4 md:pl-4" />
    <div class="grid grid-rows-2 md:grid md:grid-cols-5 justify-items-center">
      <div class="row md:col-span-2 order-last md:order-first w-full">
        <div class="md:mt-10">
          <div class="py-10 md:pl-6">
            <p class="font-thin text-center text-lg tracking-wide">Registrate y comienza a crear Listas.</p>
          </div>
          <div class="md:mx-20 mx-5">
            <TheForm />
          </div>
        </div>
      </div>
      <div class="row md:col-span-3 w-full">
        <TheAnimationComponent />
      </div>      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
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

