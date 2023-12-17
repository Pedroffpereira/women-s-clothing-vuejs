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
                    email: '',
                    message: '',
                }
            }
        },

        methods:{
            setName(name){
                this.formContact.name = name
            },
            setSubject(subject){
                this.formContact.subject = subject
            },
            setEmail(email){
                this.formContact.email = email
            },
            setMessage(message){
                this.formContact.message = message
            }, 
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
                        <InputContact 
                            @input-name="setName"
                            @input-subject="setSubject"
                            @input-email="setEmail"
                            @input-message="setMessage"/>
                    </div>
                    <SubmitButton />
                </form>
            </div> 
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>