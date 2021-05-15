<template>
  <div>
      <div class="flex">
        <div>
            <span v-show="edit === true" @click="updateTitle(id)" class="mx-2 text-black">
                Done
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-6 w-6 text-green-600 bi bi-pencil" fill="none" 
                  viewBox="0 0 20 20" 
                  stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
            </span>
            <span v-show="edit === true" @click="edit = false" class="mx-2 text-black">
                Cancel
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 20 20 text-red-600" 
                  stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </span>
        </div>
        <div class="mt-5">
            <h1><input v-model="inputModel" class="w-full focus:outline-white bg-transparent text-center my-2 text-lg font-display"/></h1>
        </div>
      </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: "EditListTitleInput",
    props: {
        inputValue: String,
    },
    computed: {
        ...mapState('lists', {
            updateListInputTitle: state => state.updateListInput.newTitle
        }),
        inputModel: {
            get() {
                return this.updateListInputTitle;
            },
            set(value) {
                this.setNewTitle(value)
            }
        }
    },
    methods: {
        ...mapMutations('lists', ['setNewTitle'])
    }
}
</script>

<style>

</style>