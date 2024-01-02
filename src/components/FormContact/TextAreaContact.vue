<template>
  <div>
    <label class="form-label">{{ label }} </label>
    <textarea
      class="form-control"
      :placeholder="placeholder"
      @input="inputHandler" 
      v-model="inputValue"
    />
    <ErrorLabel :textError="textError" />
  </div>
</template>

<script>
import ErrorLabel from "./ErrorLabel.vue";

export default {
  components: {
    ErrorLabel,
  },

  data() {
    return {
      inputValue: "",
    };
  },

  props: {
    textError: String,
    label: String,
    placeholder: String,
  },

  methods:{
    inputHandler(){
      this.$emit('inputText', this.inputValue)
    }
  }
};
</script>

<style lang="scss" scoped></style>
