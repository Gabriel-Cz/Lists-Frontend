<template>
    <div>
        <TheNewListModel/>
        <NewListFooter />
    </div>
</template>

<script>

import TheNewListModel from '@/components/TheNewListModel';
import NewListFooter from '@/components/NewListFooter';

    export default {
        name: "NewList",
        components: {
            TheNewListModel,
            NewListFooter,
        },
    }
</script>

<style scoped>



</style>