<!--
 * @作者: Edwin Yeung
 * @Date: 2020-03-12 00:23:30
 * @修改人: Edwin Yeung
 * @LastEditTime: 2020-03-13 00:27:20
 * @描述: https://segmentfault.com/a/1190000015201803
 -->
<template>
  <div class="login">
    <h4 class="title">注册登录界面</h4>
    <div class="container">
      <div class="login-form">
        <div class="input-item">
          <label>用户名</label>
          <input  type="text" class="form-control9"  v-model="username" required
            placeholder="请输入手机号码"/>
        </div>
        <div class="input-item">
          <label for>密 码</label>
          <input type="text" class="form-control9" v-model="password" required placeholder="请输入密码" />
        </div>
        <div class="login-register">
          <span>注册</span>
          <button class="login" @click="login">登录</button>
          <span>忘记密码</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (!this.username) {
        // this.$message.error('请输入用户名')
        console.log("请输入用户名");
        return;
      }
      if (!this.password) {
        // this.$message.error('请输入用户名')
        console.log("请输入密码");
        return;
      }
      // console.log('username :',this.username);
      // console.log('password :',this.password);
    }
  }
};
</script>

<style>
h4.title {
  margin: 30px 0 20px;
}
.container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.login-form {
  width: 300px;
  height: 300px;
  background-color: #eee;
  padding: 30px;
}

.input-item {
  display: flex;
  flex: 1;
  align-items: baseline;
}
input[type="text"] {
  /* display: block; */
  /* border-radius:5px; */
  height: 25px;
  width: 100%;
  margin: 10px 10px 10px 10px;
}
label {
  margin: 20px 0px 10px 0;
  text-align: right;
  line-height: 15px;
  width: 80px;
  /* background-color: #bbb; */
}
button.login {
  color: aliceblue;
  background-color: rgb(4, 132, 252);
  padding: 4px 10px;
}
.login-register{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.login-register span{
  font-size: 10px;
  color:cornflowerblue;
}
</style>