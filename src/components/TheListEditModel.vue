<template>
    <div id="List-Div-Wrapper">  
        <div id="listCard" class="cursor-pointer">
            <div class="grid justify-items-center">
                  <span v-show="edit === false" class="justify-self-end" @click="edit = edit ? false : true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg>
                  </span>
                  <div class="flex justify-self-end">
                    <span v-show="edit === true" @click="updateTitle(id)" class="mx-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
                         <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                       </svg>
                    </span>
                    <span v-show="edit === true" @click="edit = false" class="mx-2">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                         <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                       </svg>
                    </span>
                  </div>
                <h1 class="listCard-title" v-show="edit === false"> {{ $props.title }} </h1>
                <EditListTitleInput :placeholder="$props.title" v-show="edit" />
            </div>
            <div class="listCard-body">
                <div class="flex w-full">
                    <AddNewItemsInput />
                    <button @click="addNewItems(id)" class="w-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </button>
                </div>
                <ol class="p-6 font-body text-gray-500">
                    <li 
                      v-for="item in $props.items" 
                      :key="item.index" 
                      class="py-1 list-disc list-inside"                
                    >
                        {{ item }} 
                    </li>
                </ol>
            </div>
            <ShareUserInput />
            <ShareButton />
        </div>
    </div>
</template>

<script>
import EditListTitleInput from '@/components/EditListTitleInput'
import AddNewItemsInput from '@/components/AddNewItemsInput'
import ShareUserInput from '@/components/ShareUserInput'
import ShareButton from '@/components/ShareButton'
import { mapActions, mapState } from 'vuex'

    export default {
        name: 'TheListEditModel',
        data: () => ({
            edit: false,
        }),
        components: {
            EditListTitleInput,
            AddNewItemsInput,
            ShareUserInput,
            ShareButton
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
            ...mapActions('lists', ['updateTitle', 'addNewItems'])
        }
    }
    
</script>

<style scoped>

</style>