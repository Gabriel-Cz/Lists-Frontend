<template>
    <div>
        <input 
          v-model="inputModel" 
          type="text" 
          placeholder="Agregar objetos" 
          class="border-b-1 border-gray-400 bg-transparent ml-2 p-3 w-full focus:outline-none font-extralight" 
        />
     </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
    export default {
        name: "UpdateListInput",
        computed: {
            ...mapState('lists', {
                newItems: state => state.updateListInput.newItems
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
            ...mapMutations('lists', ['setNewItems'])
        }
    }
</script>
