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
        path:'/search',
        component:Search,
        name:'search'
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    },
]