/*
 * @Description: Web project
 * @Version: 2.0
 * @Autor: Xu.wenqing
 * @Email: 2510129345@qq.com
 * @Date: 2020-08-09 00:11:39
 * @LastEditors: WenChing
 * @LastEditTime: 2020-08-10 03:15:14
 */

// 创建接口配置文件
// 自己创建的
// const BASEURL = 'https://mock.yonyoucloud.com/mock/14397/store/';
// const URL = {
// 	getShoppingMallInfo: BASEURL + 'FoodList',
// 	getGoodsInfo: BASEURL + 'FoodList'
// };

// JSpang

const BASEURL = "https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/"
// LOCALURL常量的声明，用于存储本地请求路径
const LOCALURL = "http://localhost:3000/"
const URL = {
    getShoppingMallInfo:BASEURL+'index',
    getGoodsInfo:BASEURL+'getGoodsInfo',
    registerUser:LOCALURL+'user/register',   //用户注册接口
}
// module.exports 提供了暴露接口的方法。
module.exports = URL;

// module.exports 和 export的区别

/*
通常exports方式使用方法是：
    exports.[function name] = [function name]

moudle.exports方式使用方法是：
    moudle.exports= [function name]

两者根本区别是：
  **exports **返回的是模块函数
  **module.exports **返回的是模块对象本身，返回的是一个类

使用上的区别是：
    exports的方法可以直接调用
    module.exports需要new对象之后才可以调用

		具体区别：https://blog.csdn.net/qq_31967569/article/details/82461499
*/
