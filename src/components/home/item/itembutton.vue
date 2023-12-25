<script>
export default {
    props: {
        product: Object
    },
}
</script>
<template>
    <div class="w-100 d-flex">
        <button class="mx-auto" @click="this.$emit('addToCart', product)">
            add cart
        </button>
    </div>
</template>

<style setup>
button {
    background-color: aqua;
    border: 0px;
    padding: 10px;
}
button:hover {
    transition: all 0.5s;
    background-color: rgb(0, 153, 255);
}
</style>