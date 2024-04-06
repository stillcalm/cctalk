<template>
  <div class="g-doc m-head">
    <div class="head-nav">
      <a href="http://localhost:8080/login" class="logo" title="CCtalk"></a>
    </div>
  </div>
  <div class="g-doc m-body">
    <Transition name="fade">
      <RouterView></RouterView>
    </Transition>
  </div>
  <div class="g-doc m-foot">© 2024-2024</div>
</template>

<script setup></script>

<style lang="less" scoped>
.g-doc {
  min-width: 1200px;
  max-width: 1920px;
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
.logo {
  width: 170px;
  height: 70px;
  display: block;
  background: url(https://n1image.hjfile.cn/res7/2020/07/27/0725865d1a73294452a9314747e87dc9.png)
    0 no-repeat;
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
.m-foot {
  color: #999999;
}
a,
a:hover {
  color: #0056ff;
}
</style>
