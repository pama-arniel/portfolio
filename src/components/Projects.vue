<template>
<section id="projects-section" class="text-white body-font">
  <div class="container px-10 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-6">
      <h1 class="text-4xl title-font purple-header">Here Are Some of My Projects</h1>
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