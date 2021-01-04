import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'
Vue.use(VueRouter)
// 缓存原型上的push函数
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
// 给原型对象上的push指定新函数函数
VueRouter.prototype.push = function (location, onComplete, onAbort) {
    // 判断如果没有指定回调函数, 通过call调用源函数并使用catch来处理错误
    if (onComplete===undefined && onAbort===undefined) {
        return originPush.call(this, location, onComplete, onAbort).catch(() => {})
    } else { // 如果有指定任意回调函数, 通过call调用源push函数处理
        originPush.call(this, location, onComplete, onAbort)
    }
}
// replace同理处理
VueRouter.prototype.replace = function (location, onComplete, onAbort) {
    if (onComplete===undefined && onAbort===undefined) {
        return originReplace.call(this, location, onComplete, onAbort).catch(() => {})
    } else {
        originReplace.call(this, location, onComplete, onAbort)
    }
}

const router= new VueRouter({
    mode:'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
//全局守卫导航
router.beforeEach(async (to,from,next)=>{
    let token=store.state.user.token
    //已经有token证明已登录
    if (token) {
        //已登录后再次点击登录时 跳转至首页
        if(to.path==='/login'){
            next('/')
        }else{//已登录后 点击跳转其他页面
            try {
                await store.dispatch('getUserInfo')
                next()
            } catch (error) {
                alert('身份验证已过期')
                store.dispatch('removeUser')
                //与登录逻辑配合使用 去到之前想去但被打断的页面
                next('/login?redirect='+to.path)
            } 
        }
    }else{
        //未登录
        next()
    }
})


export default router