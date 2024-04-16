<template>
  <el-container>
    <el-aside class="left-aside">
      <ChatList @handleChatClick="chatListClick"
      :chatsList="contacts"></ChatList>
    </el-aside>
    <el-container v-if="currentUUID">
      <el-container
        class="bgc"
        v-for="chat in chatsInfo"
        :key="chat.uuid"
        v-show="currentUUID === chat.uuid"
      >
        <el-header class="header-wrapper">
          <div>
            {{ chat.nickname }}
          </div>
        </el-header>

        <el-main class="main">
          <el-scrollbar>
            <MessageItem
              v-for="mes in messageList"
              :key="mes.uuid"
              :content="mes.message"
              :isSelfMessage="mes.uuid !== myUUID"
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
            @keyup.enter="sendMessage"
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
/* import mqtt from "mqtt"; */
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import { Tools, FolderRemove, Sunny, Picture } from "@element-plus/icons-vue";
import MessageItem from "@/components/MessageItem.vue";

/* let client = mqtt.connect("ws://localhost", );
const published = client.publish("test", "hello", { qos: 1, retain: true }); */

const myUUID = localStorage.getItem("uuid");
/* const store = useStore();
const friendsList = computed(() => store.state.friendsList); */

const store = useStore();
let messageInput = ref("");
const currentUUID = ref();
const reportDialogVisible = ref(false);
const deleteDialogVisible = ref(false);
const blacklistDialogVisible = ref(false);

const contacts = computed(() => {
  const friendsList = store.state.friendsList;
  return friendsList ? friendsList : [];
});

/*
{
  uuid:
  message:
  time:
} 
 */
const messageList = reactive([
  {
    uuid: "d1f11e3d-a002-41f4-88b6-216a5d843df8",
    message:
      "我认为学生最重要的任务是学习和成长。这不仅仅包括专业知识的学习，还涵盖个人综合素质的提升。在学习过程中，我们需要培养自己的批判性思维、创新能力、团队协作能力等多方面的能力，以适应未来社会的发展需求。同时，我们也需要注重身心健康，保持积极的心态和良好的生活习惯，为未来的工作和生活打下坚实的基础。",
    time: "12:00",
  },
  {
    uuid: "d1f11e3d-a002-41f4-88b6-216a5d843df8",
    message: "Hi, I'm fine, thank you.",
    time: "12:00",
  },
  {
    uuid: "274e4357-e60c-47f8-b04a-f2798e53a003",
    message: "How's it going?",
    time: "12:00",
  },
  {
    uuid: "d1f11e3d-a002-41f4-88b6-216a5d843df8",
    message: "I'm good, thanks.",
    time: "12:00",
  },
  {
    uuid: "274e4357-e60c-47f8-b04a-f2798e53a003",
    message: "I'm good, thanks.",
    time: "12:00",
  },
  {
    uuid: "d1f11e3d-a002-41f4-88b6-216a5d843df8",
    message: "I'm good, thanks.",
    time: "12:00",
  },
  {
    uuid: "274e4357-e60c-47f8-b04a-f2798e53a003",
    message: "I'm good, thanks.",
    time: "12:00",
  },
  {
    uuid: "d1f11e3d-a002-41f4-88b6-216a5d843df8",
    message: "I'm good, thanks.",
    time: "12:00",
  },
  {
    uuid: "274e4357-e60c-47f8-b04a-f2798e53a003",
    message: "I'm good, thanks.",
    time: "12:00",
  },
  {
    uuid: "d1f11e3d-a002-41f4-88b6-216a5d843df8",
    message: "I'm good, thanks.",
    time: "12:00",
  },
  {
    uuid: "274e4357-e60c-47f8-b04a-f2798e53a003",
    message: "I'm good, thanks.",
    time: "12:00",
  },
  {
    uuid: "d1f11e3d-a002-41f4-88b6-216a5d843df8",
    message: "I'm good, thanks.",
    time: "12:00",
  },
  {
    uuid: "274e4357-e60c-47f8-b04a-f2798e53a003",
    message: "I'm good, thanks.",
    time: "12:00",
  },
]);

const chatListClick = (val) => {
  currentUUID.value = val;
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

const sendMessage = (e) => {
  if (e.code === "Enter") {
    if (!e.isComposing && !e.shiftKey) {
      //e.preventDefault();
      const mes = messageInput.value;
      messageInput.value = "";
      if (mes.length > 0) {
        chatsInfo.push({
          uuid: "22222222",
          message: mes,
          time: "12:00",
        });
      }
    } else {
      messageInput.value += "\n";
    }
  }
};

/* const newLine = (event) => {
  event.preventDefault();  
} */
const chatsInfo = reactive([
  {
    uuid: "04fb4516-1847-4af4-8699-fe3285d1dff3",
    username: "wean1",
    nickname: "吴志浩",
    avatar: "https://joeschmoe.io/api/v1/random",
    messageList: [
      { content: "Hello", time: "12:00" },
      { content: "How are you?", time: "12:01" },
      { content: "I'm fine, thank you.", time: "12:02" },
    ],
  },
  {
    uuid: "274e4357-e60c-47f8-b04a-f2798e53a003",
    username: "wean2",
    nickname: "wean2",
    avatar: "https://joeschmoe.io/api/v1/random",
    messageList: [
      { content: "Hi", time: "12:00" },
      { content: "How are you?", time: "12:01" },
      { content: "I'm fine, thank you.", time: "12:02" },
    ],
  },
]);
</script>

<style scoped>
.bgc {
  background-color: #f6f8fb;
}
.header-wrapper {
  width: 500px;
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
