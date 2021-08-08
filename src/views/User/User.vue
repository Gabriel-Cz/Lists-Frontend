<template>
    <div>
        <TheUserHeader />
        <ErrorAlert v-if="alert" :message="alert" />
        <router-view class="mt-10"></router-view>
    </div>
</template>

<script>

import TheUserHeader from '@/components/User/UserHeader/TheUserHeader.vue';
import ErrorAlert from '@/components/Alerts/ErrorAlert.vue';

import { mapActions, mapState } from 'vuex';

    export default {
        name: "User",
        components: {
            TheUserHeader,
            ErrorAlert
        },
        computed: {
            ...mapState('lists', {
                alert: state => state.listsError
            })
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