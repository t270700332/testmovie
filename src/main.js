import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import { routes } from "./routers";
import VueResource from 'vue-resource';


Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
