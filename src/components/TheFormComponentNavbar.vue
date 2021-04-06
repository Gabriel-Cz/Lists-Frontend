<template>
    <div>
        <div>
            <span>
                <router-link class="text-gray-400 px-1 py-2 mx-1" to="/">
                  Registrarse
                </router-link>
            </span>
            <span>
                <router-link class="text-gray-400 py-2 mx-2" to="/login" >
                  Iniciar Sesion
                </router-link>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TheFormComponentNavbar",
        props: [
            //
        ],
        data: () => ({
            isTrue: true,
        })
    }
</script>

<style scoped>

.router-link-exact-active {
    color: rgba(0,0,0,0.7);
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.75rem;
    text-shadow: 0px 3px 5px rgba(128, 128, 128, 0.5);
}

</style>