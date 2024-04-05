<template>
  <el-container>
    <el-aside class="left-aside">
      <ChatList></ChatList>
    </el-aside>
  <el-container>
    Welcome
  </el-container>
<!--     <el-container class="bgc">
      <el-header class="header">Header</el-header>
      <el-main>Main</el-main>
      <el-footer class="input-wrapper">
        <el-input
          v-model="message"
          style="width: 655px; height: 50px"
          type="textarea"
          resize="none"
          :rows="2"
          placeholder="Enter 发送信息,Shift + Enter 换行"
        >
        </el-input>
        <div class="function">
          <el-icon><Sunny /></el-icon>
          <el-icon><Picture /></el-icon>
          <el-icon><FolderRemove /></el-icon>
        </div>
      </el-footer>
    </el-container>
    <el-aside class="right-aside bgc">
      <div class="setting">
        <el-dropdown @command="handleCommand" trigger="click">
          <el-link :icon="Tools" :underline="false"></el-link>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="a">举报</el-dropdown-item>
              <el-dropdown-item command="b">删除好友</el-dropdown-item>
              <el-dropdown-item command="c">移至黑名单</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-aside> -->
    
  </el-container>
</template>

<script setup>
import ChatList from "@/components/chatList/ChatList.vue";
/* import mqtt from "mqtt"; */
/* import { Tools, FolderRemove, Sunny, Picture } from "@element-plus/icons-vue";
import { ref } from "vue";

const message = ref(""); */

/* let client = mqtt.connect("ws://localhost", );
const published = client.publish("test", "hello", { qos: 1, retain: true }); */
</script>

<style>
.bgc {
  background-color: #f6f8fb;
}
.header {
  border-bottom: 1px solid #e8e8e8;
}
.left-aside {
  width: 250px;
  height: 610px;
  border-right: 1px solid #e8e8e8;
}
.right-aside {
  width: 50px;
  height: 610px;
  border-left: 1px solid #e8e8e8;
}
.setting {
  width: 100%;
  height: 7%;
  display: flex;
  justify-content: center;
  align-items: top;
}
.input-wrapper{
  position: relative;
}

.function{
  font-size: 25px;
  position: absolute;
  float: right;
  top: 13px;
  right: 40px;
}

.el-textarea__inner::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.el-textarea__inner::-webkit-scrollbar-thumb {
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  background-color: #c3c3c3;
}
.el-textarea__inner::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
