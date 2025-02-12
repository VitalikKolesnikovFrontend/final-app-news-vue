<script setup>
const props = defineProps({
  title: String,
  content: String,
  author: String,
  createdAt: String,
  tags: String,
})
</script>
<template>
  <el-card style="max-width: 280px">
    <template #header>{{ props.title }}</template>
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      style="width: 100%"
    />
    <p>{{ props.content }}</p>
    <p>{{ props.createdAt }}</p>
    <p>{{ props.tags }}</p>
    <template #footer>{{ props.author }}</template>
  </el-card>
</template>
<style scoped></style>
