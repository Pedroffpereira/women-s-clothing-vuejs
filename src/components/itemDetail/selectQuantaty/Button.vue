<template>
    <button class="h-100" v-on:click="$emit('clickSetQuantity')">
        <slot></slot>
    </button>
</template>
<style scoped>
button {
    background: none;
    border: none;
}
</style>