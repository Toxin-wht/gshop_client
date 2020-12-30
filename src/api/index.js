import ajax from './ajax'
import mockAjax from './mockAjax'
// product/getBaseCategoryList  GET
export function reqCategoryList() {
    return ajax({
        url:'product/getBaseCategoryList',
        method:'get'
    })
}

export const reqBannerList=()=>mockAjax('/banner')

export const reqRecommends=()=>mockAjax('/recommends')
export const reqFloors=()=>mockAjax('/floors')

export const reqSearch=(searchParms)=>ajax.post('/list',searchParms)

export const reqDetail=(skuId)=>{
    return ajax({
        url:`/item/${skuId}`,
        method:'get'
    })
}

export const addShopCart=(skuId,skuNum)=>{
    return ajax({
        url:`/cart/addToCart/${skuId}/${skuNum}`,
        method:'post'
    })
}