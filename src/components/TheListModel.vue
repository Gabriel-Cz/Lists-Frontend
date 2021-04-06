<template>
    <div id="List-Div-Wrapper">  
        <div id="listCard">
            <h1 class="listCard-title"> {{ $props.title }} </h1>
            <div class="listCard-body">
                <ul class="p-6 font-body">
                    <li 
                      v-for="item in $props.items" 
                      :key="item.index" 
                      class="p-1 cursor-pointer"                
                    >
                        {{ item }} 
                    </li>
                </ul>
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