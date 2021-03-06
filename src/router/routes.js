import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from '@/views/Register'
import ShopDetail from '@/views/ShopDetail'
import AddCartSuccess from '@/views/AddCartSuccess'
import shopCart from '@/views/ShopCart'
import Trade from '@/views/Trade'
import Pay from '@/views/Pay'
import PaySuccess from '@/views/PaySuccess'
import Center from '@/views/Center'
export default[
    {
        path:'/',
        component:Home
    },
    {
        path:'/search/:keyword?',
        component:Search,
        name:'search',
        props(route){
            // return{keyword:route.params.keyword,keyword2:route.query.keyword2}
            return{keyword:route.params.keyword}
        }
    },
    {
        path:'/login',
        component:Login,
        meta:{
            isFooterShow:true
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            isFooterShow:true
        }
    },
    {
        path:'/detail/:skuId',
        component:ShopDetail
    },
    {
        path:'/addcart',
        component:AddCartSuccess
    },
    {
        path:'/shopcart',
        component:shopCart
    },
    {
        path:'/trade',
        component:Trade
    },
    {
        path:'/pay',
        component:Pay
    },
    {
        path:'/paysuccess',
        component:PaySuccess
    },
    {
        path:'/center',
        component:Center
    },
    {
        path: '/communication',
        component: () => import('@/views/Communication/Communication'),
        children: [
          {
            path: 'event',
            component: () => import('@/views/Communication/EventTest/EventTest'),
            meta: {
                isFooterShow:true
            },
          },
          {
            path: 'model',
            component: () => import('@/views/Communication/ModelTest/ModelTest'),
            meta: {
                isFooterShow:true
            },
          },
          {
            path: 'sync',
            component: () => import('@/views/Communication/SyncTest/SyncTest'),
            meta: {
                isFooterShow:true
            },
          },
          {
            path: 'attrs-listeners',
            component: () => import('@/views/Communication/AttrsListenersTest/AttrsListenersTest'),
            meta: {
                isFooterShow:true
            },
          },
          {
            path: 'children-parent',
            component: () => import('@/views/Communication/ChildrenParentTest/ChildrenParentTest'),
            meta: {
                isFooterShow:true
            },
          },
          {
            path: 'scope-slot',
            component: () => import('@/views/Communication/ScopeSlotTest/ScopeSlotTest'),
            meta: {
                isFooterShow:true
            },
          }
        ],
      },
]