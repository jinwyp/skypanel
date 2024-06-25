import http1 from '@/api/index.ts';


/**
 * @name 用户管理模块
 */
// 获取用户列表
export const getUserListService = (params) => {
    return http1.get(`/users`, params);
};


export const createUserService = (user) => {
    return http1.post(`/users`, user);
};
