<template>
<div>
  <!-- search bar component -->
  <div class="flex items-center justify-center pb-6">
    <div class="box-wrapper text-base text-white">
        <div class="rounded-lg flex items-center w-full p-3 shadow-sm bg-black bg-opacity-80 border border-gray-300">
          <button class="outline-none focus:outline-none"><svg class="w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
          <input
            @input="debounceSearch" type="search" placeholder="search for terms" x-model="q"
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

   <!-- Slideshow container -->
   <div v-if="typing" class="flex flex-col text-center w-full">
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">{{ this.typing }}</p>
    </div>
   <div v-else-if="currNumOfGroups > 0" class="slideshow-container">
      <div v-if="refString == 'projects'">
         <div
            v-for="i in numOfProjectsGroups"
            :key="'project-group-' + i"
            :class="classSlidesValue">
            <ProjectsCards :projects="filteredProjectsList.slice(i*PROJECTS_PER_GROUP - PROJECTS_PER_GROUP, i*PROJECTS_PER_GROUP)"/>
         </div>
      </div>
      <div v-if="refString == 'articles'">
         <div
            v-for="i in numOfArticlesGroups"
            :key="'article-group-' + i"
            :class="classSlidesValue">
            <ArticlesCards :articles="filteredArticlesList.slice(i*ARTICLES_PER_GROUP - ARTICLES_PER_GROUP, i*ARTICLES_PER_GROUP)"/>
         </div>
      </div>
      <!-- Next and previous buttons -->
      <a id="prev-button" v-if="currNumOfGroups > 1" class="prev" @click="plusSlides(-1, 'prev-button')">&#10094;</a>
      <a id="next-button" v-if="currNumOfGroups > 1" class="next" @click="plusSlides(1, 'next-button')">&#10095;</a>
   </div>
   <div v-else class="flex flex-col text-center w-full">
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Your search did not match any documents.</p>
    </div>
   <br>

   <!-- The dots/circles -->
   <div v-if="!typing" id="dots-buttons" style="text-align:center">
      <span
         v-for="i in currNumOfGroups"
         :key="i"
         :class="classDotValue"
         @click="currentSlide(i)"
         ></span>
   </div>
</div>
</template>

