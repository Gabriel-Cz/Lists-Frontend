<template>
    <div>
        <div class="flex justify-center py-4 mx-6 md:mx-8 mt-5">
            <div class="mr-3 md:mr-4 mt-3 text-xs opacity-80 fadeInAnimation" v-show="$route.name === 'Register'"><router-link :to="{name: 'Login'}">Ya tienes Cuenta? <br/>Inicia Sesion ahora.</router-link></div>
            <div class="mr-3 md:mr-4 mt-3 text-xs opacity-80 fadeInAnimation" v-show="$route.name === 'Login'"><router-link :to="{name: 'Register'}">Aun no tienes Cuenta? <br/>Registrate ahora.</router-link></div>
            <div  class="mt-3 md:ml-3">
            <FormSubmitButton :submitTo="$route.name === 'Register'? 'Registrate' : 'Inicia Sesion' "/>
            </div>
        </div>
    </div>
</template>

<script>

import FormSubmitButton from '../Buttons/FormSubmitButton.vue';

    export default {
        name: "TheFormFooter",
        components: {
            FormSubmitButton
        },
    }
    
</script>

<style scoped>

.fadeInAnimation {
    animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

</style>