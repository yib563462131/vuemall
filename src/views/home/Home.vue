<template>
    <div>
        <NavBar class="homebar">
            <div slot="center">购物街</div>
        </NavBar>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import {getHomeMultidata} from 'network/home.js'
export default {
    name:'Home',
    data(){
        return{
            result:null
        }

    },
    components:{
        NavBar
    },
    created(){
        getHomeMultidata().then(res=>{
            this.result=res;

        })
    }
    
}
</script>
<style>
.homebar{
    background:lightpink;
    color: white;
}

</style>