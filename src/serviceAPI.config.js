/*
 * @Description: Web project
 * @Version: 2.0
 * @Autor: Xu.wenqing
 * @Email: 2510129345@qq.com
 * @Date: 2020-08-09 00:11:39
 * @LastEditors: Xu.wenqing
 * @LastEditTime: 2020-08-09 00:44:58
 */

// 创建接口配置文件
const BASEURL = 'https://mock.yonyoucloud.com/mock/14397/store/';
const URL = {
	getShoppingMallInfo: BASEURL + 'FoodList',
	getGoodsInfo: BASEURL + 'FoodList'
};

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
