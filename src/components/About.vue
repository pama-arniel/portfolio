<template>
<div>
   <SkillsPopup :showModal="showModal" @close-modal="showModal=false"/>

   <section id="about-section" class="body-font overflow-hidden">
      <div class="font-inter container px-5 py-10 mx-auto">
         <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center" src="@/assets/about/about_hero.png">
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
               <h2 class="text-sm title-font text-gray-500 tracking-widest">ABOUT ME</h2>
               <h1 class="text-4xl title-font mb-8 purple-header">I am a proficient programmer who</h1>
               <div
                  v-for="description in descriptions"
                  :key="description"
                  class="leading-relaxed mb-6 content-start"
                  >
                  <div class="float-left">
                     <span class="sm:text-2xl text-sm">⚙️ </span>
                  </div>
                  <div>
                     <span class="font-medium text-white my-6 pl-2 align-middle flex">
                     {{ description }}
                     </span>
                  </div>
               </div>
               <div class="flex mt-4 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div class="flex">
                     <Button :text="'See Skills'" @button-clicked="showModal = true"/>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- the experience part -->
      <Experience/>
   </section>
</div>
</template>

<script>
import SkillsPopup from './SkillsPopup.vue'
import Experience from './Experience.vue'
import Button from './Button.vue'

export default {
  name: 'About',
  components: {
      SkillsPopup,
      Experience,
      Button
  },
  data() {
    return {
        showModal: false,
        descriptions: [
            'Posseses a strong knowledge of web development, software engineering, and the fundamentals of programming.',
            'Can quickly master new software packages and hardware technologies.',
            'Can work well under pressure and meet targets while delivering high quality work.',
            'Loves to learn new skills and explore something new.'
        ]
    };
  }
}
</script>
