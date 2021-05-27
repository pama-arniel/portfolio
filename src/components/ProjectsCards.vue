<template>
<section class="text-gray-600 body-font">
  <div class="container py-5 px-1.5 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div
        v-for="(project, index) in projects"
        :key="'project-card-' + index"
        class="xl:w-1/4 md:w-1/2 p-4"
      >
        <div class="bg-white rounded-xl pb-6">
          <img class="h-50 rounded-t-xl w-full object-cover object-center mb-6" :src="getPic('inv_uplogo.jpg')" alt="content">

          <div class="mx-6">
            <!-- <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
              <a v-if="project.company_link != 'N/A'" :href="project.company_link" title="See company" target="_blank">
                {{ project.owner }}
              </a>
              <span v-else>{{ project.owner }}</span>
            </h3> -->
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">{{ project.title }}</h2>
            <p class="leading-relaxed text-base">{{ project.desc }}</p>
          </div>

          <div class="mx-6 mt-6">
            <h6 class="tracking-widest text-gray-900 text-xs font-medium title-font mb-2">
                ⚙️ Technologies
            </h6>
            <div class="flex flex-wrap justify-starts items-center">
              <span
                v-for="(tech, tIndex) in project.technologies"
                :key="'project-' + index + '-tech-' + tIndex"
                class="text-xs inline-block my-0.5 mr-0.5 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                  #{{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'ProjectsCards',
  props: {
    projects: {
        type: Array,
        required: true,
    },
  },
  methods: {
    getPic(fileName) {
      let images = require.context('../assets/projects/', false, /\.(png|jpe?g|svg)$/);
      return images('./' + fileName);
    }
  }
}
</script>