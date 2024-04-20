<template>
  <el-container>
    <el-aside class="left-aside">
      <ChatList
        @handleChatClick="chatListClick"
        :chatsList="contacts"
      ></ChatList>
    </el-aside>
    <el-container v-if="currentUUID">
      <el-container
        class="bgc"
        v-for="chat in contacts"
        :key="chat.uuid"
        v-show="currentUUID === chat.uuid"
      >
        <el-header class="header-wrapper">
          <div>
            {{ chat.userInfo.nickname }}
          </div>
        </el-header>

        <el-main class="main">
          <el-scrollbar>
            <MessageItem
              v-for="mes in chat.messages"
              :key="mes.sender_uuid"
              :content="mes.content"
              :isSelfMessage="mes.sender_uuid !== myUUID"
            ></MessageItem>
          </el-scrollbar>
        </el-main>

        <el-footer class="input-wrapper">
          <el-input
            v-model="messageInput"
            style="width: 655px; height: 50px"
            type="textarea"
            resize="none"
            :rows="2"
            placeholder="Enter 发送信息,Shift + Enter 换行"
            @keyup.enter="handleSendMessage"
          >
          </el-input>
          <div class="function" @click="handleInputSelect">
            <el-icon class="input-icon"><Sunny /></el-icon>
            <el-icon class="input-icon"><Picture /></el-icon>
            <el-icon class="input-icon"><FolderRemove /></el-icon>
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
        <el-button @click="reportDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="reportDialogVisible = false">
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
        <el-button @click="deleteDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="deleteDialogVisible = false">
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
        <el-button @click="blacklistDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="blacklistDialogVisible = false">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, computed, onUnmounted, watch } from "vue";
import { useStore } from "vuex";
import { v4 as uuidv4 } from "uuid";
import { createClient, publish, subscribe } from "../request/mqtt";
import { Tools, FolderRemove, Sunny, Picture } from "@element-plus/icons-vue";
import { sendMessage } from "../request/api/chats";

const myUUID = localStorage.getItem("uuid");

const store = useStore();
let messageInput = ref("");
const currentUUID = ref();
const currentChatUuid = ref();
const client = ref();
const reportDialogVisible = ref(false);
const deleteDialogVisible = ref(false);
const blacklistDialogVisible = ref(false);
let hasSubscribed = false;

const contacts = computed(() => {
  const friendsList = store.state.friendsList;
  return friendsList ? friendsList : [];
});

const chatListClick = (val, chatVal) => {
  currentUUID.value = val;
  currentChatUuid.value = chatVal;
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

async function initClient() {
  try {
    const uuid = localStorage.getItem("uuid");
    const token = localStorage.getItem("token");
    const res = await createClient(uuid, token);
    client.value = res;

    // 监听消息
    client.value.on("message", (topic, message) => {
      const paredMes = JSON.parse(message.toString()) || {};
      console.log("收到消息：", topic, paredMes.content);

      store.commit("ADD_MESSAGE", {
        message: paredMes,
      });
    });
    
    handleSubscribe();

    // 订阅服务
    //client.value.subscribe("", { qos: 1 });
  } catch (err) {
    console.error("Failed to connect client", err);
  }
}

function handleSubscribe() {
  try {
    console.log(contacts.value);
    for (let i = 0; i < contacts.value.length; i++) {
      subscribe(client.value, `chat/${contacts.value[i].chat_uuid}`);
    }
  } catch (err) {
    console.error("Failed to subscribe", err);
  }
}

initClient();

watch(contacts, (newValue) => {
  // 检查 contacts 数组是否为空，并且之前没有订阅过
  if (newValue.length > 0 && !hasSubscribed && client.value) {  
    handleSubscribe();  
    hasSubscribed = true; // 标记为已订阅  
  }  
}, {  
  deep: true, // 因为我们关心数组内容的变化，所以使用深度监听  
  immediate: false // 不立即执行回调，只在contacts变化时执行  
}); 

const handleSendMessage = async (e) => {
  console.log("client11", client.value);
  if (e.code === "Enter") {
    if (!e.isComposing && !e.shiftKey) {
      // 阻止默认行为（如果需要）
      // e.preventDefault();
      const mes = messageInput.value;
      messageInput.value = "";
      if (mes.trim().length > 0) {
        const mes_uuid = uuidv4();
        const time = new Date().toLocaleTimeString();
        const MessageItem = {
          chat_uuid: currentChatUuid.value,
          mes_uuid: mes_uuid,
          sender_uuid: myUUID,
          receiver_uuid: currentUUID.value,
          content: mes,
          created_at: time,
        };
/*         store.commit("ADD_MESSAGE", {
          message: MessageItem,
        }); */

        await publish(
          client.value,
          `chat/${currentChatUuid.value}`,
          JSON.stringify(MessageItem)
        )
          .then(() => {
            console.log("send success");
          })
          .catch((err) => {
            console.log("err", err);
          });

        await sendMessage(MessageItem).catch((err) => {
          console.log("err", err);
        });
      }
    } else {
      // 如果正在输入，按下 Enter 键且是 Shift+Enter，则在输入框中插入换行符
      messageInput.value += "\n";
    }
  }
};

onUnmounted(() => {
  if (client.value && client.value.connected) {
    client.value.end(); // 断开连接
  }
});
</script>

<style scoped>
.bgc {
  background-color: #f6f8fb;
}
.header-wrapper {
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 18px;
}

.left-aside {
  width: 250px;
  height: 610px;
  border-right: 1px solid #e8e8e8;
}
.main {
  width: 710px;
  height: 400px;
  padding: 0;
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
.input-icon {
  padding-right: 5px;
  cursor: pointer;
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
