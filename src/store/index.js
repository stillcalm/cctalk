import { createStore } from "vuex";
import { getFriendsList } from "../request/api/friend";
import { getChatsByChatUuid } from "../request/api/chats";

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
  },
});

export default store;
