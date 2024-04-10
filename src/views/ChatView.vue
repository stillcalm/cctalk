<template>
  <el-container>
    <el-aside class="left-aside">
      <ChatList @handleChatClick="FatherClick"></ChatList>
    </el-aside>
    <el-container v-if="current">
      <el-container
        class="bgc"
        v-for="chat in chatsInfo"
        :key="chat.uuid"
        v-show="current === chat.uuid"
      >
        <el-header class="header">{{ chat.name }}</el-header>
        <el-main>
          <MessageItem
            v-for="message in messageList"
            :key="message.uuid"
            :message="message.message"
          ></MessageItem>
        </el-main>
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
                <!--               <el-dropdown-item command="c">移至黑名单</el-dropdown-item> -->
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-aside>
    </el-container>
    <el-container v-else>
      <div>Welcome</div>
    </el-container>
  </el-container>

  <el-dialog
    v-model="reportDialogVisible"
    title="举报"
    width="500"
    :modal="false"
    draggable
    append-to-body
  >
    <span>确定要举报吗</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>

  <el-dialog
    v-model="deleteDialogVisible"
    title="删除好友"
    width="400"
    :modal="false"
    draggable
    append-to-body
  >
    <span>删除后你将从对方联系人列表中消失，且以后不再接收此人的会话消息</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>

  <el-dialog
    v-model="blacklistDialogVisible"
    title="移至黑名单"
    width="500"
    :modal="false"
    draggable
    append-to-body
  >
    <span>你确定将以下联系人移至黑名单吗？</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
/* import mqtt from "mqtt"; */
import { ref, reactive } from "vue";
import { Tools, FolderRemove, Sunny, Picture } from "@element-plus/icons-vue";
import MessageItem from "@/components/MessageItem.vue";

/* let client = mqtt.connect("ws://localhost", );
const published = client.publish("test", "hello", { qos: 1, retain: true }); */

const message = ref("");
const current = ref();
const reportDialogVisible = ref(false);
const deleteDialogVisible = ref(false);
const blacklistDialogVisible = ref(false);
const messageList = reactive([
  {
    uuid: "11111111",
    message: "Hello, how are you?",
    time: "12:00",
  },
  {
    uuid: "22222222",
    message: "Hi, I'm fine, thank you.",
    time: "12:00",
  },
  {
    uuid: "11111111",
    message: "How's it going?",
    time: "12:00",
  },
  {
    uuid: "22222222",
    message: "I'm good, thanks.",
    time: "12:00",
  },
]);

const FatherClick = (val) => {
  current.value = val;
  //console.log(currentUUID.value);
};

const handleCommand = (command) => {
  if (command === "a") {
    reportDialogVisible.value = !reportDialogVisible.value;
  }
  if (command === "b") {
    deleteDialogVisible.value = !deleteDialogVisible.value;
  }
  if (command === "c") {
    blacklistDialogVisible.value = !blacklistDialogVisible.value;
  }
};

const chatsInfo = reactive([
  {
    name: "John",
    uuid: "11111111",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "John",
    message: "Hello",
  },
  {
    name: "Mike",
    uuid: "22222222",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Mike",
    message: "Hi",
  },
  {
    name: "Tom",
    uuid: "33333333",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Tom",
    message: "How are you?",
  },
  {
    name: "Mary",
    uuid: "44444444",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Mary",
    message: "I'm fine, thank you.",
  },
  {
    name: "Jack",
    uuid: "55555555",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Jack",
    message: "What's up?",
  },
  {
    name: "Lucy",
    uuid: "66666666",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Lucy",
    message: "I'm good, thanks.",
  },
  {
    name: "Jerry",
    uuid: "77777777",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Jerry",
    message: "How's it going?",
  },
  {
    name: "Emma",
    uuid: "88888888",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Emma",
    message: "I'm good, thanks.",
  },
  {
    name: "Emily",
    uuid: "99999999",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Emily",
    message: "I'm good, thanks.",
  },
  {
    name: "Emma",
    uuid: "10101010",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Emma",
    message: "I'm good, thanks.",
  },
  {
    name: "Nike",
    uuid: "11145411",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Nike",
    message: "I'm good, thanks.",
  },
  {
    name: "Luce",
    uuid: "1115411",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Luce",
    message: "I'm good, thanks.",
  },
]);
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
.input-wrapper {
  position: relative;
}

.function {
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
