<template>
<div class="container text-white font-inter px-10 pt-10 pb-24 mx-auto">
   <div class="flex flex-wrap -mx-4 -my-8">
      <div 
         v-for="(experience, index) in experiences"
         :key="'experience-' + index"
         class="py-8 px-4 lg:w-1/3"
         >
         <div class="h-full flex items-start section-background">
            <div class="w-15 flex-shrink-0 flex flex-col text-left leading-none">
               <span class="pb-2 mb-2 border-b-2 border-gray-500">{{experience.endDate}}</span>
               <span class="title-font leading-none">{{experience.startDate}}</span>
            </div>
            <div class="flex-grow pl-6">
               <h1 class="title-font text-3xl mb-2 purple-header align-top">{{experience.position}}</h1>
               <h2 class="tracking-widest font-bold">{{experience.company}}</h2>
               <p class="leading-relaxed mb-5 text-gray-500">
                  {{experience.description}}
               </p>
               <div
                  v-for="(task, index) in experience.tasks"
                  :key="'task-' + index"
                  class="leading-relaxed mb-6 content-start"
                  >
                  <div class="float-left">
                     <span class="text-2xl">⚙️</span>
                  </div>
                  <div>
                     <span class="text-white my-6 pl-2 align-middle flex">
                        {{task}}
                     </span>
                  </div>
               </div>
               <a :href="experience.website" target="_blank" class="inline-flex items-center">
                  <img alt="blog" :src="getPic(experience.logo)" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center company-logo">
                  <span class="flex-grow flex flex-col pl-3">
                     <span class="title-font text-indigo-500">{{ experience.website }}</span>
                  </span>
               </a>
            </div>
         </div>
      </div>
   </div>
</div>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
        experiences: [
            {
                startDate: '10/2020',
                endDate: 'Present',
                position: 'Software Engineer',
                company: 'NUVENSIS / BEAPTECH Inc.',
                description: 'Nuvensis aims to make reliable software solutions that are built within record time.',
                tasks: [
                    'Develop mobile apps using Flutter,  BLoC pattern (store management), Hive (for storage), and PostgreSQL and GraphQL (for backend)',
                    'Develop web apps using Vue.js, Quasar, Tailwind CSS, Node.js, and PostgreSQL and GraphQL',
                    'Design UI using Figma and Dribbble',
                    'Implement code and logic for frontend'
                ],
                logo: 'nuvensis.png',
                website: 'http://nuvensis.ch/'
            },
            {
                startDate: '07/2019',
                endDate: '08/2020',
                position: 'Web Developer',
                company: 'BPOSeats.com / Channel Info Tech',
                description: 'BPOSeats.com aims to establish a platform where talents and clients connect effortlessly.',
                tasks: [
                    'Back-end development, front-end development, implementation of HRIS-related features',
                    'Managing some small teams, code reviews, some research-related tasks, Agile Development, Scrum',
                    'Bug fixing, operational feedback, email and SMS notifications, release notes',
                    'Unit testing, code rehauls, back-end schema, implement celery tasks',
                ],
                logo: 'bposeats.png',
                website: 'https://bposeats.com/'
            },
            {
                startDate: '06/2018',
                endDate: '08/2018',
                position: 'Web Developer Intern',
                company: 'BPOSeats.com / Channel Info Tech',
                description: 'The goal is to master the basics of web development and  produce a gamified web app capstone project.',
                tasks: [
                    'Developed "GuessWhut!?", an online video platform for playing charades with friends',
                    'Awarded as the TOP APP among the 5 other competitors in our internship',
                    'Used Django as web framework; CSS, HTML, and Vue.js for the UI/UX; MongoDB for the database; OpenTok library for video communication'
                ],
                logo: 'bposeats.png',
                website: 'https://bposeats.com/'
            },
        ]
    };
  },
  methods: {
      getPic(logoFile) {
         let images = require.context('../assets/', false, /\.png$/);
         return images('./' + logoFile);
      }
  }
}
</script>

<style scoped>
.company-logo {
  box-shadow: 0px 0px 5px #FFFFFF;
  padding:7px;
}
</style>