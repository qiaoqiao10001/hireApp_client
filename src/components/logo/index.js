import React from 'react'
import logo from './logo.png'
import './index.less'

export default class Login extends React.Component{
    render(){
        return (
            <div className='logo-container'>
                <img src={logo} alt="" className='logo-img'/>
            </div>
        )
    }
}