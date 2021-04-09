<template>
    <div id="List-Div-Wrapper">  
        <div id="list-card" class="w-full">
            <input class="py-2 px-2 font-body mb-2 w-full text-black bg-transparent border-b focus:outline-none border-gray-100" placeholder="Nombra tu Lista" v-model="newListInput.title" />
            <div class="font-body rounded-b-xl bg-gradient-to-t bg-gray-100  h-80 shadow-lg p-1 overflow-auto">
                <textarea v-model="newListInput.items" class="border-b-1 w-80 border-gray-400 bg-transparent ml-2 p-3 w-90 h-5/6 focus:outline-none font-extralight" placeholder="Que articulos?" />
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