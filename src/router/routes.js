import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from '@/views/Register'
import ShopDetail from '@/views/ShopDetail'
import AddCartSuccess from '@/views/AddCartSuccess'
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
    }
]