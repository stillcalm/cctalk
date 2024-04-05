import serviceAxios from "./index";

export const getUserInfo = (params) => {
  return serviceAxios({
    url: "/website/queryMenuWebsite",
    method: "post",
    params,
  });
};

export const login = (data) => {
  return serviceAxios({
    url: "/users/login",
    method: "post",
    data,
  });
};
