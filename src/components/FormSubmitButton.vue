<template>
    <div>
        <button @click="$route.name === 'Login' ? login() : signUp()" class="
          border text-blue-300 border-blue-300 
          hover:border-2 hover:text-white hover:border-blue-400 hover:bg-blue-400 py-2 px-4 
          tracking-widest bg-transparent shadow-none font-display font-semibold text-sm 
          transition duration-500 ease-in-out"
        >
           {{$props.submitTo}}
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
