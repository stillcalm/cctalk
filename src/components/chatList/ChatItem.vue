<template>
  <div v-if="chatInfo.status === 'confirmed'" :class="{ active: props.active }">
    <div class="list-item">
      <div class="left">
        <div class="user-icon">
          <div>
            <el-avatar>
              {{ chatInfo.nickname.slice(0, 1) }}
            </el-avatar>
          </div>
        </div>
      </div>

      <div class="center">
        <div class="name">{{ chatInfo.nickname }}</div>
        <div class="message">{{ chatInfo.message }}</div>
      </div>

      <div class="right">
        <div class="time">{{ chatInfo.time }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  chatInfo: {
    type: Object,
    default: () => ({}),
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.user-icon {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.list-item {
  width: 100%;
  height: 60px;
  display: flex;
}
.list-item:hover {
  background-color: #f5f5f5;
}
.active {
  background-color: #f5f5f5;
}
.left {
  width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.center {
  flex-grow: 1;
}
.name {
  text-align: left;
  padding-top: 10px;
}
.message {
  text-align: left;
  font-size: 12px;
  color: #999;
  padding-top: 5px;
}
.user-icon > div {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.right {
  width: 50px;
  height: 100%;
}
.time {
  text-align: left;
  font-size: 12px;
  color: #999;
  padding-top: 15px;
}
</style>
