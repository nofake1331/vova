 
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'owl.carousel';
import '/js/scrol.js';
import App from '/components/App.vue'
import Admin from '/components/Admin.vue'
import Bal from '/components/Bal.vue'


 

const routes = [
   { path: '/', component: Bal },
   { path: '/O', component: Bal },
   { path: '/Phot', component: Bal },
   { path: '/Video', component: Bal },
   { path: '/Vid', component: Bal },
   { path: '/tran', component: Bal },
   { path: '/Zap', component: Bal },
   { path: '/Admin', component: Admin}
]
 
const router = new VueRouter({
   routes
})
 
Vue.use(VueAxios, axios)

 

Vue.use(VueRouter)

new Vue({
   render: h => h(App),
   el: '#app',
   router,

})

    