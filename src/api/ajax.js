import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
const service = axios.create({
    // baseURL:'http://39.99.186.36/api',
    baseURL:'/api',
    timeout:20000
})
service.interceptors.request.use(config=>{
    NProgress.start()
    let userTempId=store.state.user.usersTempId
    if(userTempId){
        config.headers.userTempId=userTempId
    }
    let token =store.state.user.token
    if(token){
        config.headers.token=token
    }
    return config
})
service.interceptors.response.use(
    response=>{
        NProgress.done()
        return response.data
    },
    error=>{
        NProgress.done()
        alert(error.message||'未知请求错误')
        // throw error
        return Promise.reject(error)
    }
)
export default service