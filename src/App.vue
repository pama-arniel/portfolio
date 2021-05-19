<template>
  <div id="app">
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      url="@/assets/particles_config.json"
    />
    <Nav class="mb-6" />
    <Hero />
    <About/>
    <Projects/>
    <Articles/>
    <Organizations/>
    <Contact/>
    <Footer/>
  </div>
</template>   

<script>
import Nav from './components/Nav.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Articles from './components/Articles.vue'
import Contact from './components/Contact.vue'
import Organizations from './components/Organizations.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Hero,
    About,
    Projects,
    Articles,
    Contact,
    Organizations,
    Footer
  }
}
</script>

<style scoped>
#app {
  background: #01020A;;
}
</style>