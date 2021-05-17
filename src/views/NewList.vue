<template>
    <div>
        <TheNewListModel />
        <NewListFooter />
    </div>
</template>

<script>

import TheNewListModel from '@/components/ListsModels/TheNewListModel';
import NewListFooter from '@/components/ListsComponents/NewListFooter';

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