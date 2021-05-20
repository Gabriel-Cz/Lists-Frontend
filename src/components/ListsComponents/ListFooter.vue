<template>
    <div class="flex justify-end -mt-5 xl:-mr-10">
        <button class="text-white text-sm md:text-base font-regular shadow-2xl py-2 px-3 transition ease-in-out 500ms hover:bg-yellow-400 mx-2 bg-yellow-300" @click="closeModal()">Regresar</button>
        <DeleteListButton class="mx-2" />
    </div>
</template>

<script>
import DeleteListButton from '@/components/Buttons/DeleteListButton';
import { mapMutations } from 'vuex';

    export default {
        name: "ListFooter",
        components: {
            DeleteListButton
        },
        methods: {
            ...mapMutations('lists', ['cleanUpdateListInputs']),
            closeModal() {
                this.$router.push({ 
                    name: "UserLists"
                })
                this.cleanUpdateListInputs();
            }
        }
    }
</script>

<style scoped>

</style>