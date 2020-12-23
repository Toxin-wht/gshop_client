import {reqCategoryList} from '../../api'
const state={
    categoryList:[]
}
const mutations={
    GET_CCATEGORY_LIST(state,categoryList){
        state.categoryList=categoryList.splice(0,15)
    }
}
const actions={
    async getCategoryList({commit}){
        const result=await reqCategoryList();
        if(result.code===200){
            const categoryList = result.data;
            commit('GET_CCATEGORY_LIST',categoryList)
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