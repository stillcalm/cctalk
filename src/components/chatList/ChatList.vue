<template>
  <el-scrollbar class="bc" v-if="chats.length > 0">
    <ChatItem
      v-for="chat in chats"
      :key="chat.message"
      :name="chat.name"
      :message="chat.message"
      :active="current === chat.uuid"
      @click="handleChatClick(chat.uuid)"
    >
    </ChatItem>
  </el-scrollbar>
  <div class="bc" v-else></div>
</template>

<script setup>
import { reactive, ref } from "vue";

let current = ref(null);
const emits = defineEmits(["handleChatClick"]);

const handleChatClick = (uuid) => {
  current.value = uuid;
  emits("handleChatClick", current.value);
};

const chats = reactive([
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
.bc {
  width: 100%;
  height: 100%;
}
</style>
