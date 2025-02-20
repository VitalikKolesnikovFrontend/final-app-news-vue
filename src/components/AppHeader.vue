<script setup>
import { useModalStore } from '@/stores/modalStore'
import AppFilter from './AppFilter.vue'
import { useAuthStore } from '@/stores/registerStore'
const modalStore = useModalStore()
const authStore = useAuthStore()
const avatar = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'

console.log(authStore.token)
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
    v-if="!authStore.token"
  >
    <div class="main">
      <RouterLink to="/">
        <el-menu-item index="1">App News</el-menu-item>
      </RouterLink>
    </div>
    <div class="filter">
      <el-sub-menu index="3">
        <template #title>Sort</template>
        <el-menu-item index="3-1">by date</el-menu-item>
        <el-menu-item index="3-2">by title</el-menu-item>
        <el-menu-item index="3-3">by author</el-menu-item>
      </el-sub-menu>
      <AppFilter />
    </div>
    <div class="header-button">
      <button @click="modalStore.openModal('register')" class="btn">log up</button>
      <button @click="modalStore.openModal('login')" class="btn">log in</button>
    </div>
  </el-menu>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="cornflowerblue"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
    v-if="authStore.token"
  >
    <div class="main">
      <RouterLink to="/">
        <el-menu-item index="1">App News</el-menu-item>
      </RouterLink>
      <RouterLink to="/user/1">
        <el-menu-item index="2">Profile</el-menu-item>
      </RouterLink>
    </div>
    <div class="filter">
      <el-sub-menu index="3">
        <template #title>Sort</template>
        <el-menu-item index="3-1">by date</el-menu-item>
        <el-menu-item index="3-2">by title</el-menu-item>
        <el-menu-item index="3-3">by author</el-menu-item>
      </el-sub-menu>
      <AppFilter />
    </div>
    <div class="header-button">
      <el-avatar shape="square" :size="size" :src="avatar" alt="US" />
      <button @click="authStore.logout" class="btn">log out</button>
    </div>
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
  justify-content: space-around;
}
.filter {
  display: flex;
  align-items: center;
}
.main {
  display: flex;
}
.btn {
  background-color: chartreuse;
  border: none;
  height: 40px;
  width: 90px;
  color: white;
  font-size: 16px;
  border-radius: 3px;
  text-transform: uppercase;
  cursor: pointer;
}
.header-button {
  display: flex;
  gap: 10px;
}
</style>
