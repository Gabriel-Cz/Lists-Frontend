<template>
    <div>
        <label> 
            <div class="relative -mb-2 -ml-1 rounded-full w-2.5 h-2.5 bg-gray-400"></div>
        </label>
        <input 
          class="w-full rounded-md shadow-md p-3 focus:outline-none" 
          :name="name" 
          :type="type" 
          :placeholder="placeholder" 
          v-model="modelData"
        />
    </div>
</template>

<script>
    export default {
        name: "TheInputComponent",
        props: {
            name: String,
            type: String,
            placeholder: String,
            model: String
        },
        data: () => ({
            modelData: $props.model,
        })
    }
</script>

<style scoped>

</style>