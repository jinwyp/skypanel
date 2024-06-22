import globalVariable from './koa/global_variable/global_variable.js';

import path from 'path';
import url from 'url';

// 获取 __filename 等效值
const __filename = url.fileURLToPath(import.meta.url);

// 获取 __dirname 等效值
const __dirname = path.dirname(__filename);




import Koa from 'koa';
import KoaBodyParser from 'koa-bodyparser';
import KoaStatic from 'koa-static';
import KoaEJS from '@koa/ejs'

import KoaCors from '@koa/cors';
import KoaHelmet from 'koa-helmet';
import { userAgent } from 'koa-useragent';

import KoaXResponseTime from 'koa-response-time';
import KoaLogger from 'koa-logger';

import Router from "@koa/router";
import RoutesAll from './routes/routes.mjs';



import ejsHelper from './koa/koa2_middleware/ejs-helper.mjs';
import IPDeviceMiddleware from './koa/koa2_middleware/ip_device.mjs';
import visitorLoggerMiddleware from './koa/koa2_middleware/visitor_logger.mjs';

import errorHandlerMiddleware from './koa/koa2_middleware/error_handler.js';
import responseFormatterMiddleware from './koa/koa2_middleware/response_formatter.js';

const router = new Router();

const App = new Koa();

App.keys = [GConfig.cookieSecret];

App.use(errorHandlerMiddleware(App, {env : GConfig.env}));     // 全局错误处理


App.use(KoaLogger()) // Log Request, 记录请求
App.use(KoaXResponseTime()) // Add Header X-Response-Time, 在返回的 Header 上增加响应时间
App.use(KoaHelmet()) // 增加 11 项安全  app.use(helmet({contentSecurityPolicy: false, frameguard: false}))
App.use(KoaCors()) // 跨域资源共享 Cross-Origin Resource Sharing  CORS 

App.use(userAgent) // 增加 ctx.userAgent 的 user agent 信息
App.use(IPDeviceMiddleware()) // 增加 ctx.userDevice 用户设备信息和用户IP
App.use(visitorLoggerMiddleware()) // 增加 ctx.visitor 每一个访客的UUID等信息


App.use(KoaBodyParser())  // 解析 POST 请求 body 



// 静态文件服务
const staticFilePath = path.join(__dirname, './public');
App.use(KoaStatic(staticFilePath, {
    maxage : 1000 * 60 * 60 * 24, // 静态文件 浏览器 max-age 缓存一天 
    hidden : false, // 默认不返回隐藏文件
    gzip : false
}))


// 设置 HTML 模板渲染引擎
KoaEJS(App, {
    root: path.join(__dirname, "views"),
    layout: false,
    viewExt: 'ejs',
    cache: false,
    debug: false
})
App.use(ejsHelper()); // 设置 EJS 模板引擎的 Helper 在模板里面可以直接使用 page.title 等变量

// 设置Json 返回格式
App.use(responseFormatterMiddleware(/api/, {isInclude:true}));

// Router Setting 路由设置
App.use(RoutesAll.routes())


App.listen(GConfig.port, () => {
    GLogger.info(`Koa Server listening http://127.0.0.1:${GConfig.port}/ `);
});
