<!--
 * @作者: Edwin Yeung
 * @Date: 2020-03-12 00:23:30
 * @修改人: Edwin Yeung
 * @LastEditTime: 2020-03-13 16:40:05
 * @描述: https://segmentfault.com/a/1190000015201803
 *        https://github.com/doterlin/vue-example-login
 *        https://blog.csdn.net/weixin_41105030/article/details/89333208  
 -->
<template>
  <div class="login">
    <h4 class="title">注册登录界面</h4>
    <div class="container">
      <div class="login-form">
        <div class="input-item">
          <label>账 号</label>
          <input type="text" class="form-control9" v-model="mobile" required placeholder="请输入手机号码" />
        </div>
        <div class="input-item">
          <label for>密 码</label>
          <input type="text" class="form-control9" v-model="password" required placeholder="请输入密码" />
        </div>
        <div class="login-register">
          <span>注册</span>
          <button class="login" @click="logincheck">登录</button>
          <span>忘记密码</span>
        </div>
        <span>{{msg}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: "",
      password: "",
      msg: "",
      islogin: false
    };
  },
  methods: {
    login() {
      if (!this.mobile) {
        // this.$message.error('请输入用户名')
        console.log("请输入账号");
        return;
      }
      if (!this.password) {
        // this.$message.error('请输入用户名')
        console.log("请输入密码");
        return;
      }
    },

    //密码校验
    logincheck() {
      var mobile = this.mobile;
      var password = this.password;
      console.log("mobile :", mobile);
      this.$http
        .post(
          "/api/user/logincheck",
          { mobile: mobile, password: password },
          {}
        )
        .then(response => {
          //判断用户名和密码是否正确
          if (!response.body.msg) { //成功
            //islogin设为true
            this.islogin = true;
            //设置TOKEN 和 localstorage
            this.$store.commit("SET_TOKEN", response.body);
            console.log("this.state.token:", this.$store.state.token);
            this.$router.push("/home");
            console.log("提示：", response);

          } else {  //失败
            this.$store.commit("LOGOUT");
            console.log("this.state.token:", this.$store.state.token);
          }
        })
        .catch(err => {
          console.log("错误:", err);
        });
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
  background-color: rgb(245, 245, 245);
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
.login-register {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.login-register span {
  font-size: 10px;
  color: cornflowerblue;
}
</style>