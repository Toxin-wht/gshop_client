import ajax from './ajax'
import mockAjax from './mockAjax'
// product/getBaseCategoryList  GET
export function reqCategoryList() {
    return ajax({
        url:'product/getBaseCategoryList',
        method:'get'
    })
}

export const reqBannerList=()=>ajax('cms/banner')

export const reqRecommends=()=>mockAjax('/recommends')
export const reqFloors=()=>mockAjax('/floors')
