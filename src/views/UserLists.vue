<template>
    <div>
        <div class="container mx-auto">
            <div class="grid grid-cols-12 sm:gap-7 xl:gap-16 mx-5 xl:mx-20">
                <TheListModel 
                  class=" col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-4 transition duration-500 ease-in-out transform hover:-translate-y-50 hover:scale-105"
                  v-for="list in listsData"
                  :listId="list._id" 
                  :key="list.index"
                  :title="list.list_title" 
                  :items="list.list_items"
                  @click="toList(list._id)"
                />
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

import TheListModel from '@/components/ListsModels/TheListModel';

    export default {
        name: "UserLists",
        components: {
            TheListModel
        },
        created() {
            this.$store.dispatch('lists/getLists');
        },
        computed: {
            ...mapState({
                listsData: state => state.listsData,
                listUpdateInput: state => state.listUpdateInput
            })
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
</style> 