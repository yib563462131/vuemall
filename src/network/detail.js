import {request} from './request'
export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })

}
export function getRecommend(){
    return request({
        url:'/recommend'
    })
}
export class Goods{
    constructor(iteminfo,columns,services){
        this.title=iteminfo.title
        this.desc=iteminfo.desc
        this.newPrice=iteminfo.price
        this.oldPrice=iteminfo.oldPrice
        this.discount=iteminfo.discountDesc
        this.columns=columns
        this.services=services
        this.realPrice=iteminfo.lowNowPrice
    }
}
export class Shop{
    constructor(shopInfo){
        this.logo=shopInfo.shopLogo;
        this.name=shopInfo.name;
        this.fans=shopInfo.cFans;
        this.sells=shopInfo.score;
        this.goodsCount=shopInfo.cGoods;
    }
}
export class GoodsParam {
    constructor(info, rule) {
      // 注：image可能没有值
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.seizes = rule.tables;
  
    }
  }