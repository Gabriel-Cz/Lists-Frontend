<template>
    <div>
        <div class="grid grid-cols-3 justify-center">
            <div class="col-span-5 justify-end mt-1 ml-3">
                <button class="bg-transparent font-display text-gray-300 hover:text-gray-500 shadow-none" @click="logOut()">Cerrar Sesion</button>
            </div>
            <div class="col-span-12 flex justify-center">
                <h1 class="p-4 px-8 border-b font-display text-gray-500 text-2xl text-shadow-md">Bienvenido {{ $route.params.id }}</h1>
            </div>
            <div class="col-span-12 mt-5 flex justify-center">
                <CreateNoteButton />
            </div>
        </div>
    </div>
</template>

<script>

import CreateNoteButton from '@/components/CreateNoteButton';
import { mapActions } from 'vuex';

    export default {
        name: "TheUserHeader",
        components: {
            CreateNoteButton
        },
        data: () => ({
            //
        }),
        props: {
            userName: {
                type: String,
                default: "This User Name"
            }
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