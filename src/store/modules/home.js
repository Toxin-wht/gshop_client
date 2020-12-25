import {reqCategoryList,reqBannerList} from '../../api'
const state={
    categoryList:[],
    bannerList:[]
}
const mutations={
    GET_CCATEGORY_LIST(state,categoryList){
        state.categoryList=categoryList.splice(0,15)
    },
    GET_BANNER_LIST(state,bannerList){
        state.bannerList=bannerList
    }
}
const actions={
    async getCategoryList({commit}){
        const result=await reqCategoryList();
        if(result.code===200){
            const categoryList = result.data;
            commit('GET_CCATEGORY_LIST',categoryList)
        }
    },
    async getBannerList({commit}){
        const result=await reqBannerList();
        if(result.code===200){
            const bannerList = result.data;
            commit('GET_BANNER_LIST',bannerList)
        }
    }


}
const getters={

}
export default{
    state,
    mutations,
    actions,
    getters
}