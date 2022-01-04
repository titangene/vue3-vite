<route lang="json5">
{
  name: 'TranOpenEdit'
}
</route>

<script>
export default {
  name: 'TranOpenEdit'
};
</script>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div>
    <h1>Tran Open {{ $route.params.id }}, {{ id }}</h1>
  </div>
</template>
