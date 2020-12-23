import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const service = axios.create({
    // baseURL:'http://39.99.186.36/api',
    baseURL:'/api',
    timeout:5000
})
service.interceptors.request.use(config=>{
    NProgress.start()
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
        throw error
    }
)
export default service