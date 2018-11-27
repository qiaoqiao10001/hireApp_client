import React,{Component} from 'react'
import Logoimg from './job.png'
import './logo.less'

export default class Logo extends Component{
    render(){
        return(
            <div className='logoCon'>
                <img src={Logoimg} alt=""/>
            </div>
        )
    }
}