import Example from './components/public/example.vue'
import NavBar from "./components/public/nav-bar";

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('nav-bar', NavBar)
  }
}

export default GlobalComponents
