/*
 * @Description: Web project
 * @Version: 2.0
 * @Autor: Xu.wenqing
 * @Email: 2510129345@qq.com
 * @Date: 2020-08-08 13:23:30
 * @LastEditors: Xu.wenqing
 * @LastEditTime: 2020-08-09 00:37:52
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// 引入vue - awesome - swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';

// import style
// import 'swiper/swiper.css';

import 'swiper/swiper-bundle.css';

Vue.use(VueAwesomeSwiper);
import App from './App';
import router from './router';

Vue.config.productionTip = false;
import axios from 'axios';
// Vue.property.$http = axios;

// 按需引入van
// import { Button, Row, Col } from 'vant';
// Vue.use(Button).use(Row).use(Col);

// css或插件css，或插件在这里引入

// 引入初始化
import './assets/css/reset.css';

// 引入vant
import vant from 'vant';
import 'vant/lib/index.css';

import { Lazyload } from 'vant';
Vue.use(Lazyload);
//全局使用 不推荐,,开发暂时使用
Vue.use(vant);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
});
