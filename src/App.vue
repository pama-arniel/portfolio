<template>
  <div id="app">
    <Nav class="mb-6" />
    <Hero />
    <About/>
    <Carousel/>
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
import Carousel from './components/Carousel.vue'
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
    Carousel,
    Articles,
    Contact,
    Organizations,
    Footer
  }
}
</script>