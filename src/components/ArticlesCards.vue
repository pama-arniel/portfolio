<template>
<section class="text-white body-font">
  <div class="container py-5 px-1.5 mx-auto">
    <div class="flex flex-wrap">
      <div
        v-for="i in 4"
        :key="'article-card' + i"
        class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 section-background"
      >
        <h2 class="text-lg sm:text-xl font-medium title-font mb-2">Shooting Stars</h2>
        <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <a class="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'ArticlesCards'
}
</script>