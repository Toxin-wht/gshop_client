import { reqTradeInfo } from "@/api"

const state={
    tradeInfo:{}
}
const mutations={
    RECEIVE_TRADEINFO(state,tradeInfo){
        state.tradeInfo=tradeInfo
    }
}
const actions={
    async getTradeInfo({commit}){
        const result =await reqTradeInfo()
        if (result.code===200) {
            commit('RECEIVE_TRADEINFO',result.data)
        }
    }
}
const getters={
    userAddressList(state){
        return state.tradeInfo.userAddressList||[]
    },
    detailArrayList(state){
        return state.tradeInfo.detailArrayList||[]
    }
}
export default{
    state,
    mutations,
    actions,
    getters
}