<template>
    <div class="justify-items-center mt-5 flex">
        <button class="mx-2 bg-yellow-400" @click="closeModal()">Regresar</button>
        <DeleteListButton class="mx-2" />
    </div>
</template>

<script>
import DeleteListButton from '@/components/Buttons/DeleteListButton';

    export default {
        name: "ListFooter",
        components: {
            DeleteListButton
        },
        methods: {
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