<template>
    <router-link to=""></router-link>
    <router-link to="/portfolio"></router-link>
    <router-view/>
</template>
<script>
import '@/assets/js/portfolio.js'

export default {
    name: 'App'
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
@import './assets/css/style.css';
</style>
