import {v4 as uuidv4} from 'uuid'
function getUsersTempId() {
    let userTemId = localStorage.getItem('USERTEMPID_KEY')
    if(!userTemId){
        let userTemId=uuidv4()
        localStorage.setItem('USERTEMPID_KEY',userTemId)
    }
    return userTemId
}
export {getUsersTempId}