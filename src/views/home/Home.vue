<template>
    <div id="home">
        <NavBar class="homebar">
            <div slot="center">购物街</div>
        </NavBar>
         <TabControl :titles="['流行','精品','精选']" 
            @tabclick='tabclick' ref="tabcontrol1" class="tabcontrol" v-show=" isTabFixed"></TabControl>
        <scroll class="centent" ref="scroll" :probeType="3" 
        :pullUpLoad="true" @scroll="contentScroll"
        @pullingUp='loadMore'>
            <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
            <RecommendView :recommends="recommends"></RecommendView>
            <FetureView></FetureView>
            <TabControl :titles="['流行','精品','精选']" 
            @tabclick='tabclick' ref="tabcontrol2"></TabControl>
            <GoodsList :goods="showGoods"></GoodsList>
        </scroll>
        <back-top @click.native="backclick()" v-show="isShowBackTop"></back-top>
    
        

       
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'



import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView'
import FetureView from './childComps/FeatureView'



import { getHomeMultidata ,getHomeGoods} from '../../network/home.js'
import {debounce} from '../../common/utils.js'

export default {
    name:'Home',
    data(){
        return{
            banners:[],
            recommends:[],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]},
            },
            currentType:'pop',
            isShowBackTop:false,
            tabOffsetTop:0,
            isTabFixed:false
        }
    },
    computed:{
        showGoods(){
            return this.goods[this.currentType].list;
        }
    },
    components:{
        NavBar,
        TabControl,
        GoodsList,
        Scroll,
        BackTop,
        HomeSwiper,
        RecommendView,
        FetureView
    },
    created(){
        //请求多个数据，轮播图。。。
        this.getHomeMultidata();
        //请求三种数据
        this.getHomeGoods('pop'); 
        this.getHomeGoods('new');
        this.getHomeGoods('sell')
      
       
    },
    mounted(){
         //监听item图片加载完成
        const refresh=debounce(this.$refs.scroll.refresh,10)
        this.$bus.$on('itemImageLoad',()=>{
           refresh()
        })


    },
    methods:{ 
        /**
         * 事件监听相关的方法
         */
    //按钮点击方便确定请求数据的类型
        tabclick(index){
            // console.log(index)
            switch(index){
                case 0:
                    this.currentType='pop'
                    break;
                case 1:
                    this.currentType='new'
                    break;
                case 2:
                    this.currentType='sell'
                    break;
            }
            this.$refs.tabcontrol2.currentIndex=index;
            this.$refs.tabcontrol1.currentIndex=index;

        },
        //点击置顶
        backclick(){
                this.$refs.scroll.scrollTo(0,0,500)

        },
        
        contentScroll(position){
            //置顶按钮显示和隐藏
            this.isShowBackTop= (-position.y)>1000
            //决定tabcontrol是否吸顶
            this.isTabFixed=(-position.y)>this.tabOffsetTop
        },
        //根据商品类型上拉加载更多
        loadMore(){
             this.getHomeGoods(this.currentType)
        },

        /**
         * 网络请求
         */
        //向服务器请求轮播图数据
        getHomeMultidata(){
            getHomeMultidata().then(res=>{
            this.banners=res.data.banner.list;
            this.recommends=res.data.recommend.list;
            // console.log(res)
        })
        },
         getHomeGoods(type){
             //获取当前页码数，+1方便请求下一页数据
             const page=this.goods[type].page+1;
            getHomeGoods(type,page).then(res=>{
                // console.log(res)
                //请求到的数据继续添加到lsit里
                this.goods[type].list.push(...res.data.list);
                this.goods[type].page+=1;
                //下拉加载更多
                this.$refs.scroll.finishPullUp();
            })
         },
         swiperImageLoad(){
             this.tabOffsetTop=this.$refs.tabcontrol2.$el.offsetTop
         }

    }
    
}
</script>
<style scoped>
#home{
    /* padding-top: 44px; */
    position: relative;
    height: 100vh;
    /* z-index: -1; */
    
    
}
.homebar{
    background:lightpink;
    color: white;
    position: relative;
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0; */
    z-index: 9;
    text-align: center;
}
.tabcontrol{
    position: relative;
    z-index: 2;
}

/* .centent{
    height: 300px;
    overflow: hidden;

} */
.centent{
    position: absolute;
    top: 44px;
    bottom: 49px;
    /* z-index: -1; */
}

</style>