<template>
    <div>
        <div class="flex w-11/12 md:w-3/5">
        <input 
          v-model="inputModel" 
          type="text" 
          placeholder="Agregar objetos" 
          class="border-b-1 border-gray-400 bg-transparent ml-2 p-3 w-full focus:outline-none font-extralight" 
        />
        <span @click="addNewItems(id)">
            <div class="text-blue-50 bg-blue-400 mt-2 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </div>
        </span>
     </div>
     <div class="italic text-xs ml-5 text-gray-400">
         Puedes separar tus objetos con comas " , "
     </div>
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
