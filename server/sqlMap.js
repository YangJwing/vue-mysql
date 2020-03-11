//参考出处  https://blog.csdn.net/weixin_42003850/article/details/100511566   on 2020/02/18

//sqlMap.js
var sqlMap = {
    // 用户表
    user: {
        add: 'insert into user(name,age) values(?, ?)',
        edit: 'update user set name = ? , age = ? where name=?',  //更新用户数据
        search: 'select * from user where name like ?',    //查找用户信息
        delete: 'delete  from user where name = ?'        //删除用户
    },

    //读者表
    reader: {
      add: 'insert into reader(name) values (?)',
      delete: 'delete from reader where name = ?',
      search1: 'select * from user where name = ?', //查找读者信息
      borrowBook: 'update reader set lendBook1 = ? where name = ?'//更新用户表中的已借阅书籍
    },

    //书籍表
    book: {
      add: 'insert into book(name, author, stock) values (?, ?, ?)',
      search1: 'select * from book where name = ?',
      borrowBook: 'update book set stock = ? , lendNum = ? where name = ?'//更新书籍表中的库存
    }
  }

  module.exports = sqlMap;
  