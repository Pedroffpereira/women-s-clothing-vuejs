<script>
    export default {
        data() {
            return {
                selectQuantity: this.quantity,
            }
        },
        props: {
            quantity: 0,
        },
        watch:{
            quantity: function(val){
                this.selectQuantity = val
            },
            selectQuantaty: function(val){
                this.$emit('inputQuantaty', val);
            }
        },
    }
</script>
<template>
    <input type="text" v-model="selectQuantity" class="h-100">
</template>