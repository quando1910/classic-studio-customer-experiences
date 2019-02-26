import Example from './components/public/example.vue'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('ex', Example)
  }
}

export default GlobalComponents
