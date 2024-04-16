<template>
  <div class="im-app-wrapper">
    <div class="container">
      <div class="common-layout">
        <el-container>
          <el-header class="header">
            <div class="search-content" @click="searchVisible = true">
              <el-icon style="vertical-align: middle"><Search /></el-icon
              >搜索好友或群组
            </div>
            <el-dropdown @command="handleCommand" trigger="click">
              <el-button class="top-search">
                <el-icon><Plus /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="addFriend"
                    >添加好友</el-dropdown-item
                  >
                  <el-dropdown-item command="joinGroup"
                    >加入群组</el-dropdown-item
                  >
                  <el-dropdown-item command="createGroup"
                    >创建群组</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-header>

          <el-container>
            <el-aside class="left">
              <div class="user-icon" @click="getUserInfo">
                <div class="user-icon-wrapper">
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                  />
                </div>
              </div>
              <el-menu
                default-active="chat"
                class="el-menu-vertical"
                :collapse="true"
                @select="handleSelect"
              >
                <el-menu-item index="chat">
                  <el-icon><ChatDotRound /></el-icon>
                </el-menu-item>
                <el-menu-item index="note">
                  <el-icon><Notebook /></el-icon>
                </el-menu-item>
              </el-menu>
              <div class="expand">
                <el-button
                  circle
                  :icon="SwitchButton"
                  @click="confirmLogout = true"
                ></el-button>
              </div>
            </el-aside>

            <el-main style="padding: 0" v-show="isChat">
              <ChatView></ChatView>
            </el-main>

            <el-main style="padding: 0" v-show="isNote">
              <ContactView></ContactView>
            </el-main>
          </el-container>
        </el-container>
      </div>
    </div>
  </div>

  <!-- confirm logout -->
  <el-dialog
    v-model="confirmLogout"
    title="提示"
    width="500"
    draggable
    overflow
    plain
  >
    <span>是否要退出</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="confirmLogout = false">取消</el-button>
        <el-button type="primary" @click="(confirmLogout = false), logOut()">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>

  <!-- user info -->
  <el-dialog
    v-model="userInfoVisible"
    :show-close="false"
    width="350px"
    :modal="false"
    :destroy-on-close="true"
    plain
    draggable
    overflow
  >
    <template #header="{ titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">个人信息</h4>
      </div>
    </template>

    <el-form :model="form">
      <el-form-item label="账号" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" disabled />
      </el-form-item>
      <el-form-item label="昵称" :label-width="formLabelWidth">
        <el-input v-model="form.nickName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="性别" :label-width="formLabelWidth">
        <el-select v-model="form.gender" placeholder="请选择性别">
          <el-option label="未知" value="other" />
          <el-option label="男" value="male" />
          <el-option label="女" value="female" />
        </el-select>
      </el-form-item>
      <el-form-item label="手机" :label-width="formLabelWidth">
        <el-input
          v-model="form.phone"
          placeholder="请输入手机号"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="邮箱" :label-width="formLabelWidth">
        <el-input
          v-model="form.email"
          placeholder="请输入邮箱"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="签名" :label-width="formLabelWidth">
        <el-input
          v-model="form.signature"
          placeholder="请输入签名"
          autocomplete="off"
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <el-button @click="userInfoVisible = false"> 取消 </el-button>
      <el-button type="primary" @click="handleUpdateUserInfo"> 保存 </el-button>
    </template>
  </el-dialog>

  <el-dialog
    v-model="addFriendVisible"
    title="添加好友"
    width="400"
    :modal="false"
    :destroy-on-close="true"
    draggable
    append-to-body
  >
    <el-input placeholder="请输入账号" v-model="searchUsername"></el-input>
    <template #footer>
      <div class="dialog-footer">
        <div v-if="!isSearched">
          <el-button @click="addFriendVisible = false">取消</el-button>
          <el-button type="primary" @click="searchFriend"> 查找 </el-button>
        </div>
        <div v-else class="searched-user">
          <el-container>
            <el-aside width="40px">
              <el-image
                style="width: 40px; height: 40px"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              />
            </el-aside>
            <el-aside>
              <div class="searched-wrapper">
                <div>
                  {{ searchedUser.value.nickname }}
                </div>
                <div class="searched-describe">
                  {{
                    searchedUser.value.signature
                      ? searchedUser.value.signature
                      : "这个人很懒，还没有签名"
                  }}
                </div>
              </div>
            </el-aside>
          </el-container>
          <el-button type="success" @click="handleAddFriend(searchUsername)"
            >添加</el-button
          >
        </div>
      </div>
    </template>
  </el-dialog>

  <el-dialog
    v-model="joinGroupVisible"
    title="加入群组"
    width="400"
    :modal="false"
    :destroy-on-close="true"
    draggable
    append-to-body
  >
    <el-input placeholder="请输入群组ID"></el-input>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="joinGroupVisible = false">取消</el-button>
        <el-button type="primary" @click="joinGroupVisible = false">
          查找
        </el-button>
      </div>
    </template>
  </el-dialog>

  <el-dialog
    v-model="createGroupVisible"
    title="创建群组"
    width="400"
    :modal="false"
    :destroy-on-close="true"
    draggable
    append-to-body
  >
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="createGroupVisible = false">
          确定
        </el-button>
        <el-button @click="createGroupVisible = false">取消</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useStore } from "vuex";
