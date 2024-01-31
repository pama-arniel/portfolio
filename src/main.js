import Vue from 'vue'
import App from './App.vue'
import Particles from "particles.vue";
import ScrollTransitionDirective from './scrollAnimationPlugin';

import './index.css';

Vue.config.productionTip = false
Vue.use(Particles);
Vue.directive('scroll-animation', ScrollTransitionDirective);

new Vue({
  render: h => h(App),
}).$mount('#app')
