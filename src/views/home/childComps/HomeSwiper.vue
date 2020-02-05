<template>
        <Swiper>
            <SwiperItem v-for="item in banners" >
                <a :href="item.link">
                    <img :src='item.image' @load="imageLoad()">
                </a>
            </SwiperItem>
        </Swiper>
    
</template>
<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
export default {
    name:'HomeSwiper',
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            isLoad:false
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    methods:{
        imageLoad(){
            if(!this.isLoad){
                this.$emit('swiperImageLoad');
                this.isLoad=true;
            }
        }
    }
    
}
</script>
<style>
.Swiper img{
    width: 100vw;
    height: 20vh;
    max-width:999px;

}

</style>