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
        searchParms={...searchParms}
        Object.keys(searchParms).forEach(item=>{
            if(searchParms[item]===''||Array.isArray(searchParms[item])&&searchParms[item].length===0){
                delete searchParms[item]
            }
        })

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
    },
    total(state){
        return state.goodsList.total || 0
    }

}
export default{
    state,
    mutations,
    actions,
    getters
}