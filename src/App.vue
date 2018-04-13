<template>
  <transition>  
      <div id="app">
          <router-view></router-view>
      </div>
  </transition> 
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
  min-height: 100vh;
}
* {
  box-sizing: border-box;
}
</style>
