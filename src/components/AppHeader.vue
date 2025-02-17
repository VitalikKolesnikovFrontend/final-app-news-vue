<script setup>
import AppFilter from './AppFilter.vue'
</script>
<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="cornflowerblue"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="1">App News</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Sort</template>
      <el-menu-item index="2-1">by date</el-menu-item>
      <el-menu-item index="2-2">by title</el-menu-item>
      <el-menu-item index="2-3">by author</el-menu-item>
    </el-sub-menu>
    <AppFilter />
  </el-menu>
</template>
<style>
body {
  margin: 0;
  background-color: black;
}
.el-menu-demo {
  display: flex;
  align-items: center;
}
</style>
