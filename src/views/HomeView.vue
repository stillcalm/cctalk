<template>
  <div class="im-app-wrapper">
    <div class="container">
      <div class="common-layout">
        <el-container>
          <el-header class="header">
            <el-input
              v-model="input2"
              style="width: 480px"
              placeholder="搜索好友或群组"
              :suffix-icon="Search"
            />
            <el-dropdown @command="handleCommand">
              <el-button class="top-search">
                <el-icon><Plus /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="a">添加好友</el-dropdown-item>
                  <el-dropdown-item command="b">创建群组</el-dropdown-item>
                  <el-dropdown-item command="c">加入群组</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-header>

          <el-container>
            <!-- left -->
            <el-aside class="left">
              <div class="user-icon" @click="userInfoVisible = true">
                <div>
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                  />
                </div>
              </div>
              <el-menu
                default-active="chat"
                class="el-menu-vertical"
                :collapse="true"
                @select="handleSelect"
              >
                <el-menu-item index="chat">
                  <el-icon><ChatDotRound /></el-icon>
                </el-menu-item>
                <el-menu-item index="note">
                  <el-icon><Notebook /></el-icon>
                </el-menu-item>
              </el-menu>
              <div class="expand">
                <el-button
                  circle
                  :icon="SwitchButton"
                  @click="confirmLogout = true"
                ></el-button>
              </div>
            </el-aside>

            <el-main style="padding: 0" v-show="isChat">
              <ChatView></ChatView>
            </el-main>

            <el-main style="padding: 0" v-show="isNote">
              <ContactView></ContactView>
            </el-main>
          </el-container>
        </el-container>
      </div>
    </div>
  </div>

  <el-dialog
    v-model="confirmLogout"
    title="提示"
    width="500"
    draggable
    overflow
  >
    <span>是否要退出</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="confirmLogout = false">取消</el-button>
        <el-button type="primary" @click="(confirmLogout = false), logOut()">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>

  <el-dialog
    v-model="userInfoVisible"
    title="提示"
    width="500"
    :modal="false"
    draggable
    overflow
  >
    <span>信息</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="userInfoVisible = false">取消</el-button>
        <el-button type="primary" @click="(userInfoVisible = false), logOut()">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from "vue";
import router from "../router";
import ChatView from "./ChatView.vue";
import ContactView from "./ContactView.vue";
import {
  SwitchButton,
  ChatDotRound,
  Notebook,
  Plus,
} from "@element-plus/icons-vue";

const isChat = ref(true);
const isNote = ref(false);
const confirmLogout = ref(false);
const userInfoVisible = ref(false);

const handleSelect = (key) => {
  if (key === "chat") {
    isChat.value = true;
    isNote.value = false;
  } else {
    isChat.value = false;
    isNote.value = true;
  }
};
const logOut = () => {
  console.log("退出");
  router.replace({ path: "/login" });
};
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

.top-search {
  width: 25px;
  margin-left: 25px;
  background-color: #f2f5f8;
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
.user-icon:hover{
  cursor: pointer;
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
