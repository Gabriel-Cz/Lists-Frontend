<template>
    <div>
        <div class="w-full px-6 py-3">
            <input 
              class="w-full rounded-md shadow-inner p-3 focus:outline-none focus:.divDot:bg-blue-300"
              v-model="inputOnTheStore.email" 
              name="email" 
              type="email" 
              placeholder="Correo electronico" 
            />
        </div>
        <div class="w-full px-6 py-3">
            <input 
              class="w-full rounded-md shadow-md p-3 focus:outline-none focus:.divDot:bg-blue-300"
              v-model="inputOnTheStore.password" 
              name="password" 
              type="password" 
              placeholder="Contraseña" 
            />
        </div>
    </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

    export default {
        name: "TheLoginFormData ",
        computed: {
            ...mapState('user', {
                userInput: state => state.userInput
            }),
            inputOnTheStore: {
                get() {
                    return this.userInput;
                },
                set(value) {
                    this.setUserInput(value)
                }
            }
        },
        methods: {
            ...mapActions('user', ['setUserInput'])
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