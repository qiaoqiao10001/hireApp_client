import React from 'react'
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Radio,Button} from 'antd-mobile'
import Logo from '../../components/logo'

import './index.less'

import {connect} from 'react-redux'
import {registerAction} from '../../redux/actions'

class Register extends React.Component{

    state={
        username:'',
        password:'',
        password2:'',
        type:'dashen'
    }

    handleChange = (name,value) => {
        this.setState({[name]:value})

    }

    toLogin = () => {
        this.props.history.replace('/login')
    }

    register = () => {
        this.props.registerAction(this.state)
    }

    render(){
        const {type} =  this.props
        return (
            <div>
                <NavBar>boss 招聘</NavBar>
                <Logo/>
                <WingBlank size='lg'>
                    <List>
                        <InputItem
                            placeholder="请输入用户名"
                            clear
                            moneyKeyboardAlign="left"
                            onChange={val => this.handleChange('username',val)}
                        >用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem
                            placeholder='请输入密码'
                            type='password'
                            onChange={val=>this.handleChange('password',val)}
                        >密&nbsp;&nbsp;&nbsp;码：</InputItem>
                        <WhiteSpace/>
                        <InputItem
                            type='password'
                            placeholder='输入确认密码'
                            onChange={val=>this.handleChange('password2',val)}
                        >确认密码：</InputItem>
                        <WhiteSpace/>
                        <List.Item>
                            <span style={{marginRight:30}}>用户类型：</span>
                            <Radio style={{marginRight:30}}
                                checked={this.state.type==='dashen'}
                                   onClick={() => {this.handleChange(type,'dashen')}}
                            >大神</Radio>
                            <Radio
                                checked={this.state.type==='laoban'}
                                onClick={() => {this.handleChange('type','laoban')}}
                            >老板</Radio>
                        </List.Item>
                        <WhiteSpace/>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.register}>注册</Button>
                        <WhiteSpace/>
                        <WhiteSpace/>
                        <Button onClick={this.toLogin}>已经有账号</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}


// const mapDispatch = (dispatch) => {
//     return{
//         dispatch(registerAction)
//     }
// }

export default connect(null,{registerAction})(Register)