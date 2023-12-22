<script>
    export default {
        data(){
            return {
                inputString:''
            }
        },
        watch: {
            inputString(value){
                this.$emit('inputSearch', value)
            }
        }
    }
</script>
<template>
    <div class="row">
        <div class="col-md-12">
            <input type="text" v-model="inputString">
        </div>
    </div>
</template>
<style scoped>
input {
    border: 0px;
    border-bottom: 1px solid;
}
</style>