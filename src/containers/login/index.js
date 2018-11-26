import React from 'react'
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Button} from 'antd-mobile'
import Logo from '../../components/logo'

import './index.less'

export default class Login extends React.Component{

    state = {
        username:'',
        password:''
    }

    login = () => {
        console.log(this.state);
    }

    handleChange = (name,value) => {
        this.setState({[name]:value})
    }

    toRegister = () => {
        this.props.history.replace('/register')
    }


    render(){
        return (
            <div className='login-container'>
               <NavBar>登录</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem
                            placeholder='请输入用户名'
                            onChange={val=>this.handleChange('username',val)}
                        >用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem
                            placeholder='请输入密码'
                            type='password'
                            onChange={val=>this.handleChange('password',val)}
                        >密&nbsp;&nbsp;&nbsp;码：</InputItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.login}>登录</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toRegister}>还有没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}