<template>
    <div>
        <TheNewListModel/>
        <button class="bg-secondary-main p-4 text-black" @click="submitList()">Submit List</button>
    </div>
</template>

<script>

import TheNewListModel from '@/components/TheNewListModel';
import { mapActions, mapState } from 'vuex';

    export default {
        name: "NewList",
        components: {
            TheNewListModel,
        },
        computed: {
            ...mapState('lists', {
                newListInput: state => state.newListInput
            }),
        },
        methods: {
            ...mapActions('lists', ['postList']),
            submitList() {
                const newListItemsArr = this.newListInput.newItems.split(',')
                const newListDB = {
                    list_title: this.newListInput.title,
                    list_items: newListItemsArr
                }
                this.postList(newListDB)
            },

            closeModal() {
                this.router.back()
            }
        }
    }
</script>

<style scoped>



</style>