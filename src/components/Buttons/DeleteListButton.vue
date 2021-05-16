<template>
    <div>
        <button 
          class="bg-danger-main hover:bg-danger-hover transition duration-500 ease-in-out shadow-2xl py-2 px-3 z-20"
          @click="deleteTheList(listData._id)"
        >
            Eliminar Lista
        </button>
    </div>
</template>
  
<script>

import { mapActions, mapState } from 'vuex'

    export default {
        name: "DeleteListButton",
        computed: {
            ...mapState('lists', {
                listData: state => state.listData
            }),
        },
        methods: {
            ...mapActions('lists', ['deleteList']),
            deleteTheList(id) {
                this.deleteList(id)
            }
        }
    }
</script>

<style scoped>

</style>