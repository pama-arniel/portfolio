<template>
<section class="text-white body-font" v-scroll-animation>
  <div class="container py-5 px-1.5 mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
      <div
        v-for="(article, index) in articles"
        :key="'article-card-' + index"
        class="h-full flex flex-col justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl scale-on-hover"
      >
        <h2 class="text-lg sm:text-xl font-medium title-font mb-2">{{ article.title }}</h2>
        <p class="leading-relaxed text-gray-200 mb-4">{{ article.desc }}</p>
        <a :href="article.href" target="_blank" class="text-indigo-500 inline-flex items-center" @click="$emit('clicked-learn-more')">Learn More
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
  name: 'ArticlesCards',
  props: {
    articles: {
        type: Array,
        required: true,
    },
  },
  data() {
    return {
        // 
    };
  },
}
</script>
