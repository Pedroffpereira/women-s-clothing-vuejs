<script setup>
import Name from './Name.vue'
import Price from './Price.vue'
import Image from './Image.vue'
defineProps({
    item : {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="d-flex gap-4 align-items-center">
        <Image :src="item.image" :alt="item.name"></Image>
        <div class="d-flex flex-column">
            <Name :name="item.name"></Name>
            <Price :price="item.price"></Price>
        </div>
    </div>
</template>