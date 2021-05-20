<template>
<section class="text-gray-600 body-font">
  <div class="container py-5 px-1.5 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div
        v-for="i in 4"
        :key="i"
        class="xl:w-1/4 md:w-1/2 p-4"
      >
        <div class="bg-gray-100 rounded-xl pb-6">
          <img class="h-50 rounded-t-xl w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content">
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font mx-6">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mx-6 mb-4">Chichen Itza</h2>
          <p class="leading-relaxed text-base mx-6">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Projects2'
}
</script>