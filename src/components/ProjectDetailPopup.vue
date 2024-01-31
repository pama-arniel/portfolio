<template>
   <div class="body-font p-2">
      <div
         v-if="showModal && project"
         class="overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
         >
         <div class="relative w-auto m-3 w-2xl lg:w-7/12 max-h-screen overflow-y-auto">
            <!-- content -->
            <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-white">
               <!-- close 'x' button -->
               <div @click="toggleModal()" class="modal-close absolute top-0 right-0 align-middle cursor-pointer flex flex-col items-center mt-4 mr-4 text-black z-50">
                  <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                     <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                  </svg>
               </div>

               <!-- table -->
               <div class="bg-white shadow overflow-hidden rounded-lg">
                  <!-- header -->
                  <div class="px-4 py-5 sm:px-6">
                     <h2 class="text-lg leading-6 font-bold text-gray-900 title-font mt-2">
                           {{project.title}}
                     </h2>
                     <p class="mt-1 text-gray-500">
                           {{project.desc}}
                     </p>
                  </div>
                  <!-- image -->
                  <div class="flex flex-wrap justify-center">
                     <div class="w-9/12 m-4">
                        <img :src="getPic(project.attached_photo)" :alt="project.desc" class="shadow rounded max-w-full h-auto align-middle border-none" />
                     </div>
                  </div>
                  <!-- project details -->
                  <div class="border-t border-gray-200">
                     <dl>
                        <div
                           v-for="(value, keyName) in project" :key="'project-key-' + keyName"
                        >
                           <div 
                              v-if="!keysToHide.includes(keyName) && value"
                              class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                           >
                              <dt class="font-bold text-gray-900">
                                 <span>{{ formatKeyName(keyName) }}</span>
                              </dt>
                              <dd class="mt-1 text-gray-500 sm:mt-0 sm:col-span-2">
                                 <span v-if="!value || !value.length">N/A</span>
                                 <span
                                    v-else-if="keysToDisplayAsLink.includes(keyName)"
                                    class="text-sm text-indigo-500 truncate-link ml-1">
                                    <a :href="value" title="Open link in new tab" target="_blank">
                                       {{ value }}
                                    </a>
                                 </span>
                                 <div
                                    v-else-if="keysToDisplayAsPills.includes(keyName)"
                                    class="flex flex-wrap justify-starts items-center">
                                    <span
                                       v-for="(pillValue, pillIndex) in value"
                                       :key="'pill-' + pillIndex"
                                       class="text-xs inline-block my-0.5 mr-0.5 py-1.5 px-4 text-gray-600 bg-purple-300 rounded-2xl">
                                          #{{ pillValue }}
                                    </span>
                                 </div>
                                 <div v-else-if="Array.isArray(value)" class="ml-6">
                                    <ul class="list-disc">
                                       <li
                                          v-for="(arrayItem, itemIndex) in value"
                                          :key="'item-' + itemIndex"
                                          class="text-black"
                                       >{{arrayItem}}</li>
                                    </ul>
                                 </div>
                                 <span v-else>{{value}}</span>
                              </dd>
                           </div>
                        </div>
                     </dl>
                  </div>
               </div>

               <!--footer-->
               <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="toggleModal()">
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
  name: "ProjectDetailPopup",
  props: {
    showModal: {
      type: Boolean,
      required: true
    },
    project: {
       type: [Object, null],
       default: null
    }
  },
  data() {
    return {
       keysToHide: ['title', 'desc', 'owner', 'attached_photo'],
       keysToDisplayAsLink: ['company_link', 'website', 'project_repo', 'figma_designs', 'zeplin_designs'],
       keysToDisplayAsPills: ['technologies', 'tags']
    };
  },
  methods: {
    toggleModal() {
      this.$emit('close-modal');
    },

    formatKeyName(keyName) {
       if(keyName == 'company_link'){
          return '💼 Company Link:';
       } else if(keyName == 'website'){
          return '🌐 Website:';
       } else if(keyName == 'technologies'){
          return '⚙️ Technologies:';
       } else if(keyName == 'features'){
          return '🎨 Features:';
       } else if(keyName == 'project_repo'){
          return '📁 Project Repo';
       } else if(keyName == 'key_contributions'){
          return '🔑 Key Contributions:';
       } else if(keyName == 'tags'){
          return '🏷️ Tags:';
       } else if(keyName == 'figma_designs'){
          return '👨‍🎨 Figma Designs:';
       } else if(keyName == 'zeplin_designs'){
          return '👨‍🎨 Zeplin Designs:';
       }

       return keyName;
    },

    getPic(fileName) {
      let file = fileName ? fileName : 'proj_uplogo.jpg';
      let images = require.context('../assets/projects/', false, /\.(png|jpe?g|svg)$/);
      return images('./' + file);
    },
  }
}
</script>
