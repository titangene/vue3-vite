<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="text-center">
    <h1>{{ msg }}</h1>
    <h2>Vite Starter Template</h2>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 2rem;

  @include breakpoint.media(sm) {
    color: color.$red-500;
  }

  @include breakpoint.media(md) {
    color: color.$blue-500;
  }

  @include breakpoint.media(lg) {
    color: color.$green-500;
  }
}

h2 {
  font-size: 1.2rem;
}
</style>
