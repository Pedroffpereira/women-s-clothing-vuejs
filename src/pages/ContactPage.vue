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
                },

                nameValid:true,
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

            validateName(){
                const nameRegex = /^[a-zA-Z-ÖØ-öø-ÿÇç ]{3,30}$/;
                this.nameValid = nameRegex.test(this.formContact.name);
                this.nameValid = nameRegex.test(this.formContact.subject);
            },

            submitForm(){
                
                this.validateName()

                if (this.nameValid){
                    console.log('Form is valid')
                }
                else{
                    console.log('Form is not valid')
                }


                /*const nameIsValid = this.formContact.name.length > 0
                const subjectIsValid = this.formContact.subject.length > 0
                const emailIsValid = this.formContact.email.length > 0
                const messageIsValid = this.formContact.message.length > 0
                
                const formIsValid = nameIsValid && subjectIsValid && emailIsValid && messageIsValid
                
                if (formIsValid){
                    console.log('Form is valid')
                }
                else{
                    console.log('Form is not valid')
                }*/
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
                        <InputContact 
                            @input-name="setName"
                            @input-subject="setSubject"
                            @input-email="setEmail"
                            @input-message="setMessage"/>
                    </div>
                    <SubmitButton @click.prevent="submitForm"/>
                </form>
            </div> 
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>