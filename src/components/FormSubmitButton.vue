<template>
    <div>
        <button @click="$route.name === 'Login' ? login() : signUp()" class="border text-blue-300 border-blue-300 hover:border-2 hover:text-blue-400 hover:border-blue-400 py-2 px-3 tracking-wider bg-transparent shadow-none">{{$props.submitTo}}</button>
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
