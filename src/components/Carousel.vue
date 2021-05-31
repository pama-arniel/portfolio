<template>
<div>
  <ProjectDetailPopup
    :project="selectedProjectCard"
    :showModal="showModal" @close-modal="showModal=false"
  />

  <!-- search bar component -->
  <div class="flex items-center justify-center pb-6">
    <div class="box-wrapper text-base text-white">
        <div class="rounded-lg flex items-center w-full p-3 shadow-sm bg-black bg-opacity-80 border border-gray-300">
          <button class="outline-none focus:outline-none"><svg class="w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
          <input
            @input="debounceSearch" type="search" placeholder="search related terms" x-model="q"
            class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
          >
          <div class="select font-medium">
            <select v-model="chosenTag" x-model="image_type" class="text-sm outline-none focus:outline-none bg-black">
              <option
                v-for="(tag, i) in currTagsList"
                :key="refString + 'tag-' + i"
                :value="tag" selected
              >{{ tag }}</option>
            </select>
          </div>
        </div>
    </div>
  </div>

  <div>
    <div v-if="typing" class="flex flex-col text-center w-full">
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">{{ this.typing }}</p>
    </div>
    <div v-else-if="currNumOfGroups > 0">
      <div v-if="refString == 'projects'">
        <VueSlickCarousel v-bind="carouselSettings">
          <ProjectsCards
            v-for="i in numOfProjectsGroups"
            :key="Date() + i"
            :projects="filteredProjectsList.slice(i*PROJECTS_PER_GROUP - PROJECTS_PER_GROUP, i*PROJECTS_PER_GROUP)"
            @project-card-clicked="handleClickedProjectCard"
          />
        </VueSlickCarousel>
      </div>
      <div v-else-if="refString == 'articles'">
        <VueSlickCarousel v-bind="carouselSettings">
          <ArticlesCards
            v-for="i in numOfArticlesGroups"
            :key="Date() + i"
            :articles="filteredArticlesList.slice(i*ARTICLES_PER_GROUP - ARTICLES_PER_GROUP, i*ARTICLES_PER_GROUP)"
          />
        </VueSlickCarousel>
      </div>
    </div>
    <div v-else class="flex flex-col text-center w-full">
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Your search did not match any documents.</p>
    </div>
  </div>
</div>
</template>

<script>
import ProjectDetailPopup from './ProjectDetailPopup.vue'
import ProjectsCards from './ProjectsCards.vue'
import ArticlesCards from './ArticlesCards.vue'
import articlesJSON from '../assets/articles/articles_list.json'
import projectsJSON from '../assets/projects/projects_list.json'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Carousel',
  props: {
    // added to class names to distinguish the carousel section
    refString: {
      type: String,
      required: true
    },
  },
  components: {
    ProjectDetailPopup,
    ProjectsCards,
    ArticlesCards,
    VueSlickCarousel
  },
  data() {
    return {
      searchKey: "",
      chosenTag: "All",
      typing: "",
      showModal: false,
      selectedProjectCard: {},

      ARTICLES_PER_GROUP: 4,
      PROJECTS_PER_GROUP: 4,
      carouselSettings: {
        "dots": true,
        "arrows": true,
        "adoptiveHeight": true
      },

      tagsForProjects: ['All', 'Machine Learning', 'Web', 'Mobile', 'Games', 'Special Problems'],
      tagsForArticles: ['All', 'Machine Learning', 'Project Management', 'Special Problems'],

      filteredArticlesList: articlesJSON.list,
      filteredProjectsList: projectsJSON.list,
    };
  },
  watch: {
    chosenTag(newChosenTag) {
      this.initiateRefilteringOfList(this.searchKey, newChosenTag);
    }
  },
  computed: {
    currTagsList() {
      if(this.refString == 'articles') {
        return this.tagsForArticles;
      }
      return this.tagsForProjects;
    },

    currNumOfGroups() {
      if(this.refString == 'articles') {
        return this.numOfArticlesGroups;
      }
      return this.numOfProjectsGroups;
    },

    numOfArticlesGroups() {
      return Math.ceil(this.filteredArticlesList.length / this.ARTICLES_PER_GROUP);
    },

    numOfProjectsGroups() {
      return Math.ceil(this.filteredProjectsList.length / this.PROJECTS_PER_GROUP);
    }
  },
  methods: {
    handleClickedProjectCard(project){
      this.selectedProjectCard = project;
      this.showModal = true;
    },

    debounceSearch(event) {
      let newSearchKey = event.target.value;
      this.typing = newSearchKey ? "Typing..." : "";
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.typing = "";
        this.searchKey = newSearchKey;

        // filter the new list
        this.initiateRefilteringOfList(newSearchKey, this.chosenTag);
      }, 600);
    },

    initiateRefilteringOfList(searchKey, chosenTag){
      if(this.refString == 'articles') {
        // make opposite filtered array empty (save memory size)
        this.filteredProjectsList = [];

        // filter projects by search and by tag
        this.filteredArticlesList = this.filterListBySearchKeyAndTag(articlesJSON.list, searchKey, chosenTag);
      } else if(this.refString == 'projects') {
        // make opposite filtered array empty (save memory size)
        this.filteredArticlesList = [];

        // filter projects by search and by tag
        this.filteredProjectsList = this.filterListBySearchKeyAndTag(projectsJSON.list, searchKey, chosenTag);
      }
    },

    // determine if an item's key values contain the search term
    filterListBySearchKeyAndTag(origList, searchKey, tag){
      if(!searchKey && tag == 'All') return origList;

      return origList.filter((item) => {
        return this.isItemIncludedInFilter(item, searchKey, tag);
      });
    },

    isItemIncludedInFilter(item, searchKey, tag){
      let tags = item?.tags?.join(",");
      let tagRegex = new RegExp(tag, "gi");

      if(tags.match(tagRegex)){
        if(!searchKey){
          return true;
        } else {
          let keysToSkip = ['company_link', 'website', 'project_repo', 'tags', 'href'];

          // iterate the key-value pairs of the item and
          // determine if the search term is found in one of them
          for (const [currKey, currValue] of Object.entries(item)) {
            // skip keys that should not be included in the search
            if(keysToSkip.includes(currKey)) continue;

            if(currValue){
              let completeValue = Array.isArray(currValue) ? currValue?.join(",") : currValue;
              let keyRegex = new RegExp(searchKey, "gi");

              // if found in array, break loop and return true
              if(completeValue.match(keyRegex)){
                return true;
              }
            }
          }

          return false;
        }
      } else {
        // early return; return false when tag is not found
        return false;
      }
    }
  }
}
</script>

<style>
.slick-dots li {
  cursor: pointer !important;
  background-color: white !important;
  opacity: 0.75;
  border-radius: 50% !important;
}

.slick-dots li.slick-active button:before {
  opacity: 1.0;
  color: black;
}
</style>