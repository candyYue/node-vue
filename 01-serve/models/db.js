// 数据库连接

//1, 引入mongoose
var mongoose = require("mongoose")
//2，连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/mongoose', { useNewUrlParser: true });
// mongoose.connect('mongodb://root:123456@127.0.0.1:27017/park');

mongoose.connection.on('connected', function () {
    console.log('MongoDB connected success.');
});

mongoose.connection.on('error', function () {
    console.log('MongoDB connected fail.');
});

mongoose.connection.on('disconnected', function () {
    console.log('MongoDB connected disconnected.');
});
module.exports = mongoose;