<template>
    <div id="List-Div-Wrapper">  
        <div id="listCard" class="cursor-pointer">
            <div class="listCard-Title justify-center">
                <h1 class="listCard-title"> {{ $props.title }} </h1>
            </div>
            <div class="listCard-body">
                <ol class="p-6 font-body text-gray-500">
                    <li 
                      v-for="item in $props.items" 
                      :key="item.index" 
                      class="py-1 list-disc list-inside"                
                    >
                        {{ item }} 
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>
 
<script>

export default {
    name: "TheListModel",
    props: {
        listId: String,
        title: String,
        items: Array,
    },
}

</script>