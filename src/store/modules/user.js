import {getUsersTempId,setToken,getToken,removeToken} from '@/utils/users'
import {reqUserInfo, reqUserLogin, reqUserLogout, reqUserRegister} from '@/api'
const state={
    usersTempId:getUsersTempId(),
    token:getToken(),
    userInfo:{}
}
const mutations={
    RECEIVE_TOKEN(state,token){
        state.token=token
    },
    RECEIVE_USERINFO(state,userInfo){
        state.userInfo=userInfo
    },
    RESET_USERINFO(state){
        state.userInfo={},
        state.token=''
    }
}
const actions={
    //用户注册
    async userRegister({commit},userInfo){
        const result=await reqUserRegister(userInfo)
        if(result.code===200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    //用户登录
    async userLogin({commit},userInfo){
        const result =await reqUserLogin(userInfo)
        if(result.code===200){
            commit('RECEIVE_TOKEN',result.data.token)
            setToken(result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }     
    },
    //根据token获取用户信息
    async getUserInfo({commit}){
        const result =await reqUserInfo()
        if(result.code===200){
            commit('RECEIVE_USERINFO',result.data)
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    //清除token以及用户信息
    removeUser({commit}){
        commit('RESET_USERINFO')
        removeToken()
    },
    //退出登录
    async userLogout({commit}){
        const result=await reqUserLogout()
        if (result.code===200) {
            commit('RESET_USERINFO')
            removeToken()
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    }
}
const getters={}
export default{
    state,
    mutations,
    actions,
    getters
}