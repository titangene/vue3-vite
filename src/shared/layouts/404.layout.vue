<template>
  <nav>
    <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'About' }">About</RouterLink>
  </nav>
  <h1>404</h1>
  <RouterView />
</template>
