/*
 * @Description: Web project
 * @Version: 2.0
 * @Autor: Xu.wenqing
 * @Email: 2510129345@qq.com
 * @Date: 2020-08-08 20:12:56
 * @LastEditors: Xu.wenqing
 * @LastEditTime: 2020-08-08 20:23:38
 */
// 由于js对小数点存在一定的瑕疵，对于金额在电商项目是非常敏感的，所以需要进行过滤器的编写

// 过滤器在很多地方都需要使用到，所以编写通用过滤器

// 不够优雅;简洁
// export function toMoney(money) {
// 	let newMoney = money;
// 	if (newMoney) {
// 		newMoney = newMoney.toFixed(2);
// 	} else {
// 		newMoney = 0;
// 		newMoney = newMoney.toFixed(2);
// 	}
// 	return newMoney;
// }

// 进行优化
export function toMoney(money = 0) {
	// toFixed() 方法可把 Number 四舍五入为指定小数位数的数字
	return money.toFixed(2);
}
