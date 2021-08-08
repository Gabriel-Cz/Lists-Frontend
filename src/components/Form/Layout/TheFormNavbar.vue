<template>
    <div>
        <div class="flex justify-center items-end mt-5 font-display py-2 mb-4">
            <span>
                <router-link class="text-gray-400 px-1 py-2 mx-2" to="/">
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
        name: "TheFormNavbar",
        data: () => ({
            isTrue: true,
        })
    }
</script>

<style scoped>

.router-link-exact-active {
    color: rgba(0,0,0,1);
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.75rem;
    border-radius: 2px;
    letter-spacing: 1px;
}

</style>