import {debounce} from 'common/utils.js'
export const itemListenerMixin={
    data(){
        return{
            itemImgListener:null,
            refresh:null

        }
    },
    mounted(){
         this.refresh=debounce(this.$refs.scroll.refresh,10)
        this.itemImgListener=()=>{
                this.refresh()
        }
        this.$bus.$on('itemImgLoad',this.itemImgListener)
    }
        
}