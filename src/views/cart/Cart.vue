<template>
<div class="cart">
    <!-- //导航信息 -->
    <Navbar class="nav-bar"><div slot='center'>购物车({{cartLength}})</div></Navbar>
    <!-- 商品列表的展示 -->
    <CartList>
        
    </CartList>
    <!-- 底部汇总 -->
    <CartBottonBar></CartBottonBar>
</div>
    
</template>
<script>
import Navbar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottonBar from './childComps/CartBottomBar'



import {mapGetters} from 'vuex'
export default {
    name:'Cart',
    components:{
        Navbar,
        CartList,
        CartBottonBar
        
    },
    computed:{
        // cartLength(){
        //     return this.$store.getters.cartLength
        // }
        ...mapGetters([
            'cartLength'
            
        ])

    }
    
}
</script>
<style scoped>
.nav-bar{
    background-color: var(--color-tint); 
    color: white;
    text-align: center;
}
.cart{
    height: 100vh;
}

</style>