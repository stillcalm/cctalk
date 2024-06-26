/**
 * 邮箱
 * @param {*} s
 */
export const isEmail = (s) => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
    s
  );
};

/**
 * 验证账号格式
 */
export const isAccount = (s) => {
  return /^[a-zA-Z][a-zA-Z0-9]{3,17}$/.test(s);
};

/**
 * 手机号码
 */
export const isMobile = (s) => {
  return /^1[0-9]{10}$/.test(s);
};

/**
 * 电话号码
 */
export const isPhone = (s) => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s);
};

/**
 * 密码强度
 */
export const passwordValidate = (s) => {
  return /^.{6,18}$/.test(s);
};

/**
 * URL地址
 */
export const isURL = (s) => {
  return /^http[s]?:\/\/.*/.test(s);
};

/**
 * 匹配数字，可以是小数，不可以是负数,可以为空
 */
export const isNumber = (s) => {
  return /(^-?[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$)|(^$)/.test(
    s
  );
};

/**
 * 匹配整数，可以为空
 */
export const isIntNumer = (s) => {
  return /(^-?\d+$)|(^$)/.test(s);
};

/**
 * 身份证校验
 */
export const checkIdCard = (idcard) => {
  const regIdCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  if (!regIdCard.test(idcard)) {
    return false;
  } else {
    return true;
  }
};
