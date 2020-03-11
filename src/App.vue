<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <!-- <test msg="这是新的属性值"></test> -->
    <add-blog></add-blog>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import AddBlog from './components/AddBlog'

export default {
  name: 'App',
  components: {
    // HelloWorld
    AddBlog
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
  margin-top: 60px;
}
</style>
