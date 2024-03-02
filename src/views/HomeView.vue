<template>
  <div class="im-app-wrapper">
    <div class="container">
      <div class="common-layout">
        <el-container>
          <el-header class="header">Header</el-header>
          <el-container>
            <el-aside class="left">
              <div class="user-icon"></div>
              <el-menu
                default-active="2"
                class="el-menu-vertical"
                :collapse="true"
              >
                <el-menu-item index="1">
                  <el-icon><ChatDotRound /></el-icon>
                </el-menu-item>
                <el-menu-item index="2">
                  <el-icon><Notebook /></el-icon>
                </el-menu-item>
              </el-menu>
              <div class="expand">
                <el-icon :size="20"><ElementPlus /></el-icon>
              </div>
            </el-aside>
            <el-main>Main</el-main>
          </el-container>
        </el-container>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Menu as ElementPlus,
  ChatDotRound,
  Notebook,
} from "@element-plus/icons-vue";
</script>

<style scoped>
.im-app-wrapper {
  width: 100vw;
  height: 100vh;
  min-height: 730px;
  background: #d8dee5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.container {
  width: 1070px;
  height: 670px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
}
.header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e8e8e8;
}
.left {
  width: 60px;
  height: 610px;
  border-right: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.user-icon {
  margin: 20px 0 25px 0;
  border-radius: 50%;
  border: 1px solid #e8e8e8;
}
.el-menu-vertical {
  width: 60px;
  border-right: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.expand {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
