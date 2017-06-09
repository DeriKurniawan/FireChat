<template>
  <div id="app">
    <navbar id="navbar"></navbar>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /*-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;*/
  /*background-color: #E5EFEE;*/
}
#navbar{
  text-align: left;
}
</style>
