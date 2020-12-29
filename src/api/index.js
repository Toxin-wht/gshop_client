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