let express = require('express');
let router = express.Router();
const mongoose = require("mongoose")

 // 引用ObjectId类型
// var ObjectId = mongoose.Types.ObjectId
let Notices = require('../models/todolist');

router.get("/getTodolist", function (req, res, next) {
  Notices.find({}, function (err, doc) {
    if (err) {
      res.json({
        status: 1,
        msg: err.message
      });
    } else {
      res.json({
        status: 0,
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  });
});

router.get("/addTodolist", function (req, res, next) {
  // req.query 参数
  var add=new Notices({ 
    //实例化模型 传入增加的数据
    content:req.query.content,
    tip: req.query.tip
  })
  add.save();
  res.json({
    status: 0,
    msg: 'add success',
    result: {}
  })
});
router.get("/modifyTodolist", function (req, res, next) {
  Notices.updateOne({ name: 'lisi2222' }, { name: '哈哈哈' },function(err,result){
    if(err){
      return 
    }else{
      return res.json({
        status: 0,
        msg: 'add success',
        result: {}
      })
    }
  })
});

router.get("/deleteTodolist", function (req, res, next) {
  let _id = mongoose.Types.ObjectId(req.query.id)
  console.log(_id)
  Notices.deleteOne({ "_id": _id },(error)=> { //第一个包含有 '_id': xxx的文档
    if (error) {
        console.error(error);
    } else {
      return res.json({
        status: 0,
        msg: 'delete success',
        result: {}
      })
    }
  })
});
module.exports = router;