<!--
 * @作者: Edwin Yeung
 * @Date: 2020-02-14 23:16:25
 * @修改人: Edwin Yeung
 * @LastEditTime: 2020-03-12 01:06:37
 * @描述: 
 -->
<template>
  <div id="app">
    <div class="nav-bar">
      <router-link class="nav-bar-item" to="/home">首页</router-link>
      <router-link class="nav-bar-item" to="/login">登录</router-link>
    </div>

    <!-- <add-user></add-user> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import AddUser from './components/AddUser'
// import Login from './components/Login'

export default {
  name: "App"
  // components: {
  //   AddUser,Login
  // }
};
</script>

<style>
#app {
  font-family: "微软雅黑", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.nav-bar {
  display: flex;
  /* flex: 1;
  justify-content: left; */
  margin:10px 0 15px 10px;
  padding-bottom:5px;
  border-bottom: 1px solid rgb(243, 240, 240);
}
.nav-bar-item{
  margin-right:10px;
}
</style>
