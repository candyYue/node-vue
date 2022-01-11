<template>
  <header-bar></header-bar>
  <sider-bar></sider-bar>
  <div class="view-content">
    <router-view></router-view>
  </div>
</template>

<script>
import siderBar from './components/siderBar'
import headerBar from './components/headerBar'
export default {
  name: 'App',
  components: {
    siderBar,
    headerBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
