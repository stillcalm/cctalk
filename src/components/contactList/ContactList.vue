<template>
  <el-scrollbar class="bc" v-if="contacts.length > 0">
    <ContactItem
      v-for="contact in contacts"
      :key="contact.uuid"
      :name="contact.name"
      :active="current === contact.uuid"
      @click="handleContactClick(contact.uuid)"
    >
    </ContactItem>
  </el-scrollbar>
  <div class="bc" v-else>No friends</div>
</template>

<script setup>
import { reactive, ref } from "vue";

const emits = defineEmits(["handleContactClick"]);
let current = ref(null);

const handleContactClick = (uuid) => {
  current.value = uuid;
  emits("handleContactClick", current.value);
};

const contacts = reactive([
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
  {
    name: "Nike",
    uuid: "11145411", 
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Nike",
    signature: "I'm Nike",
  },
  {
    name: "Luce",
    uuid: "1115411",
    avatar: "https://joeschmoe.io/api/v1/random",
    nickname: "Luce",
    signature: "I'm Luce",
  }
]);
</script>

<style>
.bc {
  width: 100%;
  height: 100%;
}

</style>
