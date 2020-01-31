<template>
  <div id="app">
   
      <!-- <router-link to="/">Home</router-link>  -->
      <!-- <router-link to="/about">About</router-link> -->
      <router-view/>
      <Tabber>
        <Items path="/home">
          <i class="iconfont icon3 a" slot='icons'></i>
          <div slot='texts'>首页</div>
        </Items>
        <Items path="/cart">
          <i class="icongouwuche1 iconfont a" slot='icons'></i>
          <div slot='texts'>购物车</div>
        </Items>
        <Items path="/category">
          <i class="iconicon-test iconfont a" slot='icons'></i>
          <div slot='texts'>收藏</div>
        </Items>
        <Items path="/profile">
          <i class="icongouwuche iconfont a" slot='icons'></i>
          <div slot='texts'>我的</div>
        </Items>
     
      </Tabber>
    
    
  </div>

  
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.a{
  font-size: 25px
}



</style>
<script>
import Tabber from "./components/tabber/Tabber.vue";
import Items from "./components/tabber/Items.vue";
export default {
  name:'App',
  components:{
       Tabber,
       Items
  }
}
</script>
