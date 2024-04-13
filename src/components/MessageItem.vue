<template>
  <div v-if="props.isSelfMessage" class="message-item-wrapper self">
    <div class="user-icon">
      <div>
        <el-image
          style="width: 40px; height: 40px"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
    </div>
    <div class="text-wrapper text-left">
      {{ props.content }}
    </div>
  </div>
  <div v-else class="message-item-wrapper other">
    <div class="text-wrapper text-right">
      {{ props.content }}
    </div>
    <div class="user-icon">
      <div>
        <el-image
          style="width: 40px; height: 40px"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isSelfMessage: {
    type: Boolean,
    default: false,
  },
  iconUrl: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.message-item-wrapper {
  display: flex;
  width: 100%;
  min-height: 40px;
  margin: 10px 0;
}
.self {
  justify-content: flex-start;
}
.other {
  justify-content: flex-end;
}
.text-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 278px;
  line-height: 23px;
  text-align: left;
  background-color: #ffffff;
  padding: 8px;
  border-radius: 8px;
}
.text-left::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 8px 8px 0;
  border-color: transparent #ffffff transparent transparent;
  left: -8px;
  top: 10px;
}
.text-right::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 0 8px 8px;
  border-color: transparent transparent transparent #e5f0f9;
  right: -8px;
  top: 10px;
}
.text-right {
  background-color: #e5f0f9;
}
.user-icon {
  margin: 0 10px;
  width: 40px;
  height: 40px;
}
</style>
