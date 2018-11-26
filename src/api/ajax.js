/*
* 公共发送ajax的函数
    函数返回值是promise对象
* */
import axios from 'axios'
export default function ajax(url,data={},type='GET'){
    if(type==='GET'){  //发送get请求
        let paramStr=''
        Object.key(data).forEach(key => {
            paramStr += key + '=' +data[key] + '&'
        })
        if(paramStr){
            paramStr = paramStr.substring(0,paramStr.length-1)
        }

        return axios.get(url+'?'+paramStr)
    }else{         //否则发送post请求
        return axios.post(url,data)
    }
}
