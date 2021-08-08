<template>
    <div class="container mx-auto">
        <div class="grid grid-cols-3 justify-center">
            <div class="col-span-5 justify-end mt-1 ml-3">
                <button 
                  @click="logOut()"
                  class="
                    bg-red-400 font-body font-bold px-2 text-xs mt-2 
                    hover:text-red-400 hover:bg-transparent border border-red-400 hover:shadow-none shadow-md">
                        Cerrar Sesion
                </button>
            </div>
            <div class="col-span-12 flex justify-center mt-2">
                <h1 class="p-4 px-8 font-display text-gray-500 text-2xl">Bienvenido {{ getUserName }}</h1>
            </div>
            <div class="col-span-12 mt-5 flex justify-center">
                <CreateListButton />
            </div>
        </div>
    </div>
</template>

<script>

import CreateListButton from '@/components/Lists/Buttons/CreateListButton';
import { mapActions, mapState } from 'vuex';

    export default {
        name: "TheUserHeader",
        components: {
            CreateListButton
        },
        computed: {
            ...mapState('user', {
                userName: state => state.userName
            }),
            getUserName() {
                return this.$route.params.username;
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