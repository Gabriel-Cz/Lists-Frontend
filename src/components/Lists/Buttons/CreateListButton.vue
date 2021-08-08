<template>
    <div>
        <router-link to="/user/:id/new-list">
          <button class="bg-secondary-main hover:bg-secondary-hover transition duration-500 ease-in-out transform hover:-translate-y-50 hover:scale-105 text-lg px-5 py-3 shadow-md">
            Crear Lista
          </button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "CreateListButton",
    }
</script>

