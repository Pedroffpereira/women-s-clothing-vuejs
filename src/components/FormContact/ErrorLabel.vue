<template>
  <div>
    <label class="text-danger">{{ textError }}</label>
  </div>
</template>

<script>
export default {
  props: {
    textError: String,
  },
};
</script>

<style lang="scss" scoped></style>
