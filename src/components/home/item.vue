<script>
import itemRating from './item/itemRating.vue'
import itemName from './item/itemName.vue'
import itemPrice from './item/itemPrice.vue'
import itemheader from './item/itemHeader.vue'
import itembutton from './item/itembutton.vue'
export default {
    components: {
        itemRating,
        itemPrice,
        itemheader,
        itemName,
        itembutton
    },
    props: {
        product: Object
    },
}
</script>

<template>
    <router-link class="nav-link" :to="`/item/${product.id}`">
        <div class="item mb-5 mx-auto" v-on:click="onClick">
            <itemheader :image="product.image" />
            <itemName :name="product.name.substring(0, 30)" />
            <itemPrice :price="product.price" />
            <itemRating :stars="product.rating" />
        </div>
    </router-link>
</template>
<style scoped >
.item {
    width: fit-content;
}

.item>* {
    display: block;
}

.item .item small {
    font-size: .85em;
    margin-bottom: 0.5em;
    display: block;
    line-height: 1.3;
    opacity: .6;
}



.item .item-header {

    position: relative;
}

.item .item-header .cart-icon-hover {
    display: none;
    position: absolute;
    top: 10px;
    right: 10px;
}

.item .item-header .cart-icon-hover .text {
    display: none;
}

.item .item-header:hover .cart-icon-hover {
    display: block;
}

.item .item-header:hover .cart-icon-hover .cart-icon {
    border: 1px solid black;
    border-radius: 50%;
    background-color: white;
    padding: 5px;
}

.item .item-header:hover .cart-icon-hover .cart-icon:hover+.text {
    display: block;
    position: absolute;
    top: 0;
    right: 47px;
    width: 92px;
    padding: 5px;
    background: black;
    color: white;
}

.item .item-header:hover .cart-icon-hover .cart-icon:hover+.text::after {
    content: "";
    position: absolute;
    top: 50%;
    margin-top: -5px;
    right: -10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px;
    border-color: transparent transparent transparent black;
}
</style>