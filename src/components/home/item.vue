<script>
import itemRating from './item/itemRating.vue'
import itemName from './item/itemName.vue'
import itemPrice from './item/itemPrice.vue'
export default {
    components: {
        itemRating,
        itemPrice,
        itemName
    },
    props:{
        product: Object
    }
}
</script>

<template>
    <div class="item">
        <div class="item-header">
            <img :src="product.image" alt="">
            <div class="cart-icon-hover">
                <span class="cart-icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                </span>
                <span class="text">
                    add to card
                </span>
            </div>
        </div>
        <itemName :name="product.name" />
        <itemPrice :price="product.price" />
        <itemRating :stars="product.rating" />
    </div>
</template>
<style scoped >
.item {
    width: fit-content;
}
.item img{
    width: 100%;
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