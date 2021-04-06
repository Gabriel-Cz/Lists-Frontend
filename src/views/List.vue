<template>
    <div>
        <UpdateListInput />
        <TheListModel 
          :listId="listData._id"
          :title="listData.list_title"
          :items="listData.list_items"
        />
        <DeleteListButton class="-mt-5" />
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import TheListModel from '@/components/TheListModel'
import UpdateListInput from '@/components/UpdateListInput'
import DeleteListButton from '@/components/DeleteListButton'

    export default {
        name: "List",
        components: {
            TheListModel,
            UpdateListInput,
            DeleteListButton
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