<template>
  <div id="app">
   
      <!-- <router-link to="/">Home</router-link>  -->
      <!-- <router-link to="/about">About</router-link> -->
      <keep-alive exclude="Detail">
        <router-view/>
      </keep-alive>
      
      
      <MainTabber/>
    
     
      
    
    
  </div>

  
</template>

<style>
@import url(assets/css/base.css);
@import url(assets/iconfont/iconfont.css);
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */






</style>
<script>
import MainTabber from "components/content/maintabber/MainTabber.vue"
export default {
  name:'App',
  components:{
       MainTabber
  }
}
</script>
