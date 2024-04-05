<template>
  <el-container>
    <el-aside class="left-aside">
      <ContactList @handleContactClick="FatherClick"></ContactList>
    </el-aside>
    <el-container v-if="current">
      <div
        v-for="contact in contactsInfo"
        :key="contact.uuid"
        v-show="current === contact.uuid"
      >
        {{ contact.name }}
      </div>
    </el-container>
    <el-container v-else>
      <div>Welcome</div>
    </el-container>
  </el-container>
</template>

<script setup>
import { reactive, ref } from "vue";

const current = ref();

const FatherClick = (val) => {
  current.value = val;
};

const contactsInfo = reactive([
  {
    name: "John",
    uuid: "11111111",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "John",
    signature: "I'm John",
  },
  {
    name: "Mike",
    uuid: "22222222",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Mike",
    signature: "I'm Mike",
  },
  {
    name: "Tom",
    uuid: "33333333",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Tom",
    signature: "I'm Tom",
  },
  {
    name: "Mary",
    uuid: "44444444",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Mary",
    signature: "I'm Mary",
  },
  {
    name: "Jack",
    uuid: "55555555",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Jack",
    signature: "I'm Jack",
  },
  {
    name: "Lucy",
    uuid: "66666666",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Lucy",
    signature: "I'm Lucy",
  },
  {
    name: "Jerry",
    uuid: "77777777",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Jerry",
    signature: "I'm Jerry",
  },
  {
    name: "Emma",
    uuid: "88888888",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Emma",
    signature: "I'm Emma",
  },
  {
    name: "Emily",
    uuid: "99999999",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Emily",
    signature: "I'm Emily",
  },
  {
    name: "Emma",
    uuid: "10101010",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Emma",
    signature: "I'm Emily",
  },
]);
</script>

<style>
.left-aside {
  width: 250px;
  height: 610px;
  border-right: 1px solid #e8e8e8;
}
</style>
