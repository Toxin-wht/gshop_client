import {
    reqCategoryList,
    reqBannerList,
    reqRecommends,
    reqFloors
} from '../../api'
const state={
    categoryList:[],
    bannerList:[],
    recommends:[],
    floors:[]
}
const mutations={
    GET_CCATEGORY_LIST(state,categoryList){
        state.categoryList=categoryList.splice(0,15)
    },
    GET_BANNER_LIST(state,bannerList){
        state.bannerList=bannerList
    },
    GET_RECOMMENDS(state,recommends){
        state.recommends=recommends
    },
    GET_FLOORS(state,floors){
        state.floors=floors
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
    },
    async getrecommends({commit}){
        const result=await reqRecommends();
        if(result.code===200){
            const recommends = result.data;
            commit('GET_RECOMMENDS',recommends)
        }
    },
    async getfloors({commit}){
        const result=await reqFloors();
        if(result.code===200){
            const floors = result.data;
            commit('GET_FLOORS',floors)
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