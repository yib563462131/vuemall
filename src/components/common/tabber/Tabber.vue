<template>
<div class="tab-bar">
  
    <slot></slot>
</div>
    
</template>
<script>
export default {
    name:'Home'
    
}
</script>
<style>
/* @import url(../../assets/css/base.css); */


.tab-bar{
    display: flex;
    position: fixed;
    bottom: 0px;
    width: 100vw;
    height: 49px;
    background: #eeeeee;
    box-shadow: 1px 1px 3px rgba(100, 100,100, .6);
}
.tab-bar>div{
    flex: 1;
    text-align: center;
    
 
}
</style>
