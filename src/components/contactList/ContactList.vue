<template>
  <el-scrollbar class="bc" v-if="contacts.length > 0">
    <ContactItem
      v-for="contact in contacts"
      :key="contact.name"
      :name="contact.name"
      @click="moreInfo"
    >
    </ContactItem>
  </el-scrollbar>
  <div class="bc" v-else>No friends</div>
</template>

<script setup>
import { reactive } from "vue";
import ContactItem from "./ContactItem.vue";

const emits = defineEmits(["FatherClick"]);

const moreInfo = () => {
  emits("FatherClick");
  console.log("moreInfo");
};

const contacts = reactive([
  { name: "John" },
  { name: "Jane" },
  { name: "Bob" },
  { name: "Alice" },
  { name: "Mike" },
  { name: "Emily" },
  { name: "David" },
  { name: "Sarah" },
  { name: "Michael" },
  { name: "Emma" },
  { name: "Matthew" },
  { name: "Olivia" },
  { name: "James" },
  { name: "Ava" },
  { name: "Benjamin" },
  { name: "Isabella" },
  { name: "Daniel" },
  { name: "Sophia" },
  { name: "Logan" },
]);
</script>

<style>
.bc {
  width: 100%;
  height: 100%;
}
</style>
