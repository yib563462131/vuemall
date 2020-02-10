<template>
    <div class="wrapper" ref="wrapper">
        <div class="centent">
            <slot></slot>
        </div>

    </div>
    
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name:'Scroll',
    data(){
        return{
            scroll:null
        }

    },
    props:{
        probeType:{
            type:Number,
            default(){
                return 0
            }
        },
        pullUpLoad:{
            type:Boolean,
            default(){
                return false
            }
        }

    },
    mounted(){
        //创建BScroll对象
        this.scroll=new BScroll(this.$refs.wrapper,{
            click:true,//使点击事件有效
            probeType:this.probeType,//监听滚动类型0，1不监听，2监听拖动，3监听拖动后的滑动
            pullUpLoad:this.pullUpLoad

        }),
        //监听滚动的位置
        this.scroll.on('scroll',(position)=>{
            // return console.log(position)
            this.$emit('scroll',position)
        }),
        //监听上拉加载事件
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')

        })
        
    },
    methods:{
        //监听点击置顶
        scrollTo(x,y,tiem=300){
             this.scroll && this.scroll.scrollTo(x,y,tiem)

        },
        //多次上拉加载
        finishPullUp(){
            this.scroll.finishPullUp()
        },
        refresh(){
            
            this.scroll && this.scroll.refresh()
        },
        getScrollY(){
            return this.scroll ? this.scroll.y : 0
        }

    }
    
}
</script>
<style scoped>

</style>