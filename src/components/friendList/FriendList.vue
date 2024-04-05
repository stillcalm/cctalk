<template>
  <el-scrollbar class="bc" v-if="friends.length > 5">
    <FriendItem
    v-for="friend in friends"
    :key="friend.message"
    :name="name"
    :message="message"
    >
    </FriendItem>
  </el-scrollbar>
  <div class="bc" v-else></div>
</template>

<script setup>
import { reactive, toRef } from 'vue';

const friends = reactive([
  { name: 'John', message: '30' },
  { name: 'Jane', message: '25' }, 
  { name: 'Bob', message: '35' }
])

const { name, message } = toRef(friends)

</script>

<style>
.bc{  
  width: 100%;
  height: 100%;
}
</style>
