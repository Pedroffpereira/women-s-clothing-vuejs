<script>
export default {
    data() {
        return {
            inputString: ''
        }
    },
    watch: {
        inputString(value) {
            this.$emit('inputSearch', value)
        }
    }
}
</script>
<template>
    <div class="d-flex">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" v-model="inputString">
    </div>
</template>
<style scoped>
* {
    height: 24px;
    font-size: 1rem;
}

svg {
    margin-right: 10px;
}



input {
    width: auto;
    transition: all 1s;
    border: 0px;
    border-bottom: 1px solid;
}

</style>