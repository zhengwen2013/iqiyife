var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var ibranches = require('./routes/ibranches');
var iprojects = require('./routes/iprojects');
var ilogin = require('./routes/ilogin');

//引用express-handlebars插件
var exphbs = require('express-handlebars');

var app = express();

// view engine setup
//app.set('views', path.join(global.__dirname, 'views'));
//app.set('view engine', 'jade');
app.engine('hbs', exphbs({
    layoutsDir: 'views', //设置布局模版文件的目录为 views 文件夹
    defaultLayout: 'layout', //设置默认的页面布局模版为 layout.hbs 文件，跟 Express 2.x 中的 layout.ejs 作用类似。
    extname: '.hbs'// 模版文件使用的后缀名，这个 .hbs 是我们自定的，我们当然可以使用 .html 和 .handlebars 等作为后缀，只需把以上的 hbs 全部替换即可。
}));//handlebars.js
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(global.__dirname, 'public')));


//app.get('/', function(req,res){
//  res.send("<h1>zhengwen</h1>");
//});

//@zhengwen
app.use('/', routes);
app.use('/ibranchs', ibranches);
app.use('/iprojects', iprojects);
app.use('/users', users);
app.use('/action.login', ilogin);

//浏览器用的get方法，因此用app.get。
app.get('/action.login', function () {

});

app.post('/action.forkbranch', function(){ //浏览器用的post方法，因此用app.post。

});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}


// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



//module.exports = app;


var server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});