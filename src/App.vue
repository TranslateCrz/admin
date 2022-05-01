<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">TranslateCrz</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';
@import 'bulma/css/bulma.css';

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: var(--color-background-soft);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}
</style>
