<template>
  <div class="login-container">
    <div class="login-form">
      <h2 class="title">CCtalk 登录</h2>
      <div class="m-desc"></div>
      <div class="m-form-group">
        <el-input
          v-model="info.userName"
          class="m-input"
          placeholder="CCtalk账号或邮箱"
          :prefix-icon="User"
        />
      </div>
      <div class="m-form-group">
        <el-input
          v-model="info.password"
          class="m-input"
          placeholder="密码"
          :prefix-icon="Lock"
          show-password
        />
      </div>
      <div class="m-form-group login-error">
        <transition name="el-fade-in-linear">
          <div v-if="errorMessage" class="el-form-item__error">
            {{ errorMessage }}
          </div>
        </transition>
      </div>
      <div class="option">
        <div class="m-from-small-group">
          <el-checkbox
            v-model="checked1"
            label="同意并遵守隐私协议"
            size="small"
            text-color="#0056ff"
          />
        </div>
        <div class="m-from-small-group">
          <el-checkbox v-model="checked2" label="15天免登录" size="small" />
        </div>
      </div>
      <div class="m-form-group">
        <el-button class="m-btn" type="primary" @click="debounceLogin"
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
</template>

<script setup>
import { ref, reactive } from "vue";
import { Lock, User } from "@element-plus/icons-vue";
import router from "../router";
import { login } from "../http/api/user";
import { debounce } from "../utils/index";

const checked1 = ref(false);
const checked2 = ref(false);
const errorMessage = ref(0);

const info = reactive({
  userName: "",
  password: "",
});

const handleErrorMessage = (message) => {
  errorMessage.value = message;
  setTimeout(() => {
    errorMessage.value = "";
  }, 2000);
};

const handleLogin = () => {
  login({
    username: info.userName,
    password_hash: info.password,
  })
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        router.push({ path: "/home" });
      } else {
        handleErrorMessage("意外错误");
      }
    })
    .catch((error) => {
      console.log(error);
      handleErrorMessage("用户名或密码错误");
    });
};

const debounceLogin = debounce(handleLogin, 250, true);

/* onMounted(() => {
  const store = useStore();
  const token = localStorage.getItem("token");
  if (token) {
    router.push({ path: "/home" });
  }
}); */
</script>

<style lang="less" scoped>
.title {
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin: 0;
  padding: 10px 0 0;
  text-align: center;
  color: #222;
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
.el-form-item__error {
  font-size: 12px;
  color: red;
  line-height: 25px;
  float: left;
  padding-left: 5px;
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
a,
a:hover {
  color: #0056ff;
}
</style>
