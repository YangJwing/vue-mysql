//参考出处  https://blog.csdn.net/weixin_42003850/article/details/100511566   on 2020/02/18

//userApi.js
var models = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap')

// 连接数据库
var conn = mysql.createConnection(models.mysql)
conn.connect()
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

// 增加用户接口
router.post('/addUser', (req, res) => {
  var sql = $sql.user.add;
  // post、put、delete通过req.body , get通过req.query 获取参数
  var params = req.body;
  console.log("params:", params);
  // function(err,result) 相当于 (err,result)=>
  conn.query(sql, [params.name, params.age], (err, result) => {
    if (err) {
      console.log("荣提示：" + err);
    }
    if (result) {
      console.log(params.name+" 用户增加成功!")
      jsonWrite(res, result);
    }
  })
})

// 查询用户接口，荣自己加入的 2020.2.26测试通过 ***************
router.get('/searchUser', (req, res) => {
  var sql = $sql.user.search   //sql 相当于 sqlMaps.js下的 user(对象):search（属性） 语句： select * from user where name=?
  var params = req.query
  console.log("荣params:", params);
  // conn.query(sql, [params.name], function (err, result) {
  conn.query(sql, [params.name], (err, result) => {
    if (err) {
      console.log(err)
    }
    if (result) {
      res.send(result)
    }
  })
})

// 编辑用户接口,荣加入的 on 20202.2.27 测试通过**************
router.put('/editUser', (req, res) => {
  var sql = $sql.user.edit;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.name, params.age, params.name], function (err, result) {
    if (err) {
      console.log("荣提示：" + err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
})

// 删除用户接口,荣加入的 on 20202.2.27 **************
router.delete('/deleteUser', (req, res) => {
  var sql = $sql.user.delete;
  var params = req.body;
  console.log("荣req.query:",req.query);
  console.log("荣req.body:",req.body);
  conn.query(sql, [params.name], function (err, result) {
    if (err) {
      console.log("荣提示：" + err);
    }
    if (result) {
      jsonWrite(res, result);
      // if(result.body.code==200){console.log("删除成功！")}
      console.log("删除成功！")
    }
  })
})


router.post('/cancelReader', (req, res) => {
  var sql = $sql.reader.delete
  var params = req.body
  console.log(params)
  conn.query(sql, [params.name], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.get('/searchReader', (req, res) => {
  var sql = $sql.reader.search      //sql 相当于 sqlMaps.js下的 reader:search 语句： select * from user where name=?
  var params = req.query
  console.log(params)
  conn.query(sql, [params.name], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(result)
      res.send(result)
    }
  })
})

router.post('/readerBorrow', (req, res) => {
  var sql = $sql.reader.borrowBook
  var params = req.body
  console.log(params)
  conn.query(sql, [params.readerName, params.bookName], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

module.exports = router
