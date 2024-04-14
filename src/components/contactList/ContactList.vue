<template>
  <el-scrollbar class="bc" v-if="contacts.length > 0">
    <ContactItem
      v-for="contact in contacts"
      :key="contact.uuid"
      :nickname="contact.nickname"
      :active="current === contact.uuid"
      @click="handleContactClick(contact.uuid)"
    >
    </ContactItem>
  </el-scrollbar>
  <div class="bc" v-else>No friends</div>
</template>

<script setup>
import { ref, reactive } from "vue";

const emits = defineEmits(["handleContactClick"]);
let current = ref(null);

const props = defineProps({
  friendsList: {
    type: Array,
    default: () => [],
  },
});
let contacts = reactive(props.friendsList);

const handleContactClick = (uuid) => {
  current.value = uuid;
  emits("handleContactClick", current.value);
};

</script>

<style scoped>
.bc {
  width: 100%;
  height: 100%;
}
</style>
