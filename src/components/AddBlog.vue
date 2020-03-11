<template>
  <div id="add-blog container">
    <h2>添加用户</h2>
    <form>
      <label>用户姓名</label>
      <input type="text" v-model="userName" class="form-control" required placeholder="请输入姓名" />
      <label for>年龄</label>
      <input type="text" v-model="age" required placeholder="请输入年龄" />

      <button v-on:click.prevent="addUser">添加用户</button>
      <button v-on:click.prevent="searchUser">查看用户</button>
      <button v-on:click.prevent="editUser">编辑用户</button>
      <button v-on:click.prevent="deleteUser">删除用户</button>
    </form>

    <div>
      <h3 v-if="submited">您的用户增加成功</h3>
    </div>

    <div id="preview" v-if="kk_idoyou">
      <h3>用户信息</h3>
      <p>姓名：{{userName}}</p>
      <p>年龄：{{age}}</p>
    </div>

    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>姓名</th>
            <th>年龄</th>
            <!-- <th>备注</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users">
            <td>{{user.name}}</td>
            <td>{{user.age}}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  // http://jsonplaceholder.typicode.com/
  // http://jsonplaceholder.typicode.com/posts
  name: "add-blog",
  data() {
    return {
      userName: "",
      age: "",
      submited: false,
      message: "",
      users: [],
      kk_idoyou: false
    };
  },
  methods: {
    addUser() {
      var name = this.userName;
      var age = this.age;
      console.log(name + ":" + age);
      this.$http
        //这里的 addUser 是路由，传送到 userApi.js 接口，以下
        //  的 searchUser 和 editUser 类似
        .post(
          "/api/user/addUser",
          {
            name: name,
            age: age
          },
          {}
        )
        .then(response => {
          // console.log(response)
          console.log("成功提示：", response);
          this.message = this.userName + ":" + this.age;
          this.userName = "";
          this.age = "";
        });
    },

    //查询用户 荣 on 2020.2.22
    searchUser() {
      var name = this.userName;
      var age = this.age;
      // console.log(name + ":" + age);
      // GET传参数查看如下网址（搞了我几天终于搞掂）2020.2.27
      //  https://blog.csdn.net/u010942058/article/details/101670400
      //  https://blog.csdn.net/qq_36947128/article/details/79743827
      this.$http
        .get("/api/user/searchUser", {
          params: { name: "%" + name + "%" }
        })
        .then(response => {
          // console.log("荣提示：", response);
          this.users = response.body;
          // cosolog.log('用户数据:',this.users)
        });
    },

    //删除用户 荣 on 2020.2.27
    deleteUser() {
      var name = this.userName;
      // var age = this.age;
      console.log(name);
      this.$http
        .delete("/api/user/deleteUser", { body: { name: name } })
        .then(response => {
          console.log("荣提示：这是Delete ", response);
          // this.message = response;
        });
    },

    //更新用户 荣 on 2020.2.27
    editUser() {
      var name = this.userName;
      var age = this.age;
      var putData = {
        //查询SQL语句有多少个参数就设多少个属性(键对)
        name: this.userName, //待更新的用户名
        age: this.age, //待更新的用年龄
        name: this.userName //更新条件(以用户名为更新条件)
      };
      console.log(name + ":" + age);
      // GET传参数查看如下网址（搞了我几天终于搞掂）2020.2.27
      //  https://blog.csdn.net/u010942058/article/details/101670400
      this.$http
        // 对应sqlMap.js的点位符参数   ?:name  ?:age    ?:条件name
        // .put("/api/user/editUser",{name:name,age:age,name:name} )
        .put("/api/user/editUser", putData)
        .then(response => {
          console.log("荣提示：这是PUT ", response);
          console.log("荣query:", response.query);
          this.users=[{name:this.userName,age:this.age},]
        });
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label {
  display: inline-block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px;
}
textarea {
  height: 200px;
}

#checkboxes label {
  display: inline-block;
  margin: 0;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
button {
  /* display: block; */
  display: inline-block;
  /* margin: 15px 15px; */
  background: rgb(54, 143, 155);
  color: #fff;
  border: 0;
  padding: 10px;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
li {
  list-style-type: circle;
  /* display: inline-block; */
}

</style>
