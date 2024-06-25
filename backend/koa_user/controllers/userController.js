const userService = require('../services/userService.js')

exports.login = async (ctx, next) => {

    let body = ctx.request.body
    // GDataChecker.user(body)
    // GDataChecker.userPassword(body.password)
    // GDataChecker.userPassword(body.confirmPassword)
    // GDataChecker.userPasswordMatch(body.password, body.confirmPassword)

    let userResult = await userService.login(body)
    ctx.body = userResult
}


exports.registerNewUser = async (ctx, next) => {

    const userPostData = ctx.request.body

    ctx.body = await UserService.signUp(userPostData)

}





exports.getUserById = async (ctx, next) => {
    const { id } = ctx.params;

    GDataChecker.userIdInt(id)
    const user = await userService.getUserById(id);

    if (!user) {
        GDataChecker.userNotFound(user)
    }

    ctx.body = user;
};
  
exports.getUserList = async (ctx) => {
    const { pageNo = 1, pageSize = 50 } = ctx.query;
    pagination = {
        pageNo: Number(pageNo),
        pageSize: Number(pageSize)
    }
    GDataChecker.pagination(pagination)

    const userResult = await userService.getUserList(pagination);

    ctx.body = userResult.users;
    ctx.meta = {
        total : userResult.pagination.total,
        pageSize : userResult.pagination.pageSize,
        offset : pagination.pageSize * (pagination.pageNo - 1),
        pageNo : userResult.pagination.pageNo
    }

};

exports.createUser = async (ctx, next) => {

    let body = ctx.request.body

    GDataChecker.userEmail(body.email)
    GDataChecker.username(body.username)
    GDataChecker.userPassword(body.password)
    // GDataChecker.userPassword(body.confirmPassword, 'confirmPassword')
    GDataChecker.userPasswordMatch(body.password, body.confirmPassword)

    let userResult = await userService.createUser(body)
    ctx.body = userResult
}


exports.editUserById = async (ctx) => {
    const { id } = ctx.params;
    GDataChecker.userIdInt(id)

    const userData = ctx.request.body;
    const updatedUser = await userService.updateUser(id, userData);

    ctx.body = updatedUser;

};

exports.deleteUserById = async (ctx) => {
    const { id } = ctx.params;
    GDataChecker.userIdInt(id)

    await userService.deleteUser(id);

    ctx.body = id
    ctx.status = 204;

};
  
