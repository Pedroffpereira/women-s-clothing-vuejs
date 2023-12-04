<template>
    <div class="item">
        <div class="item-header">
            <img src="https://fakeimg.pl/248x248/" alt="">
            <div class="cart-icon">
                <span class="item"><i class="fa-solid fa-cart-shopping"></i>
                </span>
                <span class="hover">
                    add to card
                </span>
            </div>
        </div>
        <span class="title">Basic Gray Jeans</span>
        <small>Women</small>
        <span class="price">$150.00</span>
        <div class="rating"><i class="fa-regular fa-star"></i>

        </div>
    </div>
</template>
<style scoped >
.item>* {
    width: 100%;
    display: block;
}

.item .title {
    font-size: 1em;
    font-weight: bold;
    color: black;
}

.item small {
    font-size: .85em;
    margin-bottom: 0.5em;
    display: block;
    line-height: 1.3;
    opacity: .6;
}

.item .price {
    line-height: 1.3;
    margin-bottom: 0;
    font-weight: 700;
    margin-bottom: 0.5em;
    font-size: .9em;
}


.item .item-header {

    position: relative;
}

.item .item-header .cart-icon {
    display: none;
}

.item .item-header .cart-icon .hover {
    display: none;
}

.item .item-header:hover .cart-icon {
    display: block;
    position: absolute;
    left: 75%;
    top: 10px;
}

.item .item-header:hover .cart-icon:hover .hover {
    display: block;
    position: absolute;
    top: -5px;
    left: -100px;
    color: white;
    background-color: black;
    padding: 5px 5px;
}

.item .item-header:hover .cart-icon:hover .hover::after {
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