<template>
  <section id="hero-section" class="text-gray-600 body-font" v-scroll-animation>
    <div
      class="container mx-auto flex pt-16 sm:pt-28 pb-24 items-center justify-center flex-col"
    >
      <img
        alt="Jose Arniel Pama - profile"
        src="@/assets/profile.jpg"
        class="mb-10 object-cover rounded-full h-32 w-32"
      />

      <div class="text-center sm:w-10/12 lg:w-9/12 w-11/12">
        <h2 class="text-base title-font tracking-widest mb-2 hello-portion">
          Hello, I'm
        </h2>
        <h1 class="title-font sm:text-5xl text-3xl mb-8 my-name">
          Jose Arniel Pama
        </h1>
        <h1
          class="title-font sm:text-5xl text-3xl mb-8 leading-relaxed description"
        >
          I am a Software Engineer who specializes in Web Development. I can
          also do mobile, UI/UX, or AI.
        </h1>

        <span
          v-for="bullet in bullets"
          :key="bullet"
          class="font-bold text-white m-2 sm:m-6 text-center align-middle"
        >
          <span class="sm:text-2xl text-sm align-middle">⚙️</span> {{ bullet }}
        </span>

        <div class="flex justify-center mt-16">
          <div class="inline-flex py-2 px-2">
            <Button
              :text="'Contact Me'"
              @button-clicked="goToSection('contact-section')"
            />
          </div>
          <div class="ml-4 inline-flex py-2 px-2">
            <Button
              :text="'See My Works'"
              @button-clicked="goToSection('projects-section')"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Hero",
  components: {
    Button,
  },
  data() {
    return {
      bullets: [
        // 'Passionate',
        // 'Creative',
        // 'Curious',
        // 'Driven',
        "Quality",
        "Efficiency",
        "Reliability",
      ],
    };
  },
  methods: {
    goToSection(section) {
      let elmnt = document.getElementById(section);
      elmnt.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.my-name {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: bold;
  color: #8a00ff;
  text-shadow: 1px 3px 12px #ffffff42;
}
.description {
  font-family: "Inter", sans-serif;
  color: rgba(255, 255, 255, 0.8);
}
.hello-portion {
  font-family: "IBM Plex Sans", sans-serif;
  color: #ffffff;
  text-shadow: 1px 3px 12px #ffffff42;
}
img {
  box-shadow: 0px 0px 5px #ffffff;
  padding: 7px;
}
</style>
