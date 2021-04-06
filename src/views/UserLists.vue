<template>
    <div>
            <div class="grid grid-cols-10">
                <div class="col-span-1 my-auto md:px-4">
                    <button class="bg-transparent m-3 shadow-none"><img src="../assets/svg/GoBackBtn.svg" /></button>
                </div>
                <div class="col-span-8">
                    <div class="grid grid-cols-3 gap-24 md:px-8">
                        <TheListModel 
                          class="transition duration-500 ease-in-out transform hover:-translate-y-50 hover:scale-105"
                          v-for="list in listsData"
                          :listId="list._id" 
                          :key="list.index"
                          :title="list.list_title" 
                          :items="list.list_items"
                          @click="toList(list._id)"
                        />
                    </div>
                </div>
                <div class="col-span-1 my-auto md:px-4">
                    <button class="bg-transparent m-3 shadow-none"><img src="../assets/svg/SeeMoreBtn.svg" /></button>
                </div>
            </div>
            <router-view></router-view>
    </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

import TheListModel from '@/components/TheListModel';

    export default {
        name: "UserLists",
        components: {
            TheListModel
        },
        data: () => ({
            newItems: '',
        }),
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