<template>
  <div class="g-doc m-head">
    <div class="head-nav">
      <a href=# class="logo" title="CCtalk"></a>      
    </div>

  </div>
  <div class="g-doc m-body">
    <div class="login-container">
      <div class="login-form">
        <h2 class="title">CCtalk 登录</h2>
        <div class="m-desc"></div>
        <div class="m-form-group">
          <el-input
            v-model="userName"
            class="m-input"
            placeholder="CCtalk账号登录"
            :prefix-icon="User"
          />
        </div>
        <div class="m-form-group">
          <el-input
            v-model="password"
            class="m-input"
            placeholder="登录密码"
            :prefix-icon="Lock"
            show-password
          />
        </div>
        <div class="m-form-group login-error"></div>
        <div class="option">
          <div class="m-from-small-group">
            <el-checkbox v-model="checked1" label="同意并遵守隐私协议" size="small" text-color="#0056ff"/>
          </div>
          <div class="m-from-small-group">
            <el-checkbox v-model="checked2" label="15天免登录" size="small" />
          </div>
        </div>
        <div class="m-form-group">
          <el-button class="m-btn" type="primary" @click="handleClick"
            >登 录</el-button
          >
        </div>
        <div class="m-reset">
          <span class="m-r-left">
            还没有账号？
            <router-link to="/register">立即注册</router-link>
          </span>
          <span class="m-r-right">
            <router-link to="/reset">忘记密码？</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="g-doc m-foot">© 2024-2024</div>
</template>

<script setup>
import { ref } from "vue";
import { Lock, User } from "@element-plus/icons-vue";
import router from "../router";

const checked1 = ref(false);
const checked2 = ref(false);

let userName = ref("");
let password = ref("");
function handleClick() {
  console.log("登录成功");
  router.push({ path: "/home" });
}
</script>

<style lang="less" scoped>

.g-doc {
  min-width: 1200px;
  max-width: 1920px;
}
.title {
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin: 0;
  padding: 10px 0 0;
  text-align: center;
  color: #222;
}
.m-head {
  height: 70px;
  background-color: #fff;
}
.head-nav {
  width: 1200px;
  height: 100%;
  padding: 0 20px;

}
.logo{
  width: 170px;
  height: 70px;
  display: block;
  background: url(https://n1image.hjfile.cn/res7/2020/07/27/0725865d1a73294452a9314747e87dc9.png) 0 no-repeat;
  background-size: contain;
  text-indent: -9999px;
  margin-right: 40px;
}
.m-body {
  height: 580px;
  padding: 80px 0 0;
  background: url("../assets/bg.png") no-repeat;
}
.login-container {
  display: flex;
  text-align: center;
  justify-content: center;
  position: relative;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  float: none;
  margin: auto;
  width: 405px;
  height: 476px;
  padding-top: 30px;
  background: #fff;
}
.login-form {
  width: 325px;
  margin: 0 auto;
  padding-bottom: 0.1px;
  line-height: 1;
  padding: 30px 0 0;
}
.m-form-group {
  margin: 15px 0;
}
.m-from-small-group {
  padding-left: 5px;
  text-align: left;
}
.m-input {
  width: 320px;
  height: 50px;
}
.login-error {
  display: block;
  height: 25px;
  margin-top: -10px;
  margin-bottom: 0;
  white-space: nowrap;
}
.m-btn {
  width: 325px;
  height: 50px;
  font-size: 16px;
}
.m-reset {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.m-foot {
  color: #999999;
}
a,
a:hover {
  color: #0056ff;
}
</style>
