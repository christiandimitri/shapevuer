<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Banner>Fundebug: The most professional application error monitoring platform!</Banner>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Banner from "@/components/Banner";

export default {
  name: 'App',
  components: {
    Banner,
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
