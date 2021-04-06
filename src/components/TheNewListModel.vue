<template>
    <div id="List-Div-Wrapper">  
        <div id="list-card">
            <input class="p-5 flex justify-center text-shadow-md font-light font-display" placeholder="Nombra tu Lista" v-model="newListInput.title" />
            <div class="font-body rounded-b-xl rounded-md bg-gray-100 h-80 shadow-lg p-1 overflow-auto">
                <textarea v-model="newListInput.items" class="border-b-1 border-gray-400 bg-transparent ml-2 p-3 w-5/6 h-5/6 focus:outline-none font-extralight" placeholder="Que articulos?" />
            </div>
        </div>
    </div>
</template>

<script>

import { mapMutations, mapState } from 'vuex'

    export default {
        name: "TheNewListModel",
        data: () => ({
            //
        }),
        computed:{ 
            ...mapState('lists', {
                newListInputFromStore: state => state.newListInput
            }),
            newListInput: {
                get() {
                    return this.newListInputFromStore
                },
                set(value) {
                    this.setInput(value)
                }
            }
        },
        methods: {
            ...mapMutations('lists', ['setInput'])
        }
    }
</script>

<style scoped>

</style>