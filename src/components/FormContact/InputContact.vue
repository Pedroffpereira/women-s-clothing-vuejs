<template>
    <div>
        <label class="form-label">Name:</label>
        <input type="text" class="form-control" placeholder="Enter your name" v-bind:value="name" @input="$emit('input',$event.target.value)">
    </div>
    <div>
        <label class="form-label">Subject:</label>
        <input type="text" class="form-control" placeholder="Enter your subject" v-bind:value="subject">
    </div>
    <div>
        <label class="form-label">E-mail:</label>
        <input type="email" class="form-control" placeholder="Enter your email" v-model="email">
    </div>
    <div>
        <label class="form-label">Message:</label>
        <textarea class="form-control" placeholder="Enter your message" v-model="message"></textarea>
    </div>
</template>

<script>
    export default {
        props:{
            name: String,
            subject: String,
        }
    }
</script>

<style lang="scss" scoped>

</style>