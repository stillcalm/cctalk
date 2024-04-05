<template>
  <el-container>
    <el-aside class="left-aside">
      <ContactList @FatherClick="FatherClick"></ContactList>
    </el-aside>
    <el-container>
      
    </el-container>
  </el-container>
</template>

<script setup>

const FatherClick = () => {
  console.log("@父组件----我被调用了");
}

</script>

<style>
.left-aside {
  width: 250px;
  height: 610px;
  border-right: 1px solid #e8e8e8;
}
</style>
