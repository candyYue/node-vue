var createError = require('http-errors');
var ejs = require('ejs');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var layoutRouter = require('./routes/layout');
var articleRouter = require('./routes/article');
var app = express();

// view engine setup
//设置html引擎
app.engine('html', ejs.__express);

app.set('views', path.join(__dirname, 'views'));
//设置视图引擎
// app.set('view engine', 'jade');
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//访问静态资源
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/public',express.static('public'));
app.use('/utils',express.static('utils'));


// ----------------这几行被我注释掉了-----------
app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/layout', layoutRouter);
// app.use('/article', articleRouter);
// ----------------新添加这三行  让页面自动访问index.html-----------
// var history = require('connect-history-api-fallback');
// app.use(express.static(path.join(__dirname, 'dist')));
// app.use(history());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
