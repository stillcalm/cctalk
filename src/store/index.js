import { createStore } from "vuex";
import { getFriendsList } from "../request/api/friend";
import {
  getChatsByChatUuid,
  getMessagesByChatUuid,
} from "../request/api/chats";

const store = createStore({
  state() {
    return {
      // 定义用于存储接口数据的 state
      friendsList: [],
      chatsList: [],
    };
  },
  getters: {
    // 如果需要的话，可以定义一个 getter 来处理或格式化 friendsList
    friendsList: (state) => state.friendsList,
  },
  mutations: {
    UPDATE_FRIENDS_LIST(state, friendsList) {
      state.friendsList = friendsList;
    },
    UPDATE_FRIENDS_WITH_MESSAGES(state, updatedFriendsList) {
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
        commit("UPDATE_FRIENDS_LIST", fList.data.friendsList); // 提交 mutation 来更新朋友列表状态

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
    async fetchHistoryMessages({ commit, state }, uuid, chatUuid) {
      const messagesList = await getMessagesByChatUuid(chatUuid); // 假设这个函数返回了正确的消息列表
      const updatedFriendsList = state.friendsList.map((friend) => {
        if (friend.uuid === uuid) {
          // 如果找到对应 uuid 的朋友，将消息添加到他们的消息列表中
          return {
            ...friend,
            messages: [
              ...(friend.messages || []),
              ...messagesList.data.messages,
            ], // 假设 messages.data.messages 是从 API 返回的消息数组
          };
        }
        return friend; // 如果不是对应的朋友，则返回原样
      });
      console.log(updatedFriendsList.messages);
      commit("UPDATE_FRIENDS_WITH_MESSAGES", updatedFriendsList); // 提交新的更新操作
    },
  },
});

export default store;
