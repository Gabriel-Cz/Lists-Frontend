<template>
    <div>
        <div class="flex justify-end -mt-5 xl:-mr-10">
            <button class="text-white text-sm md:text-base font-regular shadow-xl py-2 px-3 bg-secondary-main transition duration-500 ease-in-out hover:bg-secondary-hover mx-2 z-20" @click="submitList()">Crear Lista</button>
            <button class="text-white text-sm md:text-base font-regular shadow-xl py-2 px-3 bg-danger-main transition duration-500 ease-in-out hover:bg-danger-hover mx-2 z-20" @click="closeModal()">Cancelar</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
    export default {
        name: "NewListFooter",
        computed: {
            ...mapState('lists', {
                newListInput: state => state.newListInput,
            })
        },
        methods: {
            ...mapMutations('lists', ['cleanNewListInputs']),
            ...mapActions('lists', ['postList']),
            submitList() {
                const arrToDB = {
                    list_title: this.newListInput.title,
                    list_items: this.newListInput.items.split(','),
                }
                this.postList(arrToDB);
            },
            closeModal() {
                this.$router.push({
                    name: "UserLists"
                })
                this.cleanNewListInputs();
            }
        }
    }
</script>

<style scoped>

</style>