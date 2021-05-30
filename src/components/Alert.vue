<template>
<div id="my-alert" :class="`text-center py-4 lg:px-4 fixed bottom-0 left-0 w-full z-50 hidden shake-notif`">
    <div :class="`p-2 ${getColor}-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`" role="alert">
        <span :class="`flex rounded-full ${getColor}-500 uppercase px-2 py-1 text-xs font-bold mx-2`">{{ tag }}</span>
        <span class="font-semibold mr-2 text-left flex-auto">{{ message }}</span>
        <svg
            class="fill-current h-4 w-4 mx-2"
            role="button" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            @click="fadeItOut()"
        >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
        </svg>
    </div>
</div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    // types: 'success', 'error'
    type: {
        type: String,
        required: true,
    },
  },
  computed: {
      tag() {
        return this.type.toUpperCase();
      },
      message() {
        if(this.type == 'error') {
            return 'Error in submitting your message. There may be some error in the network. Please try again.';
        }
        return 'Your message have been successfully sent!';
      },
      getColor() {
        return (this.type=='success') ? 'bg-green' : 'bg-red';
      }
  },
  methods: {
    showAlert(hideAfter){
      document.getElementById("my-alert").classList.remove("hidden");
      if(hideAfter) {
          setTimeout(this.fadeItOut, 10000);
      }
    },

    fadeItOut(){
      let alert = document.getElementById("my-alert");
      alert.classList.add("hidden");
    }
  }
}
</script>

<style scoped>
.shake-notif {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>