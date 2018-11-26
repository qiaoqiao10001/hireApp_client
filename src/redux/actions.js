//包含多个action creator reqRegister
import {reqRegister,reqLogin} from '../api'
import {AUTH_SUCCESS,ERROR_MSG} from './action-types'
//注册action
const authSuccess = (user) => ({type:AUTH_SUCCESS,data:user})
const errorMsg = (msg) => ({type:ERROR_MSG,data:msg})
//注册异步action
export const registerAction = (user) => {
    const {username,password,password2,type} = user
    //表单前台验证  不通过分法同步action
    if(!username){
        return errorMsg('用户名必须指定')
    }else if(password!==password2)
    {
        return errorMsg('两次密码要一致')
    }
    //表单合法；返回ajax
    return async dispatch => {
              //  const promise = reqRegister(user)
        // promise.then(res => {
        //     const result = res.data;
        // })
        const response = await reqRegister({username,password,password2,type})
        const results = response.data;
        if(results.code===0){
            //成功
            dispatch(authSuccess(results.data))
        }else{
            dispatch(errorMsg(results.msg))
        }
    }
}

export const loginAction = (user) => {
    const {username,password} = user
    if(!username){
        return errorMsg('用户名必须指定')
    }else if(!password)
    {
        return errorMsg('密码要指定')
    }
    //表单合法；返回ajax
    return async dispatch => {
        //  const promise = reqRegister(user)
        // promise.then(res => {
        //     const result = res.data;
        // })
        const response = await reqLogin(user)
        const results = response.data;
        if(results.code===0){
            //成功
            dispatch(authSuccess(results.data))
        }else{
            dispatch(errorMsg(results.msg))
        }
    }
}
