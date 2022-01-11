// 编写mongodb的数据表结构

var mongoose = require("./db")
var mongoSchema = mongoose.Schema;//创建集合
//对集合设定规则
var todoListSchema = mongoose.Schema({
    content: {
        type: String,
        // unique: true
    },
    tip: {
        type: String
    },
    // author_id: {
    //     ref: "articleuser",//model的名称，即表示author_id与文章分类建立关系
    //     type: mongoSchema.Types.ObjectId   //用户的ID
    // },
})

//数据库里面的名字会变成todolists
module.exports = mongoose.model("todolist", todoListSchema);