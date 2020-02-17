export default {
    
        addCart(context,payload){
          return new Promise((resolve,reject)=>{
             //判断之前数组中是否有该商品
            let oldProduct=context.state.cartList.find(item=> item.iid===payload.iid)
           if(oldProduct){
             context.commit('addCount',oldProduct)
             resolve('商品数量+1')
           }else{
             //添加一个新的商品
             payload.count=1
            //  state.cartList.push(payload)
            context.commit('addCart',payload)
            resolve('添加了新的商品')
           }
          })
         
           
           
     
         }
     
}