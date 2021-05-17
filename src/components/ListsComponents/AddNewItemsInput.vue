<template>
    <div class="flex w-11/12 md:w-1/2">
        <input 
          v-model="inputModel" 
          type="text" 
          placeholder="Agregar objetos" 
          class="border-b-1 border-gray-400 bg-transparent ml-2 p-3 w-full focus:outline-none font-extralight" 
        />
        <span @click="addNewItems(id)" class="mt-2 text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </span>
     </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
    export default {
        name: "UpdateListInput",
        computed: {
            ...mapState('lists', {
                newItems: state => state.updateListInput.newItems,
                id: state => state.listData._id
            }),
            inputModel: {
                get() {
                    return this.newItems;
                },
                set(value) {
                    this.setNewItems(value);
                }
            }
        },
        methods: {
            ...mapMutations('lists', ['setNewItems']),
            ...mapActions('lists', ['addNewItems'])
        }
    }
</script>
