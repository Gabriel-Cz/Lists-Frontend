<template>
    <div class="container mx-auto">
        <div class="grid grid-cols-3 justify-center">
            <div class="col-span-5 justify-end mt-1 ml-3">
                <button class="bg-transparent font-display text-gray-400 hover:text-gray-600 shadow-none" @click="logOut()">Cerrar Sesion</button>
            </div>
            <div class="col-span-12 flex justify-center">
                <h1 class="p-4 px-8 border-b font-display text-gray-500 text-2xl text-shadow-md">Bienvenido {{ $route.params.username }}</h1>
            </div>
            <div class="col-span-12 mt-5 flex justify-center">
                <CreateListButton />
            </div>
        </div>
    </div>
</template>

<script>

import CreateListButton from '@/components/Buttons/CreateListButton';
import { mapActions, mapState } from 'vuex';

    export default {
        name: "TheUserHeader",
        components: {
            CreateListButton
        },
        computed: {
            ...mapState('user', {
                userName: state => state.userName
            })
        },
        methods: {
            ...mapActions('user', ['signOut']),
            logOut() {
                this.signOut();
            }
        }
    }
</script>

<style scoped>

</style>