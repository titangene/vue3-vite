<route lang="yaml">
name: 'Home'
</route>

<script setup>
import HelloWorld from '@/modules/root/HelloWorld.vue';
import TheWelcome from '@/modules/root/TheWelcome.vue';
</script>

<template>
  <div class="q-mb-lg">
    <img class="logo" src="@/assets/logo.svg" alt="Vue logo" />
    <HelloWorld msg="You did it!" />
  </div>
  <TheWelcome />
</template>

<style lang="scss" scoped>
.logo {
  width: 60px;
  height: 60px;
  display: block;
  margin: 0 auto 1rem;
}
</style>
