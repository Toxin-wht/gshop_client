import {v4 as uuidv4} from 'uuid'
function getUsersTempId() {
    let userTemId = localStorage.getItem('USERTEMPID_KEY')
    if(!userTemId){
        let userTemId=uuidv4()
        localStorage.setItem('USERTEMPID_KEY',userTemId)
    }
    return userTemId
}
let key = 'TOKEN_KEY'
function setToken(token){
    localStorage.setItem(key,token)
}
function getToken() {
    return localStorage.getItem(key)
}
function removeToken(){
    localStorage.removeItem(key)
}
export {
    getUsersTempId,
    setToken,
    getToken,
    removeToken
}