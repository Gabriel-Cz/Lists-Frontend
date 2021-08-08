<template>
    <div>
        <TheNewListModel />
        <NewListFooter />
    </div>
</template>

<script>

import TheNewListModel from '@/components/Lists/ListsModels/TheNewListModel';
import NewListFooter from '@/components/Lists/Layout/NewListFooter';

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