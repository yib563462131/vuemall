<template>
<div class="botton-bar">
    <div class="check-content">
        <CheckButton :isChecked="isSelectAll" class="check-button" @click.native="checkclick()"> </CheckButton>
        <span>全选</span>
    </div>
    <div class="price">
        合计 : {{totalPrice}}
    </div>
    <div class="calculate" @click="calcclick()">
        去计算({{checkLength}})
    </div>
    
</div>
    
</template>
<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
    name:'CartBottonBar',
    components:{
        CheckButton
    },
    computed:{
        totalPrice(){
            return "￥" + this.$store.state.cartList.filter(item=>{
                return item.checked
            }).reduce((preValue,item)=>{
                return preValue+item.price *item.count
            },0).toFixed(2)
        },
        checkLength(){
            return this.$store.state.cartList.filter(item=>item.checked).length
        },
        isSelectAll(){
            // return !(this.$store.state.cartList.filter(item=>!item.checked).length)
            // return this.$store.state.cartList.filter(item=>item.checked).length == this.$store.state.cartList.length
            if(this.$store.state.cartList.length===0) return false
            return !this.$store.state.cartList.find(item=>!item.checked)
        }
    },
    methods:{
        checkclick(){
            if(this.isSelectAll){
                this.$store.state.cartList.forEach(item => {
                    item.checked=false
                });
            }else{
                 this.$store.state.cartList.forEach(item => {
                    item.checked=true
                });
            }

        },
        calcclick(){
            if(!this.isSelectAll){
                this.$toast.show('请选择购买的商品',2000)
            }
        }
    }
    
}
</script>
<style  scoped>
.botton-bar{
    position: relative; 
    display: flex;
    height: 40px;
    background-color:#eee;
    line-height: 40px;
}
.check-content{
    display: flex;
    align-items: center;
    margin-left:10px;
    width: 90px;
}
.check-button{
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 10px;
}
.price{
    margin-left: 20px;
    flex: 1;
}
.calculate{
    width: 90px;
    text-align: center;
    background: red;
    color: white;
}

</style>

