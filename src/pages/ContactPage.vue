<script>
import InputContact from "../components/FormContact/InputContact.vue";
import SubmitButton from "../components/FormContact/SubmitButton.vue";
import TextAreaContact from "../components/FormContact/TextAreaContact.vue";

export default {
  components: {
    InputContact,
    SubmitButton,
    TextAreaContact
},

  data() {
    return {
      formContact: {
        name: "",
        subject: "",
        email: "",
        message: "",
      },

      errorText: {
        name: "",
        subject: "",
        email: "",
        message: "",
      },

      nameValid: false,
      subjectValid: false,
      emailValid: false,
      messageValid: false,

    };
  },

  methods: {
    setName(name) {
      this.formContact.name = name;
      this.validateName();
    },
    setSubject(subject) {
      this.formContact.subject = subject;
      this.validateSubject();
    },
    setEmail(email) {
      this.formContact.email = email;
      this.validateEmail();
    },
    setMessage(message) {
      this.formContact.message = message;
      this.validateMessage();
    },

    //Validation method for name and subject
    validateName() {
      const nameRegex = /^[a-zA-Z-ÖØ-öø-ÿÇç]{3}[a-zA-Z-ÖØ-öø-ÿÇç ]{0,27}$/;
      this.nameValid = nameRegex.test(this.formContact.name);

      if (this.nameValid) {
        this.errorText.name = "";
      } else {
        this.errorText.name = "Please enter a valid name";
      }
    },

    validateSubject() {
      const subjectRegex = /^[a-zA-Z-ÖØ-öø-ÿÇç]{3}[a-zA-Z-ÖØ-öø-ÿÇç ]{0,27}$/;
      this.subjectValid = subjectRegex.test(this.formContact.subject);

      if (this.subjectValid) {
        this.errorText.subject = "";
      } else {
        this.errorText.subject = "Please enter a valid subject";
      }
    },

    //Validation method for email
    validateEmail() {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      this.emailValid = emailRegex.test(this.formContact.email);

      if (this.emailValid) {
        this.errorText.email = "";
      } else {
        this.errorText.email = "Please enter a valid email";
      }
    },

    //Validation method for message
    validateMessage() {
      const messageRegex = /^.{10,150}$/;
      this.messageValid = messageRegex.test(this.formContact.message);

      if (this.messageValid) {
        this.errorText.message = "";
      } else {
        this.errorText.message = "Please enter a valid message";
      }
    },

    submitForm() {
      this.validateName();
      this.validateSubject();
      this.validateEmail();
      this.validateMessage();

      if (this.nameValid && this.emailValid && this.messageValid && this.subjectValid){
                    alert('Message sent')
                    formContact = {
                        name: "",
                        subject: "",
                        email: "",
                        message: "",
                    }
                }
                else{
                    alert('Form is not valid')
                }
    },
  },
};
</script>

<template>
  <div class="container py-5 my-5">
    <div class="row">
      <div class="col-md-6">
        <p><strong>Don't be a stranger</strong></p>
        <h2>You tell us. We listen</h2>
        <p>
          Feel free to get in touch with us. We are always open to discussing
          new projects, creative ideas or opportunities to be part of your
          visions.
        </p>
      </div>
      <div class="col-md-6 bg-light p-4">
        <form>
          <div class="mb-3">
            <InputContact
              :textError="errorText.name"
              label="Name:"
              placeholder="Enter your name"
              @inputText="setName"
            />
            <InputContact
              :textError="errorText.subject"
              label="Subject:"
              placeholder="Enter your subject"
              @inputText="setSubject"
            />
            <InputContact
              :textError="errorText.email"
              label="Email:"
              placeholder="Enter your email"
              @inputText="setEmail"
            />
            <TextAreaContact
              :textError="errorText.message"
              label="Message:"
              placeholder="Enter your message"
              @inputText="setMessage"
            />
          </div>
          <SubmitButton @click.prevent="submitForm" />
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
