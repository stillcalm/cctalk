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

export const getCVcode = (data) => {
  return serviceAxios({
    url: "/users/getCVcode",
    method: "post",
    data,
  });
};

/*
getUserInfo({
  uuid: ""
})
 */
export const getUserInfoById = (data) => {
  return serviceAxios({
    url: `/users/getUserinfo`,
    method: "get",
    params: {
      uuid: data.uuid,
    },
  });
};

/*
updateUserInfo({
  uuid: "",
  username: "",
  email: "",
  password_hash: "",
  emailCode: "",
  phone: "",
  phoneCode: "",
})
 */
export const updateUserInfo = (data) => {
  return serviceAxios({
    url: `/users/update/${data.uuid}`,
    method: "post",
    data,
  });
};

/*
getUserInfo({
  username: ""
})
 */
export const getUserByUsername = (data) => {
  return serviceAxios({
    url: `/users/getUserByUsername`,
    method: "get",
    params: {
      username: data.username,
    },
  });
};

export const getHistoryMessages = (data) => {
  return serviceAxios({
    url: "/users/getHistoryMessages",
    method: "get",
    data,
  });
};
