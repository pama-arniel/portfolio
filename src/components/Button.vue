<template>
    <button
      type="submit"
      :class="[btnClass]"
      @click="$emit('button-clicked')"
      :disabled="isLoading"
    >
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
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
      btnClass() {
        return {
          "base-spinner": this.isLoading,
          "cursor-not-allowed": this.isLoading,
          "call-to-action px-9 py-5 font-bold": true
        };
      }
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

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.base-spinner {
  position: relative;
  overflow: hidden;
}

.base-spinner:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  background-color: inherit;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
  top: 0;
  left: 0;
}

.base-spinner:after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.45);
  border-top-color: inherit;
  animation: spinner 0.6s linear infinite;
  z-index: 2;
}
</style>