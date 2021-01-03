import { 
    addShopCart,
    reqShopCart,
    reqChangeIschecked,
    reqDeleteOneShop
} from "@/api"

const state={
    shopCartList:[]
}
const mutations={
    RECEIVE_SHOPCART_LIST(state,shopCartList){
        state.shopCartList=shopCartList
    }
}
const actions={
    async addCart({commit},{skuId,skuNo}){
        const result=await addShopCart(skuId,skuNo)
        if(result.code===200){
            return 'success'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    async getShopCartList({commit}){
        const result=await reqShopCart() 
        if(result.code===200){
            commit('RECEIVE_SHOPCART_LIST',result.data)
        }
    },
    async updateOneChecked({commit},{skuId,isChecked}){
        const result = await reqChangeIschecked(skuId,isChecked)
        if(result.code===200){
            return 'success'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    updateAllChecked({commit,dispatch,state},isChecked){
        let promises=[]
        state.shopCartList.forEach(item=>{
            if(item.isChecked===isChecked) return
            let promise=dispatch('updateOneChecked',{skuId:item.skuId,isChecked})
            promises.push(promise)
        })
        return Promise.all(promises)
    },
    async deleteOne({commit},skuId){
        const result = await reqDeleteOneShop(skuId)
        if(result.code===200){
            return 'success'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    deleteAllChecked({commit,dispatch,state}){
        let promises=[]
        state.shopCartList.forEach(item=>{
            if(!item.isChecked) return
            let promise=dispatch('deleteOne',item.skuId)
            promises.push(promise)
        })
        return Promise.all(promises)
    }
}
const getters={

}

export default {
    state,
    mutations,
    actions,
    getters
}