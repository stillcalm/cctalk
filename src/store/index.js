import { createStore } from "vuex";
import { getFriendsList } from "../request/api/friend";
import {
  getChatsByChatUuid,
  getMessagesByChatUuid,
} from "../request/api/chats";

const store = createStore({
  state() {
    return {
      friendsList: [],
      chatExistingMessages: {},
    };
  },
  getters: {
    // 如果需要的话，可以定义一个 getter 来处理或格式化 friendsList
    friendsList: (state) => state.friendsList,
  },
  mutations: {
    UPDATE_FRIENDS_LIST(state, friendsList) {
      state.friendsList = friendsList;
      console.log(friendsList);
    },
    UPDATE_CHAT_EXISTING_MESSAGES(state, { chatUuid, newMessages }) {
      // 为指定的chatUuid更新或创建existingMessages集合
      if (!state.chatExistingMessages[chatUuid]) {
        state.chatExistingMessages[chatUuid] = new Map();
      }
      const existingMessagesMap = state.chatExistingMessages[chatUuid];
      newMessages.forEach((msg) => {
        const key = `${msg.created_at}_${msg.sender_uuid}_${msg.receiver_uuid}`;
        existingMessagesMap.set(key, true);
      });
    },
  },
  actions: {
    async fetchFriendsList({ commit }) {
      try {
        if (localStorage.getItem("uuid") == null) {
          console.log("uuid为空");
        }
        const uuid = localStorage.getItem("uuid");
        const fList = await getFriendsList({ uuid: uuid });
        commit("UPDATE_FRIENDS_LIST", fList.data.friendsList);
        const chatUuidList = fList.data.friendsList.map(
          (friend) => friend.chat_uuid
        );
        console.log(chatUuidList);
        const cList = await getChatsByChatUuid(chatUuidList);
        const friendsList = fList.data.friendsList.map((friend, index) => {
          return {
            ...friend,
            chat: cList.data.chats[index],
          };
        });
        console.log(friendsList);
      } catch (error) {
        console.error("Error fetching friend list:", error);
      }
    },
    async fetchHistoryMessages({ commit, state }, chatInfo) {
      try {
        const messagesList = await getMessagesByChatUuid(chatInfo.chatUuid);
        const newMessages = messagesList.data.messages.filter((msg) => {
          const key = `${msg.created_at}_${msg.sender_uuid}_${msg.receiver_uuid}`;
          // 使用chatExistingMessages对象来检查消息是否已存在
          const existingMessagesMap =
            state.chatExistingMessages[chatInfo.chatUuid] || new Map();
          return !existingMessagesMap.has(key);
        });
        const updatedFriendsList = state.friendsList.map((friend) => {
          if (friend.uuid === chatInfo.uuid) {
            return {
              ...friend,
              messages: [...(friend.messages || []), ...newMessages],
            };
          }
          return friend;
        });
        commit("UPDATE_FRIENDS_LIST", updatedFriendsList);
        commit("UPDATE_CHAT_EXISTING_MESSAGES", {
          chatUuid: chatInfo.chatUuid,
          newMessages,
        });
      } catch (error) {
        console.error("Error fetching history messages:", error);
      }
    },
  },
});

export default store;
