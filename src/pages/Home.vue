<script>
import itemList from '../components/home/itemList.vue'
import Header from '../components/header.vue'
export default {
    components: {
        itemList,
        Header,
    }

}

</script>

<template>
    <Header />
    <div class="container py-5 my-5">
        <h2 class="text-center">highlight</h2>
        <itemList />
    </div>
</template>