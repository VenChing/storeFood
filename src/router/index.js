/*
 * @Description: Web project
 * @Version: 2.0
 * @Autor: Xu.wenqing
 * @Email: 2510129345@qq.com
 * @Date: 2020-08-08 13:23:30
 * @LastEditors: WenChing
 * @LastEditTime: 2020-08-10 03:08:59
 */
import Vue from 'vue';
import Router from 'vue-router';
import ShoppingMall from '@/components/ShoppingMall';

import register from '@/components/pages/register'
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
		},
		{
			path:'/register',
			name:'register',
			component:register
		}
	]
});
