import {
    reqSearch
} from '../../api'
const state={
    goodsList:{}
}
const mutations={
    GET_GOODS_LIST(state,goodsList){
        state.goodsList=goodsList
    },
}
const actions={
    async getgoodsList({commit},searchParms){
        const result=await reqSearch(searchParms);
        if(result.code===200){
            commit('GET_GOODS_LIST',result.data)
        }
    }
}
const getters={
    goodsList(state){
        return state.goodsList.goodsList||[]
    },
    //属性列表
    attrsList(state){
        return state.goodsList.attrsList||[]
    },
    //品牌列表
    trademarkList(state){
        return state.goodsList.trademarkList||[]
    }

}
export default{
    state,
    mutations,
    actions,
    getters
}