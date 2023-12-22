<template>
    <div>
        <label class="form-label">Name:</label>
        <input type="text" 
            class="form-control" 
            placeholder="Enter your name"    
            @input="$emit('inputName',$event.target.value)">
    </div>
    <div>
        <label class="form-label">Subject:</label>
        <input type="text"
            class="form-control"
            placeholder="Enter your subject"
            @input="$emit('inputSubject',$event.target.value)">
    </div>
    <div>
        <label class="form-label">E-mail:</label>
        <input type="email"
            class="form-control" 
            placeholder="Enter your email"
            @input="$emit('inputEmail',$event.target.value)">  
    </div>
    <div>
        <label class="form-label">Message:</label>
        <textarea class="form-control" 
            placeholder="Enter your message"
            @input="$emit('inputMessage',$event.target.value)">
        </textarea>
    </div>
</template>

<script>
    export default {
 
    }
</script>

<style lang="scss" scoped>

</style>