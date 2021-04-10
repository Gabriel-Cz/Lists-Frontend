<template>
    <div>       
        <div class="w-full px-6 py-3">
            <input 
              class="w-full rounded-md p-3 focus:outline-none inputShadow bg-transparent" 
              name="username" 
              type="text" 
              placeholder="Nombre de usuario" 
              v-model="InputOnTheStore.name"
            />
        </div>
        <div class="w-full px-6 py-3">
            <input 
              class="w-full rounded-md p-3 focus:outline-none inputShadow bg-transparent" 
              name="email" 
              type="email" 
              placeholder="Correo electronico" 
              v-model="InputOnTheStore.email"
            />
        </div>
        <div class="w-full px-6 py-3">
            <input 
              class="w-full rounded-md p-3 focus:outline-none inputShadow bg-transparent" 
              name="password" 
              type="password" 
              placeholder="Contraseña" 
              v-model="InputOnTheStore.password"
            />
        </div>
        <div class="w-full px-6 py-3">
            <input 
              class="w-full rounded-md p-3 focus:outline-none inputShadow bg-transparent" 
              name="confirmPassword" 
              type="password" 
              placeholder="Confirmar contraseña" 
              v-model="confirmPassword"
            />
        </div>
    </div>
</template>

<script>

import { mapActions, mapState } from 'vuex';

    export default {
        name: "TheRegisterFormData",
        data: () => ({
            confirmPassword: ""
        }),
        computed: {
            ...mapState('user', {
                newUserInput: state => state.newUserInput,
            }),
            InputOnTheStore: {
                get() {
                    return this.newUserInput;
                },
                set(value) {
                    this.setNewUserInput(value);
                },
            },
        },
        methods: {
            ...mapActions('user', ['setNewUserInput'])
        }
    }
</script>

<style scoped>

.divDot{
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: rgb(161, 161, 161);
}


</style>