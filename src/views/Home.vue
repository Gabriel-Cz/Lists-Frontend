<template>
  <div class="home">
    <div style="height: 200px;"></div>
    <TheFormComponent></TheFormComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import TheFormComponent from '@/components/TheFormComponent.vue'

export default {
  name: 'Home',
  components: {
    TheFormComponent
  }
}
</script>
