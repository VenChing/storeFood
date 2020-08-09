/*
 * @Description: Web project
 * @Version: 2.0
 * @Autor: WenChing
 * @Email: 2510129345@qq.com
 * @Date: 2020-08-10 02:50:06
 * @LastEditors: WenChing
 * @LastEditTime: 2020-08-10 02:52:56
 */
const Router = require("koa-router")
let router = new Router()
router.get('/',async(ctx)=>{
  ctx.body = "这是用户操作首页"
})
router.get('./register',async(ctx)=>{
  ctx.body = "用户注册接口"
})

module.exports = router