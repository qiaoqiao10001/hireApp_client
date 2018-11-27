import React,{Component} from 'react'
import Logo from '../../component/logo/logo'
import {InputItem,List,Radio,Button,WingBlank,WhiteSpace} from 'antd-mobile'

export default class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            type:'genius',
        }
    }
    render(){
        const RadioItem = Radio.RadioItem
        return(
            <div>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem>用户：</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password'>密码：</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password'>确认密码：</InputItem>
                        <WhiteSpace/>
                        <RadioItem checked={this.state.type==='genius'}>
                                牛人
                        </RadioItem>
                        <WhiteSpace/>
                        <RadioItem checked={this.props.type==='boss'}>
                            老板
                        </RadioItem>
                        <Button>注册</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}