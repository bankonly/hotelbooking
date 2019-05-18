
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
window.Vue = require('vue');

let routes = [
    { path: '/', component: require('./components/advertise.vue').default },
    { path: '/about', component: require('./components/about.vue').default },
    { path: '/rooms', component: require('./components/rooms.vue').default },
    { path: '/contact', component: require('./components/contact.vue').default },
    { path: '/search', component: require('./components/search.vue').default }
  ]


  const router = new VueRouter({
      mode:'history',
    routes 
  })


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('app-navbar', require('./components/navbar.vue').default);
Vue.component('app-footer', require('./components/footer.vue').default);


const app = new Vue({
    router,
    el: '#app'
});
