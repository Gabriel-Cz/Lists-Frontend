<template>
    <div>
        <div class="container flex flex-col justify-center">
            <div class="text-center">
                <div class="my-2 font-display text-sm">
                    <i>Compras, cena, regalos...</i>
                </div>
                <div class="my-4 font-display text-lg">
                    Crea y comparte listas de la manera mas simple.
                </div>
                <div class="lg:mt-5">
                    <img src="../assets/svg/AnimationComponentImage.png" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "TheAnimationComponent",
        components: {
        },
        data: () => ({
            list_model: {
                listTitle: "Compras Super",
                listItems: ['Arroz Integral', 'Leche de Almendras', 'Leche entera', 'Filete de Pescado', 'Queso Feta', 'Queso Parmesano', 'Pan integral', 'Agua Mineral']
            }
        })
    }
</script>

<style scoped>

.sphere-1{
    width: 50px;
    height: 300px;
    background: rgb(123, 123, 126);
}

.sphere-2{
    width: 50px;
    background: rgb(98, 98, 187);
}

.sphere-3{
    width: 50px;
    background: rgb(255, 102, 0);
}

</style>