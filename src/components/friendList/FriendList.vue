<template>
  <div class="bc">
    <FriendItem 
    v-for="friend in friends"
    :key="friend.message"
    :name="name"
    :message="message"
    >
    </FriendItem>
  </div>
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
