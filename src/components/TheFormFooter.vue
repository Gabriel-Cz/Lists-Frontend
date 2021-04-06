<template>
    <div>
        <div class="flex justify-center">
            <div class="md:px-4 py-3 md:mr-2 text-xs" v-show="$route.name === 'Register'"><router-link :to="{name: 'Login'}">Ya tienes Cuenta? <br/>Inicia Sesion ahora.</router-link></div>
            <div class="md:px-4 py-3 md:mr-2 text-xs" v-show="$route.name === 'Login'"><router-link :to="{name: 'Register'}">Aun no tienes Cuenta? <br/>Registrate ahora.</router-link></div>
            <FormSubmitButton :submitTo="$route.name"/>
        </div>
    </div>
</template>

<script>

import FormSubmitButton from '../components/FormSubmitButton'

    export default {
        name: "TheFormFooter",
        components: {
            FormSubmitButton
        },
    }
</script>

<style scoped>

</style>