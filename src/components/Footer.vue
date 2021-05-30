<template>
<footer id="footer-section" class="text-gray-600 body-font">
  <div class="bg-gray-100">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img class="h-9 w-9 rounded-full" src="@/assets/logo.png" alt="Logo"/>
        <span class="ml-3 text-xl">Jose Arniel Pama</span>
      </a>
      <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2021 —
        <a rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">pamajosearniel@gmail.com</a>
      </p>
      <div class="sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <SocialMedia />
      </div>
    </div>
  </div>
</footer>
</template>

<script>
import SocialMedia from './SocialMedia.vue'

export default {
  name: 'Footer',
  components: {
    SocialMedia
  },
}
</script>