<template>
  <div>
      <h1><input v-model="inputModel" :placeholder="$props.placeholder" class="w-full focus:outline-white text-center my-2 text-lg font-display"/></h1>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: "EditListTitleInput",
    props: {
        placeholder: String,
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