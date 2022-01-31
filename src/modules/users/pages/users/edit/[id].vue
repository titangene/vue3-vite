<route lang="yaml">
name: 'UsersEdit'
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
  <h1>UsersEdit id: {{ id }}</h1>
  <QBtn label="送出" color="primary" :to="{ name: 'UsersIndex' }" />
</template>
