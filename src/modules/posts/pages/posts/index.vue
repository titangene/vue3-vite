<route lang="yaml">
name: 'PostsIndex'
</route>

<template>
  <h2>PostsIndex</h2>
  <QBtn label="新增" color="green" :to="{ name: 'PostsCreate' }" />
  <QBtn
    label="編輯"
    color="primary"
    class="q-ml-md"
    :to="{ name: 'PostsEdit', params: { id: 1 } }"
  />
</template>
