<template>
    <div class="bg-blue" @click="addSharedUser(id)">
        <button>Compartir Lista</button>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
    export default {
        name: "ShareButton",
        computed: {
            ...mapState('lists', {
                id: state => state.listData._id
            })
        },
        methods: {
            ...mapActions('lists', ['addSharedUser'])
        }
    }
</script>

<style scoped>

</style>