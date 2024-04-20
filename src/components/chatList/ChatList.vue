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
      @click="handleChatClick(contact.uuid, contact.chat_uuid)"
    >
    </ChatItem>
  </el-scrollbar>
  <div class="bc" v-else>chatList</div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const currentUUID = ref(null);
const currentChatUuid = ref(null);
const emits = defineEmits(["handleChatClick"]);

const contacts = computed(() => {
  const friendsList = store.state.friendsList;
  return friendsList ? friendsList : [];
});
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

const handleChatClick = (uuid, chat_uuid) => {
  //console.log("handleChat", chat_uuid);
  currentUUID.value = uuid;
  currentChatUuid.value = chat_uuid
  emits("handleChatClick", currentUUID.value, currentChatUuid.value);
  getHistoryMessages(uuid, chat_uuid);
};

const getHistoryMessages = async (uuid, chat_uuid) => {
  try {
    await store.dispatch("fetchHistoryMessages", { uuid, chatUuid: chat_uuid }); // 修改这里的参数传递方式，使用对象解构更明确
    console.log("History messages fetched successfully"); // 在数据成功获取后打印消息
    // 如果需要，您可以在这里获取更新后的数据
    // const updatedFriendsList = store.state.friendsList;
    // ...使用 updatedFriendsList 做其他操作
  } catch (error) {
    console.error("Error fetching history messages:", error); // 捕获并打印错误
  }
};

</script>

<style scoped>
.bc {
  width: 100%;
  height: 100%;
}
</style>
