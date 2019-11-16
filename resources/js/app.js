require('./bootstrap');

window.Vue = require ('vue');

import Vue from 'vue'
import Vuex from 'vuex'

import Counter from './components/Counter.vue'
import Other from './components/Other.vue'

Vue.use(Vuex)

import store from './store'


Vue.component('counter', Counter)
Vue.component('other', Other)

const app = new Vue({
  el: '#app',

  store: new Vuex.Store(store)
})