import router from "../router";
import ChatView from "./ChatView.vue";
import ContactView from "./ContactView.vue";
import {
  getUserInfoById,
  getUserByUsername,
  updateUserInfo,
} from "../request/api/user";
import { addFriendByUsername } from "../request/api/friend";
import {
  SwitchButton,
  ChatDotRound,
  Notebook,
  Plus,
  Search,
} from "@element-plus/icons-vue";

const isChat = ref(true);
const isNote = ref(false);
const confirmLogout = ref(false);
const userInfoVisible = ref(false);
const addFriendVisible = ref(false);
const createGroupVisible = ref(false);
const joinGroupVisible = ref(false);
const isSearched = ref(false);
const searchUsername = ref("");
const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});
const searchedUser = reactive({});

const store = useStore();

const handleSelect = (key) => {
  if (key === "chat") {
    isChat.value = true;
    isNote.value = false;
  } else {
    isChat.value = false;
    isNote.value = true;
  }
};

const getUserInfo = () => {
  userInfoVisible.value = true;
  getUserInfoById({
    uuid: localStorage.getItem("uuid"),
  }).then((res) => {
    if (res.status === 200) {
      form.name = res.data.username;
      form.nickName = res.data.nickname;
      form.gender = res.data.gender;
      form.phone = res.data.phone_number;
      form.email = res.data.email;
      form.signature = res.data.signature;
    }
  });
};

const handleUpdateUserInfo = () => {
  addFriendVisible.value = false;
  updateUserInfo({
    uuid: localStorage.getItem("uuid"),
    nickname: form.nickName,
    gender: form.gender,
    phone_number: form.phone,
    email: form.email,
    signature: form.signature,
  }).then((res) => {
    if (res.status === 200) {
      //userInfoVisible.value = false;
    }
  });
  userInfoVisible.value = false;
};

const handleCommand = (command) => {
  if (command === "addFriend") {
    addFriendVisible.value = !addFriendVisible.value;
    isSearched.value = false;
  }
  if (command === "createGroup") {
    createGroupVisible.value = !createGroupVisible.value;
  }
  if (command === "joinGroup") {
    joinGroupVisible.value = !joinGroupVisible.value;
  }
};

const searchFriend = () => {
  getUserByUsername({
    username: searchUsername.value,
  }).then((res) => {
    if (res.status === 200) {
      isSearched.value = true;
      searchedUser.value = res.data;
    }
  });
};

const handleAddFriend = (_username) => {
  addFriendByUsername({
    uuid: localStorage.getItem("uuid"),
    friendName: _username,
  }).then((res) => {
    if (res.status === 200) {
      //userInfoVisible.value = false;
    }
  });
};

const formLabelWidth = "40px";

const logOut = () => {
  console.log("退出");
  localStorage.removeItem("token");
  localStorage.removeItem("uuid");
  router.replace({ path: "/login" });
};

/* const handleGetFriendList = () => {
  getFriendList({
    uuid: localStorage.getItem("uuid"),
  }).then((res) => {
    // 使用 splice 触发响应式更新
    contacts.splice(0, contacts.length, ...res.data.friendsList);

    store.commit("updateFriendsUuidList", res.data.friendsList);
  });
}; */

onMounted(async () => {
  try {
    // 调用 action 来获取并设置 friendsList
    await store.dispatch("fetchFriendsList");
  } catch (error) {
    console.error("Error fetching friends list in component:", error);
  }
});
</script>

<style scoped>
.im-app-wrapper {
  width: 100vw;
  height: 100vh;
  min-height: 730px;
  background: #d8dee5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.container {
  width: 1070px;
  height: 670px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
}
.header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e8e8e8;
}

.top-search {
  width: 25px;
  margin-left: 25px;
  background-color: #f2f5f8;
}
.search-content {
  cursor: pointer;
  width: 480px;
  height: 30px;
  border: 1px solid #e8e8e8;
  color: #acb2b9;
  line-height: 30px;
  background-color: #f2f5f8;
}
.searched-wrapper {
  padding-left: 10px;
  text-align: left;
}
.searched-describe {
  padding-top: 8px;
  color: #acb2b9;
}
.left {
  width: 60px;
  height: 610px;
  border-right: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.user-icon {
  margin: 20px 0 25px 0;
  border-radius: 50%;
  border: 1px solid #e8e8e8;
}
.user-icon:hover {
  cursor: pointer;
}
.user-icon-wrapper {
  width: 40px;
  height: 40px;
}
.el-menu-vertical {
  width: 60px;
  border-right: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.expand {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
