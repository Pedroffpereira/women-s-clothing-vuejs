<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();
</script>
<template>
    <button type="button" class="btn btn-success fw-semibold" id="return-to-shop-button" @click="$router.push('/')">RETURN TO SHOP</button>
</template>

<style scoped>
#return-to-shop-button {
    border-radius: 4px;
    padding: 0.7rem 1.5rem;
}
</style>