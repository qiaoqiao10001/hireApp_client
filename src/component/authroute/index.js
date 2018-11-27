import React,{Component} from 'react'
import axios from 'axios'


export default class AuthRoute extends Component{

    componentDidMount(){
        //获取用户信息
        axios.get('/user/info').then(res => {
            if(res.status===200){
                console.log(res.data)
            }
        })
        // 是否登录
        // 现在的url地址
        // 用户身份
        // 用户是否完善信息
    }

    render(){
        return(
            <div>
                    user/inf
            </div>
        )
    }
}