<script>
export default {
    props: {
        stars: Number
    }
}
</script>

<template>
    <div class="rating">
        <i class="fa-regular fa-star" v-for="i in stars"></i>
    </div>
</template>