<script>
export default {
    props: {
        name: String,
    }
}
</script>

<template>
    <span class="title">{{ name }}</span>
</template>

<style scoped>
.title {
    font-size: 1em;
    font-weight: bold;
    color: black;
}
</style>