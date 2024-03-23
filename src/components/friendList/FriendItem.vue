<template>
  <div>
    <div class="list-item">

      <div class="right">
        <div class="user-icon">
          <div>
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
          </div>
        </div>
      </div>

      <div class="center">
        <div class="name">{{ props.name}}</div>
        <div class="message">{{ props.message }}</div>
      </div>

      <div class="left">
        <div class="time">
            15:20
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
    name: {
        type: String,
        default: '马东'
    },
    message: {
        type: String,
        default: '你好'
    }
})
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
.right {
  width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.center {
  flex-grow: 1;
}
.name{
    text-align: left;
    padding-top: 10px;
}
.message{
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
.left {
  width: 50px;
  height: 100%;
}
.time{
    text-align: left;
    font-size: 12px;
    color: #999;
    padding-top: 15px;
}
</style>
