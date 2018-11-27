import React,{Component} from 'react'
import Logo from '../../component/logo/logo'
import {InputItem,List,Button,WingBlank,WhiteSpace} from 'antd-mobile'

export default class Login extends Component{

    constructor(props){
        super(props)
        this.register = this.register.bind(this)
    }

    register() {
        this.props.history.push('register')
        console.log(this.props)
    }


    render(){
        return(
            <div>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem>用户：</InputItem>
                        <WhiteSpace/>
                        <InputItem>密码：</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary">登录</Button>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.register}>注册</Button>
                </WingBlank>

            </div>
        )
    }
}