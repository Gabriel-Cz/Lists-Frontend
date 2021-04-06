<template>
    <div>
        <div class="container">
            <TheListsCarousel />
        </div>
    </div>
</template>

<script>

import TheListsCarousel from '@/components/TheListsCarousel';

    export default {
        name: "TheUserListsContainer",
        components: {
            TheListsCarousel,
        },
        data: () => ({
            //
        }),
    }
</script>

<style scoped>

</style>