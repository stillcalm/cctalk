### USER相关的响应状态码

### 接口文档

#### 1、登录

POST：`/api/v1/user/login`

> 传递参数设计

```javascript
{
    username: String, // 账号
    password_hash: String, // 密码
}
```

> 返回数据格式

```javascript
{
    status: Number, //
    data: String | Object, // 登录成功返回用户信息
    msg: String,
}
```



#### 2、注册

POST：`/api/v1/user/register`

> 传递参数设计

```javascript
{
    username: String, // 账号
    email: String, // 邮箱
    password_hash: String, // 密码
    cvCode: String // 验证码
}
```

> 返回数据格式

```javascript
{
    status: Number, //
    data: String | Object, // 注册成功返回用户账号
    msg: String,
}
```

