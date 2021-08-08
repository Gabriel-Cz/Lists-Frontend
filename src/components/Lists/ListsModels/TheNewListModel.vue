<template>
    <div id="List-Div-Wrapper">  
        <div id="list-card" class="w-full shadow-xl z-20">
            <input class="text-center py-2 px-2 font-body mb-2 w-full text-black bg-transparent border-b focus:outline-none" placeholder="Nombra tu Lista" v-model="newListInput.title" />
            <div class="font-body rounded-b-xl bg-gradient-to-t bg-gray-100 h-80 shadow-lg p-1 overflow-auto">
                <div class="h-5/6 ">
                    <textarea id="textArea" v-model="newListInput.items" class="h-full w-11/12 border-gray-400 bg-transparent ml-2 p-3 focus:outline-none font-extralight" placeholder="Que articulos?" />
                    <div class=" opacity-75 text-xs ml-5 text-gray-400">
                        Puedes separar tus objetos con comas " , "
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapMutations, mapState } from 'vuex'

    export default {
        name: "TheNewListModel",
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

#textArea {
    resize: none;
}

</style>