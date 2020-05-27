<template>
  <div id="app">
    <Header />
    <SignIn />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import SignIn from '../../components/SignIn.vue'

export default {
  name: 'App',
  components: {
    Header, SignIn
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
