import Vue from 'vue'
import { Button, Field, Slider } from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import { init } from '../utils/GA'

Vue.use(Button)
Vue.use(Field)
Vue.use(Slider)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

if (process.env.NODE_ENV === 'production') {
  init()
}
