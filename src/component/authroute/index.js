import React,{Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'



class AuthRoute extends Component{

    componentDidMount(){
        const publicList = ['/login','/register']
        console.log(this.props.location)
        //当前路径
        const pathname = this.props.location.pathname
        //如果已经在里面  不在Login 和register 页面 就不获取用户信息
        if(publicList.indexOf(pathname) === -1){
            return null
        }
        console.log(publicList.indexOf(pathname))
        //获取用户信息

        axios.get('/user/info').then(res => {
            if(res.status===200){
                console.log(res.data)
                //如果没有登录信息就会跳到登录页面
                if(res.data.code === 0){
                    //有登录信息

                }else{

                    console.log(res)
                    this.props.history.push('/login')
                }
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

            </div>
        )
    }
}
export default withRouter(AuthRoute)