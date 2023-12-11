<script>
export default {
    props: {
        price: String,
    }
}
</script>
<template>
    <span class="price">{{ price }}€</span>
</template>

<style scoped>
.price {
    line-height: 1.3;
    margin-bottom: 0;
    font-weight: 700;
    margin-bottom: 0.5em;
    font-size: .9em;
}
</style>