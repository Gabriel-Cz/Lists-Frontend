<template>
    <div>
        <div class="w-full px-6 py-3">
            <input 
              class="w-full rounded-md p-3 focus:outline-none focus:.divDot:bg-blue-300 inputShadow bg-transparent"
              v-model="inputOnTheStore.email" 
              name="email" 
              type="email" 
              placeholder="Correo electronico" 
            />
        </div>
        <div class="w-full px-6 py-3 flex">
            <input 
              class="w-full rounded-md p-3 focus:outline-none focus:.divDot:bg-blue-300 inputShadow bg-transparent"
              v-model="inputOnTheStore.password" 
              name="password" 
              :type="showPassword ? 'text' : 'password' "
              placeholder="Contraseña" 
            />
            <i class="w-10 flex ml-2" @click="showPassword = !showPassword">
                <svg v-if="showPassword === false" xmlns="http://www.w3.org/2000/svg" className="text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                 </svg>
                 <svg v-else xmlns="http://www.w3.org/2000/svg" className="text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                 </svg>
            </i>
        </div>
    </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

    export default {
        name: "TheLoginFormData ",
        data: () => ({
            showPassword: ""
        }),
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