<script>
import ProjectsCards from './ProjectsCards.vue'
import ArticlesCards from './ArticlesCards.vue'
import articlesJSON from '../assets/articles/articles_list.json'
import projectsJSON from '../assets/projects/projects_list.json'

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
    ProjectsCards,
    ArticlesCards
  },
  data() {
    return {
      slideIndex : 1,
      searchKey: "",
      chosenTag: "All",
      typing: "",

      // determine which of the dot buttons or the next-prev buttons are clicked
      clickedTransitionButtonID: "",

      ARTICLES_PER_GROUP: 4,
      PROJECTS_PER_GROUP: 4,

      tagsForProjects: ['All', 'Machine Learning', 'Web', 'Mobile', 'Games', 'Special Problems'],
      tagsForArticles: ['All', 'Machine Learning', 'Project Management', 'Programming'],

      filteredArticlesList: articlesJSON.list,
      filteredProjectsList: projectsJSON.list,
    };
  },
  watch: {
    chosenTag(newChosenTag) {
      if(this.refString == 'articles') {
        // make opposite filtered array empty (save memory size)
        this.filteredProjectsList = [];

        // filter articles by tag
        this.filteredArticlesList = this.filterListByTag(articlesJSON.list, newChosenTag);

      } else if(this.refString == 'projects') {
        // make opposite filtered array empty (save memory size)
        this.filteredArticlesList = [];

        // filter projects by tag
        this.filteredProjectsList = this.filterListByTag(projectsJSON.list, newChosenTag);
      }
    },

    searchKey(newSearchKey) {
      if(this.refString == 'articles') {
        // make opposite filtered array empty (save memory size)
        this.filteredProjectsList = [];

        // filter articles by tag
        this.filteredArticlesList = this.filterListBySearchKey(articlesJSON.list, newSearchKey);

      } else if(this.refString == 'projects') {
        // make opposite filtered array empty (save memory size)
        this.filteredArticlesList = [];

        // filter projects by tag
        this.filteredProjectsList = this.filterListBySearchKey(projectsJSON.list, newSearchKey);
      }
    },

    filteredArticlesList() {
      this.showSlideDefaults();
    },

    filteredProjectsList() {
      this.showSlideDefaults();
    },
  },
  computed: {
    classSlidesValue() {
      return `${this.refString}-mySlides mySlides fade`;
    },

    classDotValue() {
      return `${this.refString}-dot dot`;
    },

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
  mounted() {
      this.showSlides(this.slideIndex);
  },
  methods: {
    debounceSearch(event) {
      let newSearchKey = event.target.value;
      this.typing = newSearchKey ? "Typing..." : "";
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.typing = "";
        this.searchKey = newSearchKey;
      }, 600);
    },

    filterListByTag(origList, chosenTag){
      if(chosenTag == 'All') {
        return origList;
      } else {
        return origList.filter((item) => {
          let regex = new RegExp(item?.tags?.join( "|" ), "i");
          return regex.test(chosenTag);
        });
      }
    },

    // determine if an item's key values contain the search term
    filterListBySearchKey(origList, searchKey){
      if(!searchKey) return origList;

      return origList.filter((item) => {
        return this.isItemFoundInKeyValuePairs(item, searchKey);
      });
    },

    isItemFoundInKeyValuePairs(item, searchKey){
      let arrayTypeKeys = ['technologies', 'features', 'key_contributions'];

      // iterate the key-value pairs of the item and
      // determine if the search term is found in one of them
      for (const [currKey, currValue] of Object.entries(item)) {
        console.log('currkey: ', currKey);
        console.log('currValue: ', currValue);
        console.log('------------------');
        // skip tags in search
        if(currKey == 'tags') continue;

        // for array-type key values
        if(arrayTypeKeys.includes(currKey)){
          if(currValue.length > 0){
            let regex = new RegExp(currValue.join("|"), "i");

            // if found in array, break loop and return true
            if(regex.test(searchKey)){
              return true;
            }
          }
        }

        // else, for string-type key values
        else {
          if(currValue){
            let searchRegex = new RegExp(searchKey, "gi");

            // if found in string, break loop and add item to filtered objects
            if(currValue.match(searchRegex)){
              return true;
            }
          }
        }
      }

      // return false if not found in any of the key values
      return false;
    },

    showSlideDefaults() {
      this.$nextTick(() => {
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    },

    // Next/previous controls
    plusSlides(n, clickedButton) {
        this.clickedTransitionButtonID = clickedButton;
        this.slideIndex += n;
        this.showSlides(this.slideIndex);
    },

    // Thumbnail image controls
    currentSlide(n) {
        this.clickedTransitionButtonID = "dots-buttons";
        this.slideIndex = n;
        this.showSlides(this.slideIndex);
    },

    showSlides(n) {
      // don't show slides if no results
      if(this.currNumOfGroups <= 0) return;

      let i;
      let slides = document.getElementsByClassName(this.classSlidesValue);
      let dots = document.getElementsByClassName(this.classDotValue);

      if (n > slides.length) {
          this.slideIndex = 1;
      }

      if (n < 1) {
          this.slideIndex = slides.length;
      }

      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }

      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }

      if(slides[this.slideIndex-1]){
        slides[this.slideIndex-1].style.display = "block";
      }

      if(dots[this.slideIndex-1]){
        dots[this.slideIndex-1].className += " active";
      }

      // scroll to the dots or prev-next area so they are always
      // visible to the user if they were the last buttons clicked
      if(this.clickedTransitionButtonID){
        let elmnt = document.getElementById(this.clickedTransitionButtonID);
        elmnt.scrollIntoView({block: "center"});
        this.clickedTransitionButtonID = "";
      }
    }
  }
}
</script>

<style scoped>
* {box-sizing:border-box}

/* Slideshow container */
.slideshow-container {
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 10px 17px;
  color: #8A00FF;
  text-shadow: 1px 3px 12px #ffffff42;
  box-shadow: -1px -3px 6px #bf00ff32, 1px 3px 6px #8a00ff32;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 50%;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 50%;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: rgb(138, 0, 255, 1);
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
</style>