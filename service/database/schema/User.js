/*
 * @Description: Web project
 * @Version: 2.0
 * @Autor: WenChing
 * @Email: 2510129345@qq.com
 * @Date: 2020-08-10 01:46:41
 * @LastEditors: WenChing
 * @LastEditTime: 2020-08-10 02:08:39
 */
// 创建用户表
// 定义基本数据模型  后续逐步完善
const mongoose = require('mongoose')  //引入Mongoose
const Schema = mongoose.Schema //声明Schema
let ObjectId = Schema.Types.ObjectId  //声明Object类型

// 创建用户Schema
const userScheam = new Schema({
  UserId: ObjectId,
  userName: { unique: true, type: String },
  password: String,
  createAt: { type: Date, default: Date.now() },
  lastLoginAt: { type: Date, default: Date.now() }
})

//发布模型

mongoose.model('User',userScheam)