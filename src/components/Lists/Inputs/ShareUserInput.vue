<template>
    <div>
        <input v-model="inputModel" placeholder="usuraio a compartir"/>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
    export default {
        name: "ShareUserInput",
        computed: {
            ...mapState('lists', {
                sharedUser: state => state.sharedUser
            }),
            inputModel: {
                get() {
                    return this.sharedUser
                },
                set(value) {
                    this.setSharedUser(value);
                }
            }
        },
        methods: {
            ...mapMutations('lists', ['setSharedUser'])
        }
    }
</script>

<style scoped>

</style>