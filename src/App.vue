<!--
 * @作者: Edwin Yeung
 * @Date: 2020-02-14 23:16:25
 * @修改人: Edwin Yeung
 * @LastEditTime: 2020-03-12 00:15:22
 * @描述: 
 -->
<template>
  <div id="app">

    <!-- <add-blog></add-blog> -->
    <add-user></add-user>
  </div>
</template>

<script>
import AddUser from './components/AddUser'

export default {
  name: 'App',
  components: {
    AddUser
  }
}
</script>

<style>
#app {
  font-family: '微软雅黑','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
