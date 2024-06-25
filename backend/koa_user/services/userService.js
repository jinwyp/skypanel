

exports.login = async (user) =>{

    // GDataChecker.userPassword(user.password)

    let queryUser = {}


    // if (validator.isMobilePhone(user.username, 'zh-CN')){
    //     queryUser.mobilePhone = user.username

    // }else if (validator.isEmail(user.username)){
    //     queryUser.email = user.username

    // }else{
    //     // GDataChecker.username(user.username)
    //     queryUser.username = user.username
    // }

    const resultUser = await GPrisma.user.create({
        data: {
          email: 'elsa@prisma.io',
          username: 'elsa',
          password: '123'
        },
    })

    // let resultUser = await GPrisma.user.findOne(queryUser).exec()
    // GDataChecker.loginUserNotFound(resultUser)


    // let isPasswordMatch = await resultUser.comparePassword(user.password)
    // GDataChecker.loginUserUnauthorized(isPasswordMatch)

    return resultUser

}






const getUserList = async (pagination) => {
    GDataChecker.pagination(pagination)

    const skip = (pagination.pageNo - 1) * pagination.pageSize;
    const users = await GPrisma.user.findMany({
      skip,
      take: parseInt(pagination.pageSize),
    });
    pagination.total = await GPrisma.user.count();
    return { users, pagination };
  };

const getUserById = async (id) => {
    GDataChecker.userIdInt(id)

    return GPrisma.user.findUnique({
        where: { id: parseInt(id) },
    });
};
const getUserByEmail = async (email) => {
    GDataChecker.userEmail(email)

    return GPrisma.user.findUnique({
        where: { email: email },
    });
};



const createUser = async (user) => {

    GDataChecker.userEmail(user.email)
    GDataChecker.username(user.username)
    GDataChecker.userPassword(user.password)

    return GPrisma.user.create({ data: userData });
};
  
const updateUser = async (id, userData) => {

    return GPrisma.user.update({
        where: { id: parseInt(id) },
        data: userData,
    });
};

const deleteUser = async (id) => {
    return GPrisma.user.delete({
        where: { id: parseInt(id) },
    });
};


module.exports = {
    getUserList,
    getUserById,
    getUserByEmail,

    createUser,
    updateUser,
    deleteUser,
};
