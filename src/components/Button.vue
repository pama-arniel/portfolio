<template>
    <button class="call-to-action">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true
    },
  },
}
</script>

<style scoped>
.call-to-action {
    margin: 32px auto 0;
    padding: 16px 42px;
    font-weight: bold;
    font-family: 'Inter';
    color: #fff;
    border: none;
    border-radius: 10px;
    background-color: #8a00ff;
    background-image: linear-gradient(135deg,#8a00ff,#bf00ff);
    box-shadow: -1px -3px 6px #bf00ff32, 1px 3px 6px #8a00ff32;
}
</style>