<template>
<div>
    <Tabber>
        <Items path="/home">
          <i class="iconfont iconhome a" slot='icons'></i>
          <div slot='texts'>首页</div>
        </Items>
        <Items path="/cart">
          <i class="icongouwuche iconfont a" slot='icons'></i>
          <div slot='texts'>购物车</div>
        </Items>
        <Items path="/category">
          <i class="iconshoucang iconfont a" slot='icons'></i>
          <div slot='texts'>收藏</div>
        </Items>
        <Items path="/profile">
          <i class="iconMy iconfont a" slot='icons'></i>
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
<style>

</style>