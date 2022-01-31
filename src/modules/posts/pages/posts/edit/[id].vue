<route lang="yaml">
name: 'PostsEdit'
</route>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  }
});
</script>

<template>
  <h2>PostsEdit id: {{ id }}</h2>
  <QBtn label="送出" color="primary" :to="{ name: 'PostsIndex' }" />
</template>
