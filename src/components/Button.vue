<template>
    <button
      class="call-to-action px-9 py-5 font-bold"
      @click="$emit('button-clicked')">
      {{ text }}
    </button>
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
    font-family: 'Inter';
    color: #fff;
    border: none;
    border-radius: 10px;
    background-color: #8a00ff;
    background-image: linear-gradient(135deg,#8a00ff,#bf00ff);
    box-shadow: -1px -3px 6px #bf00ff32, 1px 3px 6px #8a00ff32;
}
</style>