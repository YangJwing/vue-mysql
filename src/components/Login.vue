<!--
 * @作者: Edwin Yeung
 * @Date: 2020-03-12 00:23:30
 * @修改人: Edwin Yeung
 * @LastEditTime: 2020-03-12 01:31:08
 * @描述: 
 -->
<template>
  <div class="login">
    <!-- <h2>登录界面</h2> -->
    <div class="container">
      <div class="login-form">
        <div class="input-item">
          <label>用户名</label>
          <input type="text" class="form-control9" required placeholder="请输入姓名" />
        </div>
        <div class="input-item">
          <label for>密码</label>
          <input type="text"  class="form-control9" required placeholder="请输入年龄" />
        </div>
        <button class="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}
.login-form {
  width: 300px;
  height: 300px;
  background-color: #eee;
  margin-top: 30px;
  padding: 30px;
}

.input-item{
  display: flex;
  flex:1;
  align-items:baseline;
}
input[type="text"] {
  /* display: block; */
  /* border-radius:5px; */
  height: 25px;
  width: 100%;
  margin: 10px 10px 10px 10px;
}
label {
  margin: 20px 0px 10px;
  text-align: right;
  line-height: 15px;
  width:100px;
}
button.login{
    background-color: red;
    padding:4px 10px;
}
</style>