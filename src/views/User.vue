<template>
    <div>
        <TheUserHeader />
        <router-view class="mt-10"></router-view>
    </div>
</template>

<script>

import TheUserHeader from '@/components/UserComponents/TheUserHeader';
import { mapActions } from 'vuex';

    export default {
        name: "User",
        components: {
            TheUserHeader,
        },
        methods: {
            ...mapActions('user', ['readToken'])
        },
        created() {
            this.readToken()
        }
    }
</script>

<style scoped>
</style>