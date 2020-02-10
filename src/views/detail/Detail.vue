<template>
    <div id="detail">
        <DetailNavBar class="detail-nav" @titleclick='titleclick' ref='nav'></DetailNavBar>
        <Scroll class='content' ref="scroll" @scroll='contentScroll' :probeType='3'>
            <DetailSwiper :topImages="topImages"></DetailSwiper>
            <DetailBaseInfo :goods='goods'></DetailBaseInfo>
            <DetailShopInfo :shop="shop"></DetailShopInfo>
            <DetailGoodsInfo :detailInfo="detailInfo" @imgload="itemImageLoad()"></DetailGoodsInfo>
            <DetailParamsInfo :paramInfo='paramInfo' ref="params"></DetailParamsInfo>
            <DetailCommentInfo :commentInfo='commentInfo' ref="comment"></DetailCommentInfo>
            <GoodsList :goods='recommends' ref="recommend"></GoodsList>
        </Scroll>
   
    </div>
    
</template>
<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamsInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
import {debounce} from 'common/utils.js'
import {itemListenerMixin} from 'common/mixin.js'

export default {
    name:'Detail',
    data(){
        return{
            id:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommends:[],
            themeTops:[],
            currentIndex:0
            
        }
    },
    created(){
        //保存存入iid
        this.iid = this.$route.params.iid
        //根据iid请求详情数据
        getDetail(this.iid).then(res=>{
            const data=res.result
            //获取顶部的图片轮播数据
            this.topImages=data.itemInfo.topImages
            //获取商品信息
            this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)

            //创建店铺商品信息的对象
            this.shop=new Shop(data.shopInfo)
            //保存detailInfo信息
            this.detailInfo=data.detailInfo
            //获取参数的信息
            this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
            //取出评论信息
            if(data.rate.cRate !=0){
                 this.commentInfo=data.rate.list[0]
            }
           
             
        })
        //请求推荐数据
        getRecommend().then(res=>{
            this.recommends=res.data.list
        })
        
    },
    mixins:[itemListenerMixin],
    destroyed(){
         //取消全局事件监听
        this.$bus.$off('itemImgLoad',this.itemImgListener)

    },
    methods:{
        itemImageLoad(){
            this.refresh()
            this.themeTops.push(0);
            this.themeTops.push(this.$refs.params.$el.offsetTop-44)
            this.themeTops.push(this.$refs.comment.$el.offsetTop-44)
            this.themeTops.push(this.$refs.recommend.$el.offsetTop-44)
            console.log(this.themeTops)

        },
        titleclick(index){
            this.$refs.scroll.scrollTo(0,-this.themeTops[index],100)

        },
        contentScroll(position){
            const positionY=-position.y
            let length=this.themeTops.length
            for(let i=0;i<length;i++){
                if(this.currentIndex !==i &&((i<length-1&&positionY>=
                this.themeTops[i] && positionY<this.themeTops[i+1]) || (i===length-1 &&
                positionY>=this.themeTops[i]))){
                    this.currentIndex=i;
                    this.$refs.nav.currentIndex=this.currentIndex
                }
            }

        }

    },
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamsInfo,
        DetailCommentInfo,
        Scroll,
        GoodsList
        
    },
    mounted(){
        
    },
   

    
}
</script>
<style scoped>
#detail{
    position: relative;
    z-index: 9;
    background-color: #ffffff;
    height: 100vh;
}
.content{
    height: calc(100% - 44px);
}
.detail-nav{
    position: relative;
    z-index:9;
    background-color: white;
}

</style>