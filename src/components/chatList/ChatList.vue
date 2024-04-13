<template>
  <el-scrollbar class="bc" v-if="chats.length > 0">
    <ChatItem
      v-for="chat in chats"
      :key="chat.message"
      :chatInfo="{
        nickname: chat.nickname,
        avatar: chat.avatar,
        message: chat.latsMessage.content,
        time: chat.latsMessage.time,
      }"
      :active="currentUUID === chat.uuid"
      @click="handleChatClick(chat.uuid)"
    >
    </ChatItem>
  </el-scrollbar>
  <div class="bc" v-else></div>
</template>

<script setup>
import { reactive, ref } from "vue";

let currentUUID = ref(null);
const emits = defineEmits(["handleChatClick"]);

const handleChatClick = (uuid) => {
  currentUUID.value = uuid;
  emits("handleChatClick", currentUUID.value);
  getHistoryMessages();
};

const getHistoryMessages = async () => {
  // 获取历史消息
};

const chats = reactive([
  {
    uuid: "9ef25779-f0b9-48ae-b833-f4853f1dd908",
    username: "wean1",
    nickname: "吴志浩",
    avatar: "https://joeschmoe.io/api/v1/random",
    latsMessage: {
      content: "I'm fine, thank you.",
      time: "12:00",
    },
  },
  {
    uuid: "a7554f91-63a4-4fa4-b426-40d3fba3a4d2",
    username: "wean2",
    nickname: "wean2",
    avatar: "https://joeschmoe.io/api/v1/random",
    latsMessage: {
      content: "I'm fine, thank you.",
      time: "12:00",
    },
  },
]);

/* const chats = reactive([
  {
    name: "John",
    uuid: "11111111",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "John",
    message: "Hello",
    time: "12:00",
  },
  {
    name: "Mike",
    uuid: "22222222",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Mike",
    message: "Hi",
    time: "12:01",
  },
  {
    name: "Tom",
    uuid: "33333333",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Tom",
    message: "How are you?",
    time: "12:04",
  },
  {
    name: "Mary",
    uuid: "44444444",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Mary",
    message: "I'm fine, thank you.",
    time: "12:04",
  },
  {
    name: "Jack",
    uuid: "55555555",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Jack",
    message: "What's up?",
    time: "12:04",
  },
  {
    name: "Lucy",
    uuid: "66666666",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Lucy",
    message: "I'm good, thanks.",
    time: "12:04",
  },
  {
    name: "Jerry",
    uuid: "77777777",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Jerry",
    message: "How's it going?",
    time: "12:04",
  },
  {
    name: "Emma",
    uuid: "88888888",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Emma",
    message: "I'm good, thanks.",
    time: "12:04",
  },
  {
    name: "Emily",
    uuid: "99999999",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Emily",
    message: "I'm good, thanks.",
    time: "12:04",
  },
  {
    name: "Emma",
    uuid: "10101010",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Emma",
    message: "I'm good, thanks.",
    time: "12:04",
  },
  {
    name: "Nike",
    uuid: "11145411",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Nike",
    message: "I'm good, thanks.",
    time: "12:04",
  },
  {
    name: "Luce",
    uuid: "1115411",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Luce",
    message: "I'm good, thanks.",
    time: "12:04",
  },
]); */
</script>

<style scoped>
.bc {
  width: 100%;
  height: 100%;
}
</style>
