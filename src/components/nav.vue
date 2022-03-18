<script>
export default {
  name: 'Nav',
}
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> | <router-link to="/numbers">Numbers</router-link> |
    <router-link to="/colors">Colors</router-link> |
    <router-link to="/users">Users</router-link>
  </div>
</template>
