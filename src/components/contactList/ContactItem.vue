<template>
  <div :class="{ active: active }">
    <div class="list-item">
      <div class="left">
        <div class="user-icon">
          <div>
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
          </div>
        </div>
      </div>
      <div class="right">
        <div class="name">{{ props.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "默认名称",
  },
  active: {
    type: Boolean,
    default: false,
  }
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
.right {
  flex-grow: 1;
  display: flex;
  align-items: center;
}
.name {
  text-align: left;
  padding-left: 10px;
  font-size: 15px;
  color: #333;
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

.time {
  text-align: left;
  font-size: 12px;
  color: #999;
  padding-top: 15px;
}
</style>
