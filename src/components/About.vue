<template>
<section id="about-section" class="body-font overflow-hidden">
  <div class="container px-5 py-10 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center" src="@/assets/about_hero.png">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">ABOUT ME</h2>
        <h1 class="sm:text-4xl text-2xl title-font mb-8 programmer-heading">I am a proficient programmer who</h1>
        
        <div
          v-for="description in descriptions"
          :key="description"
          class="leading-relaxed mb-6 content-start"
        >
          <div class="float-left">
            <span class="text-2xl">⚙️ </span>
          </div>
          <div>
            <span class="font-medium text-white my-6 ml-2 align-middle">
              {{ description }}
            </span>
          </div>
        </div>

        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div class="flex">
            <span class="mr-3">
                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- the experience part -->
  <div class="container px-10 pt-10 pb-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -my-8">
      <div class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
          <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
            <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
            <h1 class="title-font text-xl font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <a class="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/103x103" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
              <span class="flex-grow flex flex-col pl-3">
                <span class="title-font font-medium text-gray-900">Alper Kamu</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
          <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
            <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
            <h1 class="title-font text-xl font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <a class="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/102x102" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
              <span class="flex-grow flex flex-col pl-3">
                <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
          <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
            <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
            <h1 class="title-font text-xl font-medium text-gray-900 mb-3">Neptune</h1>
            <p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <a class="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/101x101" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
              <span class="flex-grow flex flex-col pl-3">
                <span class="title-font font-medium text-gray-900">Henry Letham</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<script>
export default {
  name: 'About',
  data() {
    return {
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

<style scoped>
.programmer-heading {
  font-family: 'IBM Plex Sans';
  font-weight: bold;
  color: #8A00FF;
  text-shadow: 1px 2px 12px #ffffff42;
}
</style>