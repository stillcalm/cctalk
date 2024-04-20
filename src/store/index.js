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
      console.log("fL",friendsList);
    },
    UPDATE_CHAT_EXISTING_MESSAGES(state, { chatUuid, newMessages }) {
      if (!state.chatExistingMessages[chatUuid]) {
        state.chatExistingMessages[chatUuid] = new Set();
      }
      newMessages.forEach((msg) => {
        state.chatExistingMessages[chatUuid].add(msg.mes_uuid);
      });
    },
    ADD_MESSAGE(state, {  message }) {
      console.log("add message",message);
      if (!state.chatExistingMessages[message.chat_uuid]) {
        state.chatExistingMessages[message.chat_uuid] = new Set();
      }
      state.chatExistingMessages[message.chat_uuid].add(message.mes_uuid);
         
      const updatedFriendsList = state.friendsList.map((friend) => {
        if (friend.chat_uuid === message.chat_uuid) {
          return {
            ...friend,
            messages: [...(friend.messages || []), message],
          };
        }
        return friend;
      });
      state.friendsList = updatedFriendsList;
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
        const chatUuidList = fList.data.friendsList.map(
          (friend) => friend.chat_uuid
        );
        const cList = await getChatsByChatUuid(chatUuidList);
        const friendsList = fList.data.friendsList.map((friend, index) => {
          return {
            ...friend,
            chat: cList.data.chats[index],
          };
        });
        commit("UPDATE_FRIENDS_LIST", friendsList);
      } catch (error) {
        console.error("Error fetching friend list:", error);
      }
    },
    async fetchHistoryMessages({ commit, state }, chatInfo) {
      try {
        const messagesList = await getMessagesByChatUuid(chatInfo.chatUuid);
        const newMessages = messagesList.data.messages.filter((msg) => {
          const existingMessagesSet =
            state.chatExistingMessages[chatInfo.chatUuid] || new Set();
          return !existingMessagesSet.has(msg.mes_uuid);
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
