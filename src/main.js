import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import {request} from './network/request.js'

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios({
//   url:'http://123.207.32.32:8000/home/multidata'

// }).then(res=>{
//   console.log(res)
// })
// axios({
//   url:'http://123.207.32.32:8000/home/data?type=sell&page=3'

// }).then(res=>{
//   console.log(res)
// })
// request({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(err)
// })

