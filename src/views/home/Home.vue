<template>
    <div id="home">
        <NavBar class="homebar">
            <div slot="center">购物街</div>
        </NavBar>
        <scroll class="centent" ref="scroll" :probeType="3" 
        :pullUpLoad="true" @scroll="contentScroll"
        @pullingUp='loadMore'>
            <home-swiper :banners="banners"></home-swiper>
            <RecommendView :recommends="recommends"></RecommendView>
            <FetureView></FetureView>
            <TabControl :titles="['流行','精品','精选']" class="tab-control"
            @tabclick='tabclick'></TabControl>
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
            isShowBackTop:false
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
        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell');
       
    },
    methods:{
        /**
         * 事件监听相关的方法
         */
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

        },
        backclick(){
                this.$refs.scroll.scrollTo(0,0,500)

        },
        contentScroll(position){
            this.isShowBackTop= (-position.y)>1000
        },
        loadMore(){
             this.getHomeGoods(this.currentType)
        },

        /**
         * 网络请求
         */
        getHomeMultidata(){
            getHomeMultidata().then(res=>{
            this.banners=res.data.banner.list;
            this.recommends=res.data.recommend.list;
            // console.log(res)
        })
        },
         getHomeGoods(type){
             const page=this.goods[type].page+1;
            getHomeGoods(type,page).then(res=>{
                // console.log(res)
                this.goods[type].list.push(...res.data.list);
                this.goods[type].page+=1;
                this.$refs.scroll.finishPullUp();
            })
         }

    }
    
}
</script>
<style scoped>
#home{
    padding-top: 44px;
    position: relative;
    height: 100vh;
}
.homebar{
    background:lightpink;
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
}
.tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
}
/* .centent{
    height: 300px;
    overflow: hidden;

} */
.centent{
    position: absolute;
    top: 44px;
    bottom: 49px;
}

</style>