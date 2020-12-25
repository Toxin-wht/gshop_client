import ajax from './ajax'
// product/getBaseCategoryList  GET
export function reqCategoryList() {
    return ajax({
        url:'product/getBaseCategoryList',
        method:'get'
    })
}

export const reqBannerList=()=>ajax('cms/banner')