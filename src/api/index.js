import ajax from './ajax'
import mockAjax from './mockAjax'
// product/getBaseCategoryList  GET
export function reqCategoryList() {
    return ajax({
        url:'product/getBaseCategoryList',
        method:'get'
    })
}
//模拟数据 请求获取轮播图、楼层....
export const reqBannerList=()=>mockAjax('/banner')
export const reqRecommends=()=>mockAjax('/recommends')
export const reqFloors=()=>mockAjax('/floors')
//搜索
export const reqSearch=(searchParms)=>ajax.post('/list',searchParms)
//获取商品详情
export const reqDetail=(skuId)=>{
    return ajax({
        url:`/item/${skuId}`,
        method:'get'
    })
}
//添加购物车
export const addShopCart=(skuId,skuNum)=>{
    return ajax({
        url:`/cart/addToCart/${skuId}/${skuNum}`,
        method:'post'
    })
}
//请求购物车数据
export const reqShopCart=()=>{
    return ajax({
        url:'/cart/cartList',
        method:'get'
    })
}
//更改商品选中状态
export const reqChangeIschecked=(skuId,isChecked)=>{
    return ajax({
        url:`/cart/checkCart/${skuId}/${isChecked}`,
        method:'get'
    })
}
//删除单个商品
export const reqDeleteOneShop=(skuId)=>{
    return ajax({
        url:`/cart/deleteCart/${skuId}`,
        method:'delete'
    })
}
//用户注册
export const reqUserRegister=(userInfo)=>{
    return ajax({
        url:'/user/passport/register',
        method:'post',
        data:userInfo
    })
}
//用户登录
export const reqUserLogin=(userInfo)=>{
    return ajax({
        url:'/user/passport/login',
        method:'post',
        data:userInfo
    })
}
//根据token获取用户信息
export const reqUserInfo=()=>{
    return ajax({
        url:'/user/passport/auth/getUserInfo',
        method:'get'
    })
}
//退出登录
export const reqUserLogout=()=>{
    return ajax({
        url:'/user/passport/logout',
        method:'get'
    })
}
//获取订单信息
export const reqTradeInfo=()=>{
    return ajax({
        url:'/order/auth/trade',
        method:'get'
    })
}