<!--
 * @作者: Edwin Yeung
 * @Date: 2020-02-14 23:16:25
 * @修改人: Edwin Yeung
 * @LastEditTime: 2020-03-13 17:05:47
 * @描述: 
 -->
<template>
  <div id="app">
    <div class="nav">
      <div class="nav-left">
        <router-link class="nav-left-item" to="/home">首页</router-link>
        <router-link class="nav-left-item" to="/login">登录</router-link>
      </div>
      <div class="nav-right ">
        <span class="nav-left-item">用户名</span>
        <router-link class="nav-left-item" @click="logout" to>登出</router-link>
      </div>
    </div>

    <!-- <add-user></add-user> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import AddUser from './components/AddUser'
// import Login from './components/Login'

export default {
  name: "App",
  methods:{
    logout(){
      this.$store.commit("LOGOUT");
      console.log('logout :');
    }
  }
  
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
.nav {
  display: flex;
  flex:1;
  padding-bottom: 5px;
  border-bottom: 1px solid rgb(243, 240, 240);
  margin: 10px 0 15px 10px;
  justify-content: space-between
}

.nav-left {
  background-color: #eee;
}
.nav-right {
   background-color: #eee;
   margin-right: 10px;
}
.nav-left-item {
  
  margin-right: 10px;
}
</style>
