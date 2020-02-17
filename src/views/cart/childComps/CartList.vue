<template>
<div class="cart-list">
    <scroll class="content">
        <CartListItem 
        v-for="(item,index) in cartList" 
        :product="item" 
        :key="index"></CartListItem>
    </scroll>
</div>
    
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from'./CartListItem'

import { mapGetters } from 'vuex'
export default {
    name:'CartList',
    computed:{
       ...mapGetters(['cartList']) 
    },
    components:{
        Scroll,
        CartListItem
        
    }
    
}
</script>
<style scoped>
.cart-list{
    height: calc( 100% - 44px - 49px - 40px);
}
.content{
    height: 100%;
    overflow: hidden;
}

</style>