<template>
  <div class="reset-container">
    <div class="reset-form">
      <h2 class="title">密码重置</h2>
      <div class="m-desc"></div>
      <div class="m-form-group">
        <el-input
          v-model="info.email"
          class="m-input"
          placeholder="邮箱"
          :prefix-icon="Message"
        />
      </div>
      <div class="m-form-group">
        <el-input
          v-model="info.password"
          class="m-input"
          placeholder="请输入新的密码"
          :prefix-icon="Lock"
          show-password
        />
      </div>
      <div class="m-form-group">
        <el-input v-model="info.code" class="m-input" placeholder="验证码">
          <template #append>
            <el-button
              class="email-code"
              :disabled="isCoolingDown"
              @click="throttleSendVC"
              style="color: #0065ff; font-size: 14px; border-left: none"
              >{{ countDown < 60 ? `${countDown}s` : "获取验证码" }}
            </el-button>
          </template>
        </el-input>
      </div>
      <div class="m-form-group login-error">
        <transition name="el-fade-in-linear">
          <div v-if="errorMessage" class="el-form-item__error">
            {{ errorMessage }}
          </div>
        </transition>
      </div>

      <div class="m-form-group">
        <el-button class="m-btn" type="primary" @click="throttleRegister"
          >下一步</el-button
        >
      </div>
      <div class="m-reset">
        <span class="m-r-left">
          已有账号？
          <router-link to="/login">立即登录</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onUnmounted } from "vue";
import { Message, Lock } from "@element-plus/icons-vue";
import router from "../router";
import { register } from "../request/api/user";
import { throttle } from "../utils/utils";

const errorMessage = ref();
const isCoolingDown = ref(false);
const countDown = ref(60);
let timer = null;

const info = reactive({
  userName: "",
  password: "",
  email: "",
  emailCode: "",
});

// 发送验证码的方法
const sendVerificationCode = async () => {
  // 做一些验证，比如邮箱格式

  // 假设验证通过，开始发送验证码
  if (isCoolingDown.value) {
    // 如果正在倒计时，不执行发送
    return;
  }
  // 假设的发送验证码逻辑，这里需要替换为实际的API调用
  // const response = await fetch('/api/send-verification-code', { method: 'POST', body: { email: info.value.email } });
  // if (!response.ok) {
  //   // 处理错误情况
  // }

  // 假设发送成功，开始倒计时
  startCountdown();
};
// 开始倒计时的方法
const startCountdown = () => {
  isCoolingDown.value = true;
  countDown.value = 60;
  timer = setInterval(handleCountdown, 1000);
};
// 处理倒计时的方法
const handleCountdown = () => {
  if (countDown.value > 0) {
    countDown.value--;
  } else {
    clearInterval(timer);
    isCoolingDown.value = false;
    countDown.value = 60;
  }
};
const handleSendVC = () => {
  if (!isCoolingDown.value) {
    sendVerificationCode();
  }
};
const throttleSendVC = throttle(handleSendVC, 3000, true);

const handleErrorMessage = (message) => {
  errorMessage.value = message;
  setTimeout(() => {
    errorMessage.value = "";
  }, 2000);
};
const handleRegister = () => {
  register({
    username: info.userName,
    password_hash: info.password,
    email: info.email,
    emailCode: info.code,
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
      handleErrorMessage("验证码错误");
    });
};
const throttleRegister = throttle(handleRegister, 3000, true);

// 组件销毁时清除定时器
onUnmounted(() => {
  clearInterval(timer);
});
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

.reset-container {
  display: flex;
  text-align: center;
  justify-content: center;
  position: relative;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  float: none;
  margin: auto;
  width: 405px;
  height: 389px;
  padding-top: 30px;
  background: #fff;
}
.reset-form {
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
.m-input {
  width: 320px;
  height: 40px;
}
.login-error {
  display: block;
  height: 20px;
  margin-top: -10px;
  margin-bottom: 0;
  white-space: nowrap;
}
.m-btn {
  width: 160px;
  height: 40px;
  font-size: 14px;
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
