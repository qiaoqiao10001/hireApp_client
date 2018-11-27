const express = require('express')
const userRouter = require('./user')
const app = express()

app.use('/user',userRouter) //开启一个中间件  /字路由

app.get('/',function(req,res){
    res.send('hello world')
})

app.listen(9009,function(){
    console.log('node server is on 9009')
})