<template>
    <div>
        <div class="md:grid md:grid-cols-2 justify-items-center">
            <div class="md:col-span-2 w-full">
                <div class="container grid grid-cols-2 md:-mt-20 md:flex md:flex-wrap">
                    <img class="" src="../assets/svg/big-sphere.svg" />            
                    <img class="md:ml-40 pl-10" src="../assets/svg/small-sphere.svg" />
                </div>
            </div>
            <div class="text-center -mt-24 md:col-span-2 md:-mt-80 md:flex md:flex-wrap md:content-center md:mr-10">
                <h1 class="text-xl font-regular text-shadow-lg md:tracking-wide md:text-2xl" >Crea Listas sencilas en instantes.</h1>
            </div>
            <div class="md:col-span-2 mt-10 md:-mt-20 md:mr-10">
                <div class="container">
                    <img class=" " src="../assets/svg/AnimationComponentImage.png" />
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