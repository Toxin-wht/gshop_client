import {reqDetail} from '../../api'
const state={
    detailList:{}
}
const mutations={
    RECIVE_DETAILLIST(state,detailList){
        state.detailList=detailList
    }
}
const actions={
    async reqDetialList({commit},skuId){
        const result =await reqDetail(skuId)
        console.log(result);
        if(result.code===200){
            commit('RECIVE_DETAILLIST',result.data)
        }             
    }
}
const getters={
    categoryView(state){
        return state.detailList.categoryView || {}
    },
    spuSaleAttrList(state){
        return state.detailList.spuSaleAttrList || []
    },
    skuInfo(state){
        return state.detailList.skuInfo || {}
    }

}
export default {
    state,
    mutations,
    actions,
    getters
}