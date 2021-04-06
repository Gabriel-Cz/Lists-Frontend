<template>
  <div class="grid grid-cols-5 gap-6">
        <TheListModel
        v-for="lista in listas"
        :key="lista._id"
        :listTitle = lista.list_title
        :listItems = lista.list_items
      >
      </TheListModel>
  </div>
</template>

<script>

import TheListModel from '@/components/TheListModel';

export default {
    name: "TheListComponent",
    components: {
      TheListModel,
    },
    data: () => ({
      listas: [],
      lista: {},
    }),
    created() {
      this.getLists();
    },
    methods: {
      getLists() {
        this.axios.get('lists').then((response) => {
          this.listas = response.data;
        }).catch((e) => {
          console.log("error" + e);
        });
      },
    }
}
</script>

<style>

</style>