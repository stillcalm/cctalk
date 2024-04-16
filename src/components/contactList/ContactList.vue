<template>
  <el-scrollbar class="bc" v-if="contacts.length > 0">
    <ContactItem
      v-for="contact in contacts"
      :key="contact.uuid"
      :nickname="contact.userInfo.nickname"
      :active="current === contact.uuid"
      @click="handleContactClick(contact.uuid)"
    >
    </ContactItem>
  </el-scrollbar>
  <div class="bc" v-else>No friends</div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const emits = defineEmits(["handleContactClick"]);
let current = ref(null);

const handleContactClick = (uuid) => {
  current.value = uuid;
  emits("handleContactClick", current.value);
};

const contacts = computed(() => {
  const friendsList = store.state.friendsList;
  return friendsList ? friendsList : [];
});
</script>

<style scoped>
.bc {
  width: 100%;
  height: 100%;
}
</style>
