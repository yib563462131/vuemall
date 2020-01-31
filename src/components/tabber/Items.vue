<template>
<div :class="{active:aa}" @click="down()">
    <slot name="icons"></slot>
    
    <slot name="texts"></slot>
</div>

</template>
    
<script>
export default {
    name:'itmes',
    props:{
        path:String
    },
    data(){
        return{
            aa:false
        }
    },
    methods:{
        down(){
            this.$router.replace(this.path)
        }
    }
    
}
</script>
<style>
@import url(../../assets/iconfont/iconfont.css);
.active{
   
    color: red;
}
</style>

