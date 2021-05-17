<template>
    <div>
        <div class="container h-full mx-auto">
            <div class="grid grid-cols-12 sm:gap-7 xl:gap-16 mx-5 xl:mx-20">
                <ListsLoaderComponent v-for="item in 3" :key="item.index" class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-4 transition duration-500 ease-in-out transform hover:-translate-y-50 hover:scale-105"/>
                <div
                  class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-4 transition duration-500 ease-in-out transform hover:-translate-y-50 hover:scale-105"
                  v-for="list in listsData"
                  :key="list.index"
                >
                <TheListModel 
                  :listId="list._id" 
                  :title="list.list_title" 
                  :items="list.list_items"
                  @click="toList(list._id)"
                />
                </div>
            </div>
            <div v-show="showEmptyMessage" class="italic text-lg text-center mx-5 pt-4 emptyTextMessage">No tienes listas por el momento...</div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

import { mapActions, mapGetters, mapState } from 'vuex'

import TheListModel from '@/components/ListsModels/TheListModel';
import ListsLoaderComponent from '@/components/GenericsComponents/ListsLoaderComponent';

    export default {
        name: "UserLists",
        components: {
            TheListModel,
            ListsLoaderComponent
        },
        created() {
            this.$store.dispatch('lists/getLists');
        },
        computed: {
            ...mapState({
                listsData: state => state.listsData,
                listUpdateInput: state => state.listUpdateInput,
                loadingLists: state => state.loadingLists,
            }),
            ...mapGetters('lists', ['counLists']),
            showEmptyMessage() {
                return this.listsData === undefined || this.listsData[0] === undefined ? true : false
            }
        },
        methods: {           
            ...mapActions('lists', ['getList', 'updateList']),
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