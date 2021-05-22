<template>
  <div v-on:click="toggleModal()">
    <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-yellow-50">
          <!--header-->
          <div class="flex p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h1 class="text-3xl font-bold font-ibm-plex-sans">
              My Skills
            </h1>
          </div>

          <!--body-->
          <div class="relative p-6 flex-auto">
            <p class="my-4 text-blueGray-500 text-lg leading-relaxed body-font">
              I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception
              of themselves! They're slowed down by their perception of
              themselves. If you're taught you can’t do anything, you
              won’t do anything. I was taught I could do everything.
            </p>
          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b body-font">
            <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40"></div>
  </div>
</template>

<script>
export default {
  name: "large-modal",
  props: {
    showModal: {
      type: Boolean,
      required: true
    },
  },
  methods: {
    toggleModal() {
      this.$emit('close-modal');
    }
  }
}
</script>

<style scoped>

</style>