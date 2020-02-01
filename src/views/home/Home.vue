<template>
    <div>
        <NavBar class="homebar">
            <div slot="center">购物街</div>
        </NavBar>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
    name:'Home',
    components:{
        NavBar
    }
    
}
</script>
<style>
.homebar{
    background:lightpink;
    color: white;
}

</style>