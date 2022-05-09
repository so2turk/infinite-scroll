<script>
import Nav from '@/components/nav.vue'

export default {
  name: 'App',
  components: { Nav },
}
</script>

<template>
  <div id="app">
    <Nav />
    <div id="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#container {
  max-width: 1000px;
}
</style>
