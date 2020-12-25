import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from '@/views/Register'
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
]