<template>
  <el-scrollbar class="bc" v-if="contacts.length > 0">
    <ContactItem
      v-for="contact in contacts"
      :key="contact.uuid"
      :name="contact.name"
      @click="console.log(contact.uuid),moreInfo"

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
  { 
    name: "John",
    uuid: "11111111",
  },
  { 
    name: "Jane",
    uuid: "11111112",
  },
  { name: "Bob",
    uuid: "11111113",
  },
  { name: "Alice",
    uuid: "11111114",
  },
  { name: "Mike",
    uuid: "11111115",
  },
  { name: "Emily",
    uuid: "11111116",
  },
  { name: "David",
    uuid: "11111117",
  },
  { name: "Sarah",
    uuid: "11111118",
  },
  { name: "Michael",
    uuid: "11111119",
  },
  { name: "Emma",
    uuid: "11111120",
  },
  { name: "Matthew",
    uuid: "11111121",
  },
  { name: "Olivia",
    uuid: "11111122",
  },
  { name: "James",
    uuid: "11111123",
  }
]);
</script>

<style>
.bc {
  width: 100%;
  height: 100%;
}
</style>
