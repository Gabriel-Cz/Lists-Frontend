<template>
    <div class="justify-center mt-5 d-flex">
        <button @click="closeModal()">Regresar</button>
        <DeleteListButton />
    </div>
</template>

<script>
import DeleteListButton from '@/components/DeleteListButton';

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