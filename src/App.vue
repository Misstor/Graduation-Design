<template>
  <div id="app">
    <Header></Header>
    <tab></tab>

  </div>
</template>

<script>
  import Header from './components/Header'
  import Tab from './components/tab/tab'
  export default {
    name: 'app',
    components: {
      Header,
      Tab
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin:0;
  padding: 0
}
</style>
