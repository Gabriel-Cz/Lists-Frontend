<template>
    <div>
        <button @click="$route.name === 'Login' ? login() : signUp()" class="
          border text-white border-blue-400 bg-blue-400
          hover:border-2 hover:text-blue-400 hover:border-blue-400 hover:bg-transparent py-2 px-4 
          tracking-widest bg-transparent shadow-none font-display font-semibold text-sm spac
          transition duration-500 ease-in-out"
        >
           {{ submitTo }}
        </button>
    </div>
</template>

<script>

import { mapState, mapActions, mapGetters } from 'vuex'

    export default {
        name: "FormSubmitButton",
        props: {
            submitTo: {
                type: String,        
            }
        },
        computed: {
            ...mapState('user', {
                userInput: state => state.userInput,
                newUserInput: state => state.newUserInput,
            }),
            ...mapGetters('user', ['cleanUserInput'])
        },
        methods: {
            ...mapActions('user', ['loginUser', 'registerUser']),
            signUp() {
                this.registerUser()
            },
            login() {
                const user = {
                    email: this.userInput.email,
                    password: this.userInput.password
                }
                this.loginUser(user);
                this.cleanUserInput();
            },
        },
    }
</script>
