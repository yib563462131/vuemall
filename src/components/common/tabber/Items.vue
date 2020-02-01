<template>
<div :class="{active:isActive}" @click="down()">
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
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!=-1;
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
@import url(../../../assets/iconfont/iconfont.css);
.active{
   
    color: red;
}
</style>

