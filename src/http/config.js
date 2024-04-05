const serverConfig = {
  baseURL: "http://localhost:3000/api", // 请求基础地址,可根据环境自定义
  useTokenAuthorization: true, // 是否开启 token 认证
  timeout: 5000, // 请求超时时间
};
export default serverConfig;
