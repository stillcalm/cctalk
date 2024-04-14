<template>
  <el-container>
    <el-aside class="left-aside">
      <ContactList
        @handleContactClick="FatherClick"
        :friendsList="contacts"
      ></ContactList>
    </el-aside>
    <el-container v-if="current">
      <div
        v-for="contact in contacts"
        :key="contact.uuid"
        v-show="current === contact.uuid"
        class="contact-container"
      >
        <el-container>
          <el-header class="user-info-container">
            <div>
              <el-avatar>
                {{ contact.nickname.slice(0, 4) }}
              </el-avatar>
            </div>

            <!-- <el-image
              style="width: 40px; height: 40px"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            /> -->
            <div class="right-container">
              <div>{{ contact.nickname }}</div>
              <div>{{ contact.username }}</div>
            </div>
          </el-header>
          <el-main>
            <div class="signature">
              {{ contact.signature ? contact.signature : "暂无签名" }}
            </div>
          </el-main>
        </el-container>
      </div>
    </el-container>
    <el-container v-else>
      <div>Welcome</div>
    </el-container>
  </el-container>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { getFriendList } from "@/request/api/friend";

const current = ref();

const FatherClick = (val) => {
  current.value = val;
};

let contacts = reactive([]);

const handleGetFriendList = () => {
  getFriendList({
    uuid: localStorage.getItem("uuid"),
  }).then((res) => {
    // 使用 splice 触发响应式更新
    contacts.splice(0, contacts.length, ...res.data.friendsList);
  });
};

onMounted(() => {
  handleGetFriendList();
});
</script>

<style scoped>
.user-info-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.left-aside {
  width: 250px;
  height: 610px;
  border-right: 1px solid #e8e8e8;
}
.contact-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 200px;
}
.right-container {
  padding: 0;
}
</style>
