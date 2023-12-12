<script>
    import InputContact from '../components/FormContact/InputContact.vue'
    import SubmitButton from '../components/FormContact/SubmitButton.vue'

    export default {
        components: {
            InputContact,
            SubmitButton,
        },
        data(){
            return{
                formContact:{
                    name: '',
                    subject: '',
                }
            }
        }
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <p><strong>Don't be a stranger</strong></p>
                <h2>You tell us. We listen</h2>
                <p>Feel free to get in touch with us. We are always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            </div>
            
            <div class="col-md-6 bg-light p-4" >
                <form>
                    <div class="mb-3">
                        <InputContact :name="formContact.name" @input="formContact.name = $event"/>
                        <p>{{ formContact.name }}</p>
                        <p>{{ formContact.subject }}</p>
                    </div>
                    <SubmitButton />
                </form>
            </div> 
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>