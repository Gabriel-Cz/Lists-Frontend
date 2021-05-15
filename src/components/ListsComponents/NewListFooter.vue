<template>
    <div>
        <div class="flex justify-end -mt-5 xl:-mr-10">
            <button class="text-white font-regular py-2 px-3 bg-secondary-main transition ease-in-out 500ms hover:bg-secondary-hover mx-2" @click="submitList()">Crear Lista</button>
            <button class="text-white font-regular py-2 px-3 bg-danger-main transition ease-in-out 500ms hover:bg-danger-hover mx-2" @click="closeModal()">Cancelar</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
    export default {
        name: "NewListFooter",
        computed: {
            ...mapState('lists', {
                newListInput: state => state.newListInput
            })
        },
        methods: {
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
            }
        }
    }
</script>

<style scoped>

</style>