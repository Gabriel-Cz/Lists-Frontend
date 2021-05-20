<template>
    <div>
        <div class="flex justify-center">
            <div class="">
                <FormRegisterSubmitButton :submit="submit" class="m-2" />
            </div>
        </div>
    </div>
</template>

<script>

import FormRegisterSubmitButton from '@/components/Buttons/FormRegisterSubmitButton';

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