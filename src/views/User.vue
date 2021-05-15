<template>
    <div>
        <TheUserHeader />
        <router-view class="mt-10"></router-view>
    </div>
</template>

<script>

import TheUserHeader from '@/components/UserComponents/TheUserHeader';

    export default {
        name: "User",
        components: {
            TheUserHeader,
        },
        data: () => ({
            //
        }),
    }
</script>

<style scoped>
</style>