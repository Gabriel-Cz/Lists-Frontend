<template>
    <div>
        <div class="justify-items-center mt-5">
            <button class="text-white bg-secondary-main mx-2" @click="submitList()">Crear Lista</button>
            <button class="text-white bg-danger-main mx-2" @click="closeModal()">Cancelar</button>
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