<template>
    <div>
        <div class="grid grid-cols-12">
            <!--
            <div class="col-span-1 my-auto md:px-4">
                <button class="bg-transparent m-3 shadow-none"><img src="../assets/svg/GoBackBtn.svg" /></button>
            </div>
            -->
            <div class="col-span-7">
                <div class="grid lg:grid-cols-3 xl:grid-cols-4 gap-15">
                    <TheListModel 
                      class="lg:col-span-4 xl:col-span-2 transition duration-500 ease-in-out transform hover:-translate-y-50 hover:scale-105"
                      v-for="list in listsData"
                      :listId="list._id" 
                      :key="list.index"
                      :title="list.list_title" 
                      :items="list.list_items"
                      @click="toList(list._id)"
                    />
                </div>
            </div>
            <!--
            <div class="col-span-1 my-auto md:px-4">
                <button class="bg-transparent m-3 shadow-none"><img src="../assets/svg/SeeMoreBtn.svg" /></button>
            </div>
            -->
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