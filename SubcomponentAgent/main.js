import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Pagina1.vue'
import FilmDetail from './components/Pagina2.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false


const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/film/:id', name: 'film', component: FilmDetail, props: true }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
