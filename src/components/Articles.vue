<template>
<section id="articles-section" class="body-font" v-scroll-animation>
  <div class="container px-5 sm:px-10 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-6">
      <h1 class="text-4xl title-font purple-header">Here Are Some of My Articles</h1>
    </div>
    <Carousel :refString="'articles'"/>
  </div>
</section>
</template>

<script>
import Carousel from './Carousel.vue'

export default {
  name: 'Articles',
  components: {
    Carousel
  },
}
</script>