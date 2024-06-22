/**
 * Created by JinWYP on 23/01/2017.
 */

const debug = require('debug')('koa-user:response_formatter');

const responseFormatter = function(ctx){

    //如果有返回数据，将返回数据添加到data中
    if (ctx.body) {
        const data = ctx.body;

        if (Array.isArray(ctx.body)){
            ctx.body = {
                success: true,
                error  : null,
                meta   : {
                    total     : 0,
                    totalPages: 0,
                    count     : data.length,
                    pageSize  : 0,
                    offset    : 0,
                    pageNo    : 0
                },
                data: data
            }

            if (ctx.meta && ctx.meta.total) {
                ctx.body.meta = {
                    total     : ctx.meta.total,
                    totalPages: Math.ceil(ctx.meta.total / ctx.meta.pageSize),
                    count     : data.length,
                    pageSize  : ctx.meta.pageSize,
                    offset    : ctx.meta.offset,
                    pageNo    : ctx.meta.pageNo
                }
            }
        }else {
            ctx.body = {
                success : true,
                error   : null,
                meta    : null,
                data    : ctx.body
            }
        }

    }
}



const responseFormatterMiddleware = function (pattern, options){
    return async (ctx, next) => {

        const matchedUrl = new RegExp(pattern);
        options = options || {isInclude : true}
        const shouldFormat = options.isInclude ? matchedUrl.test(ctx.url) : !matchedUrl.test(ctx.url);
    
        // 先去执行路由
        await next(); // wait until we execute the next function down the chain, then continue;

        // console.log('----------------------  RES Formatter  ------------------------------')

        // 通过正则的url进行格式化处理
        if(typeof pattern === 'undefined'){
            responseFormatter(ctx);
        }else {

            if (pattern && shouldFormat){
                responseFormatter(ctx);
            }
        }
    }
}



module.exports = responseFormatterMiddleware;

