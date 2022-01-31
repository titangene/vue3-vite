<template>
  <nav>
    <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'About' }">About</RouterLink>
    <RouterLink :to="{ name: 'UsersIndex' }">Users</RouterLink>
    <RouterLink :to="{ name: 'PostsIndex' }">Posts (nested routes)</RouterLink>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  font-size: 14px;
}

a {
  display: inline-block;
  padding: 0.25rem 0.75rem;

  color: color.$green-500;
  transition: 0.4s;

  + a {
    border-left: 1px solid var(--color-border);
  }

  &:hover {
    background-color: rgba(color.$green-500, 0.2);
  }

  &.router-link-exact-active {
    color: var(--color-text);

    &:hover {
      background-color: transparent;
    }
  }
}
</style>
