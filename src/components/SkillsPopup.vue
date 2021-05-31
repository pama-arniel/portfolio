<template>
   <div class="body-font">
      <div
         v-if="showModal"
         class="overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex mx-3"
         >
         <div class="relative w-auto my-6 mx-auto w-2xl lg:w-7/12 h-5/6 overflow-y-auto rounded-lg">
            <!--content-->
            <div class="border-0 shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-white rounded-lg">
               <div @click="toggleModal()" class="modal-close absolute top-0 right-0 align-middle cursor-pointer flex flex-col items-center mt-4 mr-4 text-black text-sm z-50">
                  <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                     <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                  </svg>
               </div>

               <!--header-->
               <div class="flex p-5 border-b border-solid border-blueGray-200">
                  <h1 class="text-3xl font-bold font-ibm-plex-sans">
                     My Skills
                  </h1>
               </div>

               <div
                  v-for="(skillGroup, index) in skillGroups"
                  :key="'skill-group-'+ index"
                  class="m-5"
                  >
                  <h4 class="font-bold mb-2">
                     {{ skillGroup.name }}
                  </h4>
                  <div class="relative flex-col items-center">
                     <span
                        v-for="skill in skillGroup.list"
                        :key="skill"
                        class="px-2 py-1 m-1 inline-block rounded text-white bg-purple-600"
                     >
                        {{ skill }}
                     </span>
                  </div>
               </div>

               <!--footer-->
               <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-lg">
                  <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="toggleModal()">
                  Close
                  </button>
               </div>
            </div>

         </div>
      </div>
      <div v-if="showModal" class="bg-black opacity-50 fixed inset-0 z-40"></div>
   </div>
</template>

<script>
export default {
  name: "SkillsPopup",
  props: {
    showModal: {
      type: Boolean,
      required: true
    },
  },
  data() {
    return {
        skillGroups: [
            {
                'name': '🏭 Industry Knowledge',
                'list': [
                    'Software Development', 'Software Development Life Cycle (SDLC)', 'Front-end Development',
                    'User Interface Design', 'Agile Methodologies', 'Scrum', 'Debugging', 'Code Review',
                    'Design', 'Back-end Development', 'Object-Oriented Programming (OOP)', 'Data Structures',
                ],
            },
            {
                'name': '⚙️ Tools and Technologies',
                'list': [
                    'Flutter', 'Vue.js', 'Python', 'Django', 'REST API', 'Javascript',
                    'HTML', 'CSS', 'jQuery', 'C, C++', 'Java', 'Perl', 'Arduino',
                    'Android', 'Assembly x86', 'MIPS', 'SQL', 'SQLite', 'MongoDB',
                    'PostgreSQL', 'Confluence', 'JIRA', 'Figma', 'Git', 'Linux',
                    'Slack'
                ]
            },
            {
                'name': '🙋🏽‍♂️ Interpersonal Skills',
                'list': [
                    'Problem Solving', 'Time Management', 'Leadership', 'Communication'
                ]
            },
            {
                'name': '👨‍💻 Other Skills',
                'list': [
                    'Natural Language Processing (NLP)', 'Artificial Intelligence (AI)',
                    'Machine Learning (ML)', 'Data Science',
                    'Technical Writing', 'Writing'
                ]
            }
        ],
    };
  },
  methods: {
    toggleModal() {
      this.$emit('close-modal');
    }
  }
}
</script>

<style scoped>

</style>