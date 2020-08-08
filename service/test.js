/*
 * @Description: Web project
 * @Version: 2.0
 * @Autor: Xu.wenqing
 * @Email: 2510129345@qq.com
 * @Date: 2020-08-09 00:53:40
 * @LastEditors: Xu.wenqing
 * @LastEditTime: 2020-08-09 01:01:50
 */
// 测速Koa安装是否成功

const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
	ctx.body = '<h1>hello koa2</h1>';
});

app.listen(3000, () => {
	console.log('[Server] starting at port 3000');
});

// 控制台 输入 node text.js 启动服务，端口号为3000
