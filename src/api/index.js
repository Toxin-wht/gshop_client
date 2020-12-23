import ajax from './ajax'
// product/getBaseCategoryList  GET
export function getCategoryList() {
    return ajax({
        url:'product/getBaseCategoryList',
        method:'get'
    })
}