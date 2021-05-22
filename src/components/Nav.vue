<template>
    <nav id="navbar" class="sticky">
        <div class="mx-auto px-8">
            <div class="flex items-center justify-between h-16">
                <div class="w-full justify-between flex items-center">
                    <a class="flex-shrink-0" href="/">
                        <img class="h-8 w-8" src="@/assets/logo.png" alt="Workflow"/>
                    </a>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <a 
                                v-for="(label, index) in labels"
                                :key="'label-' + index"
                                :href="'#' + label.scroll_to"
                                :class="getClass(label.name)"
                                @click="selectedSection = label.name;"
                            >
                                {{label.name}}
                            </a>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="ml-4 flex items-center md:ml-6">
                    </div>
                </div>
                <div class="-mr-2 flex md:hidden">
                    <button
                        @click="toggleHamburgerButton()"
                        class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                    >
                        <svg width="20" height="20" fill="currentColor" class="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div :class="getMobileNavbarClass()">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a 
                    v-for="(label, index) in labels"
                    :key="'label-' + index"
                    :href="'#' + label.scroll_to"
                    :class="getClass(label.name)"
                    @click="switchToSection(label.name)"
                >
                    {{label.name}}
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
        labels: [
            {
                'name': 'Introduction',
                'scroll_to': 'hero-section'
            },
            {
                'name': 'About Me',
                'scroll_to': 'about-section'
            },
            {
                'name': 'Projects',
                'scroll_to': 'projects-section'
            },
            {
                'name': 'Articles',
                'scroll_to': 'articles-section'
            },
            {
                'name': 'Involvements',
                'scroll_to': 'organizations-section'
            },
            {
                'name': 'Contact Me',
                'scroll_to': 'contact-section'
            }
        ],
        selectedSection: 'Introduction',
        hamburgerOpen: false,
    };
  },
  methods: {
      getClass(labelName){
          let defaultClass = 'block px-3 py-2 text-sm font-bold text-white nav-label';
          if(labelName == this.selectedSection){
              return defaultClass + ' selectedSection';
          }
          return defaultClass;
      },
      switchToSection(labelName){
          this.selectedSection = labelName;
          this.hamburgerOpen = false;
      },
      toggleHamburgerButton(){
          this.hamburgerOpen = !this.hamburgerOpen;
      },
      getMobileNavbarClass(){
          return this.hamburgerOpen ? "md:hidden" : "md:hidden hidden";
      }
  }
}
</script>

<style scoped>
.nav-label:hover {
    color: #8A00FF;
    text-shadow: 3px 4px 16px #8a00ff42;
}

a.selectedSection {
    color: #8A00FF;
    text-decoration: none;
    padding-bottom: 12px;
    border-bottom: #fff 3px solid;
}

.sticky {
    background: rgba(1, 2, 10, 0.3);
    box-shadow: 0 4px 2px -2px rgba(0,0,0,.2);
    position: fixed;
    z-index: 40;
    top: 0;
    width: 100%;
}
</style>