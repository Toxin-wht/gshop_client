import { addShopCart } from "@/api"

const state={

}
const mutations={

}
const actions={
    async addCart({commit},{skuId,skuNo}){
        const result=await addShopCart(skuId,skuNo)
        if(result.code===200){
            return 'success'
        }else{
            return Promise.reject(new Error('failed'))
        }
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