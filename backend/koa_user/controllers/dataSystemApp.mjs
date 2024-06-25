

/**
 * Login controller
 * 登陆
 */
exports.login = async (ctx, next) => {

    const userPostData = ctx.request.body

    let resultUser = await UserService.login(userPostData)
    let userToken = await MUserToken.generateToken(resultUser, ctx)

    ctx.cookies.set(tokenFieldName, userToken.accessToken, { maxAge: TOKEN_EXPIRATION_SEC, httpOnly: true })
    ctx.body = userToken

}


/**
 * Logout controller
 * 退出登陆
 */
exports.logout = async (ctx, next) => {

    const userTokenPostData = ctx.request.body.accessToken || ctx.cookies.get(tokenFieldName) || headerToken(ctx)

    let userToken = await UserService.logout(userTokenPostData)
    ctx.cookies.set(tokenFieldName, null, { maxAge: TOKEN_EXPIRATION_SEC, httpOnly: true })

    ctx.body = userToken || { message : 'Logout success, but token not found'}

}

