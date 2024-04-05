<template>
  <el-scrollbar class="bc" v-if="friends.length > 0">
    <ChatItem
    v-for="friend in friends"
    :key="friend.message"
    :name="friend.name"
    :message="friend.message"
    >
    </ChatItem>
  </el-scrollbar>
  <div class="bc" v-else></div>
</template>

<script setup>
import { reactive } from 'vue';

const friends = reactive([
  { name: 'John', message: '30' },
  { name: 'Jane', message: '25' }, 
  { name: 'Bob', message: '35' },
  { name: 'Alice', message: '28' },
  { name: 'Mike', message: '32' },
  { name: 'Emily', message: '27' },
  { name: 'David', message: '31' },
  { name: 'Sarah', message: '29' },
  { name: 'Daniel', message: '33' },
  { name: 'Olivia', message: '26' },
  { name: 'James', message: '34' },
  { name: 'Emma', message: '27' },
  { name: 'Michael', message: '32' },
  { name: 'Sophia', message: '28' },
  { name: 'William', message: '31' },
])

</script>

<style>
.bc{  
  width: 100%;
  height: 100%;
}
</style>
