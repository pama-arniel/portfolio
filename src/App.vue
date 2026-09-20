<template>
  <div>
    <div
      id="site-background"
      aria-hidden="true"
      :style="{ backgroundImage: `url(${auroraBackground})` }"
    />
    <Particles id="tsparticles" :options="configData" />

    <div id="app">
      <Nav class="mb-6" />
      <Hero />
      <About />
      <Projects />
      <Articles />
      <Organizations />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Articles from "./components/Articles.vue";
import Contact from "./components/Contact.vue";
import Organizations from "./components/Organizations.vue";
import Footer from "./components/Footer.vue";

import particlesConfig from "./assets/particles_config.json";
import auroraBackground from "./assets/aurora_borealis.webp";

export default {
  name: "App",
  components: {
    Nav,
    Hero,
    About,
    Projects,
    Articles,
    Contact,
    Organizations,
    Footer,
  },
  data() {
    return {
      configData: particlesConfig,
      auroraBackground,
    };
  },
};
</script>

<style scoped>
canvas {
  display: block;
}

#site-background {
  position: fixed;
  inset: 0;
  z-index: -3;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
/* ---- tsparticles container ---- */
#tsparticles {
  position: fixed;
  width: 100%;
  height: calc(100% + 20%);
  z-index: -2;
}

#app {
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  top: 0;
  right: 0;
  z-index: 5;
}
</style>
