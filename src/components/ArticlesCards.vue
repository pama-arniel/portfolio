<template>
<section class="text-white body-font">
  <div class="container py-5 px-1.5 mx-auto">
    <div class="flex flex-wrap">
      <div
        v-for="(article, index) in articlesList"
        :key="'article-card' + index"
        class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 section-background"
      >
        <h2 class="text-lg sm:text-xl font-medium title-font mb-2">{{ article.title }}</h2>
        <p class="leading-relaxed text-gray-500 mb-4">{{ article.desc }}</p>
        <a :href="article.href" class="text-indigo-500 inline-flex items-center">Learn More
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
import articlesJSON from '../assets/articles/articles_list.json'

export default {
  name: 'ArticlesCards',
  data() {
    return {
        articlesList: articlesJSON.list
    };
  },
}
</script>