<template>
    <div id="List-Div-Wrapper">  
        <div id="listCard" class="cursor-pointer">
            <div class="grid justify-items-center">
                <div class="flex">
                    <h1 class="listCard-title" v-show="edit === false"> {{ $props.title }} </h1>
                    <span v-show="edit === false" class="justify-self-end" @click="edit = !edit">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          class="bi bi-pencil text-white h-6 w-6" 
                          viewBox="0 0 20 20">
                           <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                        </svg>
                    </span>
                    <EditListTitleInput :inputValue="$props.title" v-show="edit" />
                </div>
            </div>
            <div class="listCard-body">
                <AddNewItemsInput />
                <div class="h-4/6 max-w-full flex overflow-y-auto">
                    <ol class="p-6 h-full font-body text-gray-500">
                    <li 
                      v-for="item in $props.items" 
                      :key="item.index" 
                      class="py-1 list-disc list-inside"                
                    >
                        {{ item }} 
                    </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EditListTitleInput from '@/components/ListsComponents/EditListTitleInput'
import AddNewItemsInput from '@/components/ListsComponents/AddNewItemsInput'
import { mapActions, mapState } from 'vuex'

    export default {
        name: 'TheListEditModel',
        data: () => ({
            edit: false,
        }),
        components: {
            EditListTitleInput,
            AddNewItemsInput,
        },
        props: {
        listId: String,
        title: String,
        items: Array,
        },
        computed: {
            ...mapState('lists', {
                id: state => state.listData._id
            })
        },
        methods: {
            ...mapActions('lists', ['updateTitle'])
        }
    }
    
</script>

<style scoped>

</style>