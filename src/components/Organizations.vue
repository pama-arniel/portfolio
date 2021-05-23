<template>
<section id="organizations-section" class="text-white body-font">
  <div class="container px-10 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-4xl title-font purple-header mb-4">Here Are My Involvements</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Click or hover on the photos to view the descriptions.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div
        v-for="(org, index) in orgsList"
        :key="'org-' + index"
        class="lg:w-1/4 sm:w-1/3 p-4"
      >
        <div class="flex relative">
          <img alt="gallery" class="absolute rounded-xl inset-0 w-full h-full object-cover object-center" :src="getPic(org.picture)">
          <div class="px-8 py-10 rounded-xl relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{{org.subtitle}}</h2>
            <h1 class="title-font text-lg font-bold text-gray-900 mb-3">{{org.title}}</h1>
            <p class="text-gray-800 leading-relaxed">{{org.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import orgsJSON from '../assets/orgs_list.json'

export default {
  name: 'Organizations',
  data() {
    return {
        orgsList: orgsJSON.list
    };
  },
  methods: {
    getPic(fileName) {
      let images = require.context('../assets/orgs/', false, /\.(png|jpe?g|svg)$/);
      return images('./' + fileName);
    }
  }
}
</script>