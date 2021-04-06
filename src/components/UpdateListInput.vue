<template>
    <div>
        <input v-model="inputModel" class="border-b-1 border-gray-400 bg-transparent ml-2 p-3 w-5/5 focus:outline-none font-extralight" type="text" placeholder="Agregar objetos" />
        <button class="z-10 shadow-none" type="submit" @click="addNewItems()">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="15.1531" y1="6.99854" x2="15.1531" y2="22.9985" stroke="#5B5B5B" stroke-width="2"/>
              <line x1="7.13904" y1="15.4993" x2="23.139" y2="15.4993" stroke="#5B5B5B" stroke-width="2"/>
             <circle cx="15" cy="15" r="14.5" stroke="black" stroke-opacity="0.5"/>
            </svg>
        </button>
     </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
    export default {
        name: "UpdateListInput",
        data: () => ({
            inputModel: ""
        }),
        computed: {
            ...mapState('lists', {
                listData: state => state.listData,
            }),
        },
        methods: {
            ...mapActions('lists', ['updateList']),
            addNewItems() {
                const id = this.$route.params.id;
                const arr = this.inputModel.split(',');
                const payload = {
                    id,
                    newItems: arr,
                }
                this.updateList(payload);
            }
        }
    }
</script>
