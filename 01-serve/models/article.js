// 编写mongodb的数据表结构

var mongoose = require("./db")
var mongoSchema = mongoose.Schema;
var ArticleSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    cid: {
        ref: "articlecate",//model的名称，即表示cid与文章分类建立关系
        type: mongoSchema.Types.ObjectId    //文章所属的分类的ID，当增加数据的数据类型为字符串时，当保存到数据库之后会自动转换成objectID，并与对应的数据表中相关数据关联
    },
    author_name: {
        type: String
    },
    author_id: {
        ref: "articleuser",
        type: mongoSchema.Types.ObjectId   //用户的ID
    },
    description: String,
    content: String
})
module.exports = mongoose.model("article", ArticleSchema);