<template>
<div class="detail-swiper">
    <swiper class="swiper1">
        <swiper-item v-for="item in topImages">
            <img :src="item">
    
        </swiper-item>
    </swiper>
</div>
    
</template>
<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    name:'DetailSwiper',
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }

    },
    components:{
        Swiper,
        SwiperItem

    }
}
</script>
<style scoped>
.swiper1{
    height: 300px;
    overflow: hidden;
}
</style>