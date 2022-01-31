<script setup>
import Navbar from '@/shared/components/Navbar.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
header {
  max-height: 100vh;
  padding: 1rem;

  @include breakpoint.media(lg) {
    padding: 1rem 2rem;
  }
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @include breakpoint.media(lg) {
    padding: 1rem 2rem;
  }
}
</style>
