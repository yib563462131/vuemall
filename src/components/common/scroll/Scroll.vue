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
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad

        }),
        //监听滚动的位置
        this.scroll.on('scroll',(position)=>{
            // return console.log(position)
            this.$emit('scroll',position)
        }),
        //监听上拉事件
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')

        })
    },
    methods:{
        //监听上拉事件
        scrollTo(x,y,tiem=300){
            this.scroll.scrollTo(x,y,tiem)

        },
        finishPullUp(){
            this.scroll.finishPullUp()
        }

    }
    
}
</script>
<style scoped>

</style>