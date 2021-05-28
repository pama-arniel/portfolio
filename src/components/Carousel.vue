<template>
<div>
  <!-- search bar component -->
  <div class="flex items-center justify-center pb-6">
    <div class="box-wrapper text-base">
        <div class="rounded-lg flex items-center w-full p-3 shadow-sm bg-white bg-opacity-80 border border-gray-300">
          <button class="outline-none focus:outline-none"><svg class="w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
          <input
            v-model.trim="searchKey" type="search" placeholder="search for terms" x-model="q"
            class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent text-black"
          >
          <div class="select text-black font-medium">
            <select x-model="image_type" class="text-sm outline-none focus:outline-none bg-transparent">
              <option value="all" selected>All</option>
              <option value="photo">Photo</option>
              <option value="illustration">Illustration</option>
              <option value="vector">Vector</option>
              </select>
          </div>
        </div>
    </div>
  </div>

   <!-- Slideshow container -->
   <div class="slideshow-container">
      <div v-if="refString == 'projects'">
         <div
            v-for="i in numOfProjectsGroups"
            :key="'project-group-' + i"
            :class="classSlidesValue">
            <ProjectsCards :projects="projectsList.slice(i*PROJECTS_PER_GROUP - PROJECTS_PER_GROUP, i*PROJECTS_PER_GROUP)"/>
         </div>
      </div>
      <div v-if="refString == 'articles'">
         <div
            v-for="i in numOfArticlesGroups"
            :key="'article-group-' + i"
            :class="classSlidesValue">
            <ArticlesCards :articles="articlesList.slice(i*ARTICLES_PER_GROUP - ARTICLES_PER_GROUP, i*ARTICLES_PER_GROUP)"/>
         </div>
      </div>
      <!-- Next and previous buttons -->
      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
   </div>
   <br>

   <!-- The dots/circles -->
   <div style="text-align:center">
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
      articlesList: articlesJSON.list,
      projectsList: projectsJSON.list,
      ARTICLES_PER_GROUP: 4,
      PROJECTS_PER_GROUP: 4,
      searchKey: ""
    };
  },
  computed: {
    classSlidesValue() {
      return `${this.refString}-mySlides mySlides fade`;
    },
    classDotValue() {
      return `${this.refString}-dot dot`;
    },
    currNumOfGroups() {
      if(this.refString == 'articles') {
        return this.numOfArticlesGroups;
      }

      return this.numOfProjectsGroups;
    },
    numOfArticlesGroups() {
      return Math.ceil(this.articlesList.length / this.ARTICLES_PER_GROUP);
    },
    numOfProjectsGroups() {
      return Math.ceil(this.projectsList.length / this.PROJECTS_PER_GROUP);
    }
  },
  mounted() {
      this.showSlides(this.slideIndex);
  },
  methods: {
    // Next/previous controls
    plusSlides(n) {
        this.slideIndex += n;
        this.showSlides(this.slideIndex);
    },

    // Thumbnail image controls
    currentSlide(n) {
        this.slideIndex = n;
        this.showSlides(this.slideIndex);
    },

    showSlides(n) {
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
        
        slides[this.slideIndex-1].style.display = "block";
        dots[this.slideIndex-1].className += " active";
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