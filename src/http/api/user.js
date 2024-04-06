import serviceAxios from "../index";

/**  
* @param {Object} data 登录参数
* @returns {Promise} 登录接口返回的Promise
* @example
login({
  username: 'admin',
  password_hash: '123456'
})
*/
export const login = (data) => {
  return serviceAxios({
    url: "/users/login",
    method: "post",
    data,
  });
};

/*
register({
  username: 'admin',
  password_hash: '123456',
  email: 'admin@qq.com',
  emailCode: '123456',
})
*/
export const register = (data) => {
  return serviceAxios({
    url: "/users/register",
    method: "post",
    data,
  });
};
