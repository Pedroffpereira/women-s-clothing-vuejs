<script >
import itemList from '../components/home/itemList.vue'
import search from '../components/home/search.vue'
export default {
    data() {
        return {
            searchName: ''
        }
    },
    methods: {
        inputSearch: function (inputString) {
            this.searchName = inputString.toUpperCase();
        }
    },
    components: {
        search,
        itemList
    }
}
</script>

<template>
    <div class="container py-5 my-5">
        <h1 class="mb-5">Product List</h1>
        <div  class="mb-5">
            <search :searchName="searchName" @inputSearch="inputSearch" />
        </div>
        <div>
            <itemList :searchName="searchName" />
        </div>
    </div>
</template>