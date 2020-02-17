import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
// import {request} from './network/request.js'
import toast from 'components/common/toast'

Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()
Vue.use(toast)
// Vue.ues(toast)
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


