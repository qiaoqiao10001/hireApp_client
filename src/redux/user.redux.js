//把redux合在一起写
import axios from 'axios'

//action-type

const REGISTER_SUCCESS = 'register_success'
const ERROR_MSG = 'error_msg'

//actions

//reducer
const initState = {
    isAuth:false,
    msg:'',
    username:'',
    pwd:'',
    type:''
}


export function user(state=initState,action){
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {...state,msg:'',isAuth: true,...action.payload}
        case ERROR_MSG:
            return {...state, isAuth:false,msg:action.msg}
        default:
            return state;
    }

}

function registerSuccess(data) {
    return {type:REGISTER_SUCCESS,payload:data}
}

function errorMsg(msg){
    return {msg,type:ERROR_MSG}
}

export function register({username,pwd,repeatpwd,type}){
    if(!username||!pwd||!type){
        return errorMsg('用户名密码必须输入')
    }
    if(pwd!==repeatpwd){
        return errorMsg('两次密码不一致')
    }
    return dispatch => {
        axios.post('user/register').then(res => {
            if(res.status==200&&res.code==0){
                dispatch(registerSuccess())
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }

}