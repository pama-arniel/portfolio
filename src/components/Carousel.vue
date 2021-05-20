<template>
<div>
    <!-- Slideshow container -->
    <div class="slideshow-container">
      <div v-if="refString == 'projects'">
        <div
          v-for="i in 3"
          :key="'projects-' + i"
          :class="classSlidesValue">
            <ProjectsCards/>
        </div>
      </div>
      <div v-if="refString == 'articles'">
        <div
          v-for="i in 3"
          :key="'projects-' + i"
          :class="classSlidesValue">
            <ArticlesCards/>
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
          v-for="i in 3"
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
    };
  },
  computed: {
    classSlidesValue() {
      return `${this.refString}-mySlides mySlides fade`;
    },
    classDotValue() {
      return `${this.refString}-dot dot`;
    },
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