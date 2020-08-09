/*
* @Description: Web project
* @Version: 2.0
* @Autor: Xu.wenqing
* @Email: 2510129345@qq.com
* @Date: 2020-08-09 00:53:40
 * @LastEditors: WenChing
 * @LastEditTime: 2020-08-10 02:12:19
*/

// 控制台 输入 node index.js 启动服务，端口号为3000
const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const {connect , initSchemas} = require('./database/init.js')

//立即执行函数
;(async () =>{
    await connect()
    initSchemas()
    const User = mongoose.model('User')
    let oneUser = new User({userName:'jspang13',password:'123456'})

    oneUser.save().then(()=>{
        console.log('插入成功')

    })
let  users = await  User.findOne({}).exec()

console.log('------------------')
console.log(users)
console.log('------------------')  
})()


app.use(async(ctx)=>{
    ctx.body = '<h1>hello Koa2</h1>'
})

app.listen(3000,()=>{
    console.log('[Server] starting at port 3000')
})