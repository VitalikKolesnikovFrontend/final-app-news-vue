<script setup>
import AppListPost from './AppListPost.vue'
const avatar = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
</script>
<template>
  <div class="main">
    <el-avatar shape="square" size="large" alt="US" :src="avatar" />
    <div class="info">
      <h1>Alex</h1>
      <h2>email</h2>
      <div class="button-container">
        <el-button type="success">Edit profile</el-button>
        <el-button type="success">Add post</el-button>
      </div>
    </div>
  </div>
  <AppListPost />
</template>
<style scoped>
.info {
  color: #fff;
}
.main {
  margin: 0 auto;
  display: flex;
  border: 1px solid white;
  align-items: center;
  width: 900px;
  justify-content: center;
  gap: 100px;
  padding-bottom: 40px;
}
</style>
