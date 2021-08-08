<template>
  <div>
        <div class="flex justify-items-center">
            <input v-model="inputModel" :placeholder="listTitle" class="w-full listCard-title focus:outline-none bg-transparent text-center"/>
            <div class="flex">
                <span @click="updateTitle(id)" class="mx-2 text-green-400 cursor-pointer">
                <div class="bg-green-500 text-white p-1 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </div>
            </span>
            <span @click="editTitle(false)" class="mx-2 cursor-pointer">
                <div class="bg-red-400 text-white p-1 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </span>
            </div>
        </div>
  </div>
</template>

<script>

import { mapMutations, mapState, mapActions } from 'vuex'

export default {
    name: "InputEditTitle",
    props: {
        inputValue: String,
    },
    computed: {
        ...mapState('lists', {
            updateListInputTitle: state => state.updateListInput.newTitle,
            id: state => state.listData._id,
            listTitle: state => state.listData.list_title,
        }),
        inputModel: {
            get() {
                return this.updateListInputTitle;
            }, 
            set(value) {
                return this.setNewTitle(value);
            }
        }
    },
    methods: {
        ...mapMutations('lists', ['setNewTitle']),
        ...mapActions('lists', ['editTitle', 'updateTitle'])
    }
}
</script>

<style>

</style>