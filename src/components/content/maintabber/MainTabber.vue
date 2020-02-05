<template>
<div class="box">
    <Tabber>
        <Items path="/home">
          <i class="iconfont iconshouye a" slot='icons'></i>
          <div slot='texts'>首页</div>
        </Items>
        <Items path="/cart">
          <i class="icongouwuche iconfont a" slot='icons'></i>
          <div slot='texts'>购物车</div>
        </Items>
        <Items path="/category">
          <i class="iconfenlei iconfont a" slot='icons'></i>
          <div slot='texts'>分类</div>
        </Items>
        <Items path="/profile">
          <i class="iconwode iconfont a" slot='icons'></i>
          <div slot='texts'>我的</div>
        </Items>
     
      </Tabber>

</div>
    
</template>
<script>
import Tabber from "components/common/tabber/Tabber.vue"
import Items from "components/common/tabber/Items.vue"
export default {
    name:'MainTabber',
     components:{
       Tabber,
       Items
  }
    
}
</script>
<style scoped>

.a{
  font-size: 25px
}
/* .box{
  background-color: black
} */

</style>