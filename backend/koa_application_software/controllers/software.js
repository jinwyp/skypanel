
/**
 * Get system software list 
 * 获取屏蔽用户详细列表
 */
exports.getSystemSoftwareList = async(ctx, next) => {
    // console.log('ctx.params.id', ctx.params.id)
    // throw new GValidationError('XXXName', 'xxxField');

    let query = ctx.request.query
    // GDataChecker.token(body.token)
    let pagination = { pageNo: Number(ctx.params.pageno) || 1, pageSize: 100 }

    let userList = await MBlockUserFindP(query, pagination)
    let userListCount = await MBlockUserFindCountP(query)

    ctx.body = userList
    ctx.meta = {
        total : userListCount,
        pageSize : pagination.pageSize,
        offset : pagination.pageSize * (pagination.pageNo - 1),
        pageNo : pagination.pageNo
    }
}

