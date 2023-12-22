<script>
export default {
    props: {
        image: String,
    }
}
</script>

<template>
    <div class="item-header">
        <img :src="image" alt="">
    </div>
</template>

<style scoped>
.item img {
    width: 100%;
    object-fit: contain;
    height: 100px;
}
</style>