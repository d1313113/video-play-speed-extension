import Vue from 'vue'
import { Field, Slider } from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'

Vue.use(Field)
Vue.use(Slider)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
