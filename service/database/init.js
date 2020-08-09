/*
 * @Description: Web project
 * @Version: 2.0
 * @Autor: Xu.wenqing
 * @Email: 2510129345@qq.com
 * @Date: 2020-08-09 01:49:17
 * @LastEditors: WenChing
 * @LastEditTime: 2020-08-10 02:19:03
 */


const mongoose = require('mongoose')
const db = "mongodb://localhost/smile-db"
mongoose.Promise = global.Promise
exports.connect = () => {
	//连接数据库
	// 添加第二个参数，否则报错，连接不上
	// 详见 https://blog.csdn.net/Kwoky/article/details/103185434
	mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true })

	let maxConnectTimes = 0

	return new Promise((resolve, reject) => {
		//把所有连接放到这里

		//增加数据库监听事件
		mongoose.connection.on('disconnected', () => {
			console.log('***********数据库断开***********')
			if (maxConnectTimes < 3) {
				maxConnectTimes++
				mongoose.connect(db)
			} else {
				reject()
				throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
			}

		})

		mongoose.connection.on('error', err => {
			console.log('***********数据库错误***********')
			if (maxConnectTimes < 3) {
				maxConnectTimes++
				mongoose.connect(db)
			} else {
				reject(err)
				throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
			}

		})
		//链接打开的时
		mongoose.connection.once('open', () => {
			console.log('MongoDB connected successfully')
			resolve()
		})

	})

}
// 在 / service / index.js 里加入立即执行函数，在使用前记得用require进行引入 connect。

// 安装glob
// 载入
// glob：node的glob模块允许你使用 * 等符号，来写一个glob规则，像在shell里一样，获取匹配对应规则文件。
// resolve: 将一系列路径或路径段解析为绝对路径。
const glob =require('glob')

const {resolve} = require('path')

exports.initSchemas=()=>{
	glob.sync(resolve(__dirname,'./schema/','**/*.js')).forEach(require)
}
const {connect , initSchemas} = require('./init.js')