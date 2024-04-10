<template>
  <div>
    你好
  </div>
  <!--     <div :class="{ active: active }">
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
    </div> -->
</template>

<script setup>
const props = defineProps({
  isSelfMes: {
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

<style scoped></style>
