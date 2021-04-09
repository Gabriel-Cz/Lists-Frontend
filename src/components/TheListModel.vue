<template>
    <div id="List-Div-Wrapper">  
        <div id="listCard" class="cursor-pointer">
            <h1 class="listCard-title"> {{ $props.title }} </h1>
            <div class="listCard-body">
                <UpdateListInput />
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
import UpdateListInput from '@/components/UpdateListInput'

export default {
    name: "TheListModel",
    components: {
        UpdateListInput
    },
    props: {
        listId: String,
        title: String,
        items: Array,
    },
}

</script>