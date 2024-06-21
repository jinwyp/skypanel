/**
 * Created by jinwyp on 8/17/17.
 */

import { nanoid } from 'nanoid'

// const MVisitor = require('../../app-user/service/user/model/visitor')


function visitorLoggerMiddleware (options) {

    const CONFIG = {
        keys: GConfig.visitorCookie.keys, /** (string) cookie key (default is koa:sess) */
        /** (number || 'session') maxAge in ms (default is 1 days) */
        /** 'session' will result in a cookie that expires when session/browser is closed */
        /** Warning: If a session cookie is stolen, this cookie will never expire */

        maxAge: GConfig.visitorCookie.maxAge,   /** a number representing the milliseconds from Date.now() for expiry. **/
        path: '/', /** a string indicating the path of the cookie (/ by default). **/
        
        signed: GConfig.visitorCookie.signed, /** a boolean indicating whether the cookie is to be signed (false by default).  */
        overwrite: GConfig.visitorCookie.overwrite, /** a boolean indicating whether to overwrite previously set cookies of the same name (false by default). */

        httpOnly: GConfig.visitorCookie.httpOnly, /** (boolean) httpOnly or not (default true) */
        secure: GConfig.visitorCookie.secure, /** a boolean indicating whether the cookie is only to be sent over HTTPS (false by default for HTTP, true by default for HTTPS). **/
    };
 
    options = options || CONFIG

    if (!options.key) { options.key = CONFIG.keys}
    if (!options.maxAge) { options.maxAge = CONFIG.maxAge}
    if (!options.path) { options.path = CONFIG.path}

    if (!options.signed) { options.signed = CONFIG.signed}
    if (!options.overwrite) { options.overwrite = CONFIG.overwrite}

    if (!options.httpOnly) { options.httpOnly = CONFIG.httpOnly}
    if (!options.secure) { options.secure = CONFIG.secure}


    return async function (ctx, next) {

        let visitorId = ctx.cookies.get(GConfig.visitorCookie.name , {signed : options.signed})

        const visitorRecord = {
            visitorId: visitorId || '',
            ipv4: ctx.ipv4 || '',
            ipv6: ctx.ipv6 || '',
            userDevice: ctx.userDevice || '',
            userAgent : ctx.header['user-agent']
        }

        if (ctx.userAgent) {
            visitorRecord.browser = ctx.userAgent.browser
            visitorRecord.browserVersion = ctx.userAgent.version

            visitorRecord.OS = ctx.userAgent.platform
            visitorRecord.OSVersion = ctx.userAgent.os

            visitorRecord.isMobile = ctx.userAgent.isMobile
            visitorRecord.isDesktop = ctx.userAgent.isDesktop
        }


        if (!visitorId) {

            const uuid = nanoid()
            visitorRecord.visitorId = uuid

            ctx.cookies.set(GConfig.visitorCookie.name, uuid, options)

            // ctx.visitor = await MVisitor.create(visitor)
        }

        return next()
    }
}


export default visitorLoggerMiddleware
