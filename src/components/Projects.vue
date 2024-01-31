<template>
<section id="projects-section" class="text-white body-font" v-scroll-animation>
  <div class="container px-5 sm:px-10 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-6">
      <h1 class="text-4xl title-font purple-header mb-4">Here Are Some of My Projects</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Click the cards to see the full details.</p>
    </div>
    <Carousel :refString="'projects'"/>
  </div>
</section>
</template>

<script>
import Carousel from './Carousel.vue'

export default {
  name: 'Projects',
  components: {
    Carousel
  },
}
</script>