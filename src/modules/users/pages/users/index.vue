<route lang="yaml">
name: 'UsersIndex'
</route>

<template>
  <h1>UsersIndex</h1>
  <QBtn label="新增" color="green" :to="{ name: 'UsersCreate' }" />
  <QBtn
    label="編輯"
    color="primary"
    class="q-ml-md"
    :to="{ name: 'UsersEdit', params: { id: 1 } }"
  />
</template>
