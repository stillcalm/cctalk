<template>
  <el-scrollbar class="bc" v-if="contacts.length > 0">
    <ChatItem
      v-for="contact in contacts"
      :key="contact.uuid"
      :chatInfo="{
        status: contact.status ? contact.status : 0,
        nickname: contact.userInfo.nickname,
        avatar: contact.userInfo.avatar_url,
/*         message: contact.latsMessage,
        time: contact.latsMessage.time, */
      }"
      :active="currentUUID === contact.uuid"
      @click="handleChatClick(contact.uuid)"
    >
    </ChatItem>
  </el-scrollbar>
  <div class="bc" v-else>chatList</div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
let currentUUID = ref(null);
const emits = defineEmits(["handleChatClick"]);

/*
{
  uuid: "9ef25779-f0b9-48ae-b833-f4853f1dd908",
  username: "wean1",
  nickname: "吴志浩",
  avatar: "https://joeschmoe.io/api/v1/random",
  latsMessage: {
    content: "I'm fine, thank you.",
    time: "12:00",
  },
} 
 */

const handleChatClick = (uuid) => {
  currentUUID.value = uuid;
  emits("handleChatClick", currentUUID.value);
  getHistoryMessages();
};

const getHistoryMessages = async () => {
  // 获取历史消息
};

const contacts = computed(() => {
  const friendsList = store.state.friendsList;
  return friendsList ? friendsList : [];
});
</script>

<style scoped>
.bc {
  width: 100%;
  height: 100%;
}
</style>
