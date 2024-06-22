const debug  = require('debug')('koa-user:error');
const debug401  = require('debug')('koa-user:error401');
const moment = require('moment');


function checkIsXHR (req){
    let isXHR = false;
    let type = req.accepts('html', 'json', 'text');

    if (req.get('X-Requested-With') === 'XMLHttpRequest'){
        if (req.is('application/json') || req.is('application/x-www-form-urlencoded')){
            isXHR = true;
        }
    }

    if (req.is('application/json')){
        isXHR = true;
    }

    if (req.get('Content-Type') === 'application/json'){
        isXHR = true;
    }

    if (type === 'json'){
        isXHR = true;
    }

    return isXHR;
}


function serverLog (error, ctx, isAppOnError){
    let errorText = ''

    let nowTime = moment().format("YYYY-DD-MM HH:mm:ss");

    if (isAppOnError) {
        errorText = '+++ ' + nowTime + ' KOA2 App On Error '
    } else {
        errorText = '+++ ' + nowTime + ' '
    }

    if (ctx.status >= 500){
        GLogger.error({err: error, ctx: ctx}, errorText + '===== Server 5XX UncaughtException : \n');


    }else if (ctx.status >= 400){
        if (ctx.status === 404) {
            GLogger.warn({err: error, ctx: ctx}, errorText + '===== 404 Page Not Found : ')

        } else {
            GLogger.info({err: error, ctx: ctx}, errorText + '===== Server 4XX Bad Request : ')
        }
    }
}


function undefinedErrorTypeHandler (error){
    let newErr = error;

    // Deal with Some extra error type. Such as 3rd party sms provider libs
    if (typeof error.type === 'undefined' ){

        if (error.name === 'UnauthorizedError'){
            newErr = new GUnauthenticatedAccessError('token.tokenDecodeWrong', 'X-Access-Token');

            /**
             * Base on Module koa-jwt Error
             * https://github.com/koajs/jwt
             * https://github.com/koajs/jwt/blob/master/lib/index.js
             */
            debug401('===== [Koa jwt extra error] error.name: ' + error.name + ', error.message: ' + error.message)
            if (error.message && error.message !== 'Authentication Error'){
                newErr.message = error.message;
            }

            /**
             * Base on Module jsonwebtoken Error
             * https://github.com/auth0/node-jsonwebtoken#errors--codes
             */
            if (error.message === 'jwt expired') {
                newErr = new GUnauthenticatedAccessError('token.tokenExpired', 'X-Access-Token');
            }

            if (error.message === 'invalid signature' || error.message === 'jwt signature is required') {
                newErr = new GUnauthenticatedAccessError('token.tokenInvalidSignature', 'X-Access-Token');
            }

            if (error.message === 'User Unauthorized, token not found' || error.message === 'invalid token' || error.message === 'jwt malformed') {
                newErr = new GUnauthenticatedAccessError('token.tokenNotFound', 'X-Access-Token');
            }

        }else {
            newErr = new GSystemError(500, error.message, error);
        }

        if (error && typeof error.stack !== 'undefined'){
            newErr.stack = error.stack;
        }
    }
    return newErr;
}


function productionErrorHandler (app, options){

    options = options || {}
    options.env = options.env || 'development'

    app.on('error', (error, ctx) =>{
        serverLog(error, ctx, true)
    })

    app.proxy = true;  // If your Koa or Express server is properly configured, the protocol property of the request will be set to match the protocol reported by the proxy in the X-Forwarded-Proto header.

    return async (ctx, next) => {
        try {

            ctx.state.xhr = (ctx.request.get('X-Requested-With') === 'XMLHttpRequest');

            // Security Header for content sniffing
            // ctx.set('X-Content-Type-Options', 'nosniff');

            // console.log("==== Header application/json : ", ctx.request.is('application/json'), ctx.request.is('application/x-www-form-urlencoded'))
            // console.log("==== Header Content-Type : ", ctx.request.get('Content-Type'), ctx.request.get('Content-Type') === 'application/json')
            // console.log("==== Header accepts : ", ctx.request.accepts('html', 'json', 'text'))

            await next();

            // Handle 404 upstream.

            ctx.status = ctx.status || 404;
            if (ctx.status === 404) {
                throw(new GPageNotFoundError())
            }

        } catch (error) {
            // console.log('error name:', error.name)
            // console.log('error type:',error.type)
            // console.log('error code:',error.code)
            // console.log('error message:',error.message)
            // console.log('error field:',error.field)
            // console.log('===== error stack:', error.stack)

            // debug('error name:', error.name)
            // debug('error type:', error.type)
            // debug('error code:', error.code)
            // debug('error message:', error.message)
            // debug('error field:', error.field)

            error = undefinedErrorTypeHandler(error);
            ctx.status = error.status || 500;

            serverLog(error, ctx)

            ctx.body = {
                success : false,
                error : {
                    code   : error.code,
                    message: error.message,
                    field  : error.field,

                    type    : error.type,
                    name    : error.name,
                    codename: error.codename,
                    stack   : error.stack,
                    status  : error.status,

                    url: ctx.request.url
                },
                meta : null,
                data : null
            };

            if (options.env === 'production'){
                error.stack = ''
                ctx.body.error.stack = ''
            }

            if (checkIsXHR(ctx.request)){

            }else {

                if (ctx.status >= 500){
                    ctx.state.page.title = '500 系统错误, 请稍后重试!'
                    await ctx.render('error/500', { error : error });

                }else if (ctx.status >= 400){
                    if (ctx.status === 404) {
                        await ctx.render('error/404', { error : error });

                    } else if (ctx.status === 401) {
                        await ctx.render('error/401', { error : error });

                    }else {
                        await ctx.render('error/400', { error : error });
                    }
                }
            }

            // ctx.app.emit('error', error, ctx);
        }
    };
}





// To render exceptions thrown in non-promies code:
process.on('uncaughtException', function(error){

    let newError = null;

    if (error && typeof error.type === 'undefined'){
        newError = new GSystemError(500, error.message, error);
        newError.stack = error.stack;
    }else{
        newError = error;
    }

    GLogger.error('===== Process Server 5XX UncaughtException : ', error)

    process.exit(1);
});



// To render unhandled rejections created in BlueBird:
// https://nodejs.org/api/process.html#process_event_unhandledrejection
process.on('unhandledRejection', function(reason, p){
    GLogger.error('===== Process Server 5XX UnhandledRejection at Promise: ', JSON.stringify(p), "\n Reason: ", reason);
});


module.exports = productionErrorHandler;
