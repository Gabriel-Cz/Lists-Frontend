<template>
    <div>
        <TheListEditModel 
          :listId="listData._id"
          :title="listData.list_title"
          :items="listData.list_items"
        />
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import TheListEditModel from '@/components/Lists/ListsModels/TheListEditModel.vue'

    export default {
        name: "List",
        components: {
            TheListEditModel,
        },
        created(){
            this.genAndSetList()
        },
        computed: {
            ...mapState('lists', {
                listData: state => state.listData
            })
        },
        methods: {
            ...mapActions('lists', ['getList']),
            genAndSetList() {
                let listId = this.$route.params.id
                return this.getList(listId);
            }
        }
    }
</script>

<style scoped>

</style>