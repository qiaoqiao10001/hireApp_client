const mongoose = require('mongoose')

const DB_url = 'mongodb://localhost:27017/immoc'

mongoose.connect(DB_url, {useNewUrlParser:true})

mongoose.connection.on('connected',function(){
    console.log('数据库连接成功')
})
