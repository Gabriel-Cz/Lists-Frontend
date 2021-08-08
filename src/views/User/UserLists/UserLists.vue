<template>
    <div>
        <div class="container h-full mx-auto">
            <div class="grid grid-cols-12 sm:gap-7 xl:gap-16 mx-5 xl:mx-20">
                <div
                  class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-4 transition duration-500 ease-in-out transform hover:-translate-y-50 hover:scale-105"
                  v-for="list in listsData"
                  :key="list._id"
                >
                  <TheListModel 
                    :listId="list._id" 
                    :title="list.list_title" 
                    :items="list.list_items"
                    @click="toList(list._id)"
                  />
                </div>
            </div>
            <div v-if="showEmptyMessage" class="italic text-sm text-gray-400 text-center mx-5 pt-4 emptyTextMessage">No tienes listas por el momento...</div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

import TheListModel from '@/components/Lists/ListsModels/TheListModel';

    export default {
        name: "UserLists",
        components: {
            TheListModel,
        },
        created() {
            this.getLists();
        },
        computed: {
            ...mapState('lists', {
                listsData: state => state.listsData,
                listUpdateInput: state => state.listUpdateInput,
                loadingLists: state => state.loadingLists,
            }),

            showEmptyMessage() {
                return this.listsData === undefined ? true : false
            }
        },
        methods: {           
            ...mapActions('lists', ['getLists', 'getList', 'updateList']),

            toList(_id) {
                this.$router.push('/user/random/list/' + _id)
            },

            getListInfo(_id) {
                this.getList(_id)
            }
        }
    }
</script>

<style scoped>

.emptyTextMessage {
    animation: fadeIn 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

</style> 