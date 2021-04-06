<template>
    <div>
        <div class="flex justify-center">
            <div class="md:px-4 py-3 md:mr-2 text-xs"><a>Ya tienes Cuenta? <br/> Inicia Sesion ahora.</a></div>
            <div class="">
                <FormRegisterSubmitButton :submit="submit" class="m-2" />
            </div>
        </div>
    </div>
</template>

<script>

import FormRegisterSubmitButton from '@/components/FormRegisterSubmitButton';

    export default {
        name: "TheRegisterFormFooter",
        props: {
            submit: {
                type: Function
            }
        },
        components: {
            FormRegisterSubmitButton,
        },
        data: () => ({
            //
        }),
    }
</script>

<style scoped>

</style>