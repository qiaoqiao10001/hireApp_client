import React,{Component} from 'react'
import Logo from '../../component/logo/logo'
import {InputItem,List,Radio,Button,WingBlank,WhiteSpace} from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from "../../redux/user.redux";

@connect(
    state=> state.user,
    {register}
)

class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            pwd:'',
            repeatpwd:'',
            type:'',
        }
        this.handleRegister = this.handleRegister.bind(this)
    }

    handleChange(key,val){
        this.setState({
            [key]:val
        })

    }

    handleRegister(){
        this.props.register(this.state)
        console.log(this.state)
    }

    render(){
        const RadioItem = Radio.RadioItem
        return(
            <div>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={v => this.handleChange('username',v)}
                        >用户：</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password'
                            onChange={v => this.handleChange('pwd',v)}
                        >密码：</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password'
                            onChange={v => this.handleChange('repeatpwd',v)}
                        >确认密码：</InputItem>
                        <WhiteSpace/>
                        <RadioItem checked={this.state.type==='genius'}
                            onChange={() => this.handleChange('type','genius')}
                        >
                                牛人
                        </RadioItem>
                        <WhiteSpace/>
                        <RadioItem checked={this.props.type==='boss'}
                            onChange={() => this.handleChange('type','boss')}
                        >
                            老板
                        </RadioItem>
                        <Button
                            onClick={this.handleRegister}
                        >注册</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
export default Register