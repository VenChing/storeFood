/*
 * @Description: Web project
 * @Version: 2.0
 * @Autor: Xu.wenqing
 * @Email: 2510129345@qq.com
 * @Date: 2020-08-08 13:23:30
 * @LastEditors: Xu.wenqing
 * @LastEditTime: 2020-08-08 18:18:17
 */
import Vue from 'vue';
import Router from 'vue-router';
import ShoppingMall from '@/components/ShoppingMall';

import awes from '@/testcode/awes';
Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'ShoppingMall',
			component: ShoppingMall
		},
		{
			path: '/awes',
			name: 'awes',
			component: awes
		}
	]
});
