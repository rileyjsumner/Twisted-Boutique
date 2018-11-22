var express = require("express")
var app = express()
var path = require("path")
var sass = require('node-sass')
var $ = require('jquery')
var favicon = require("serve-favicon")
var mongoose = require("mongoose")
var bodyParser = require("body-parser")
var gsap = require("gsap");

var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/ShopDB');

app.use(function(req,res,next){
    req.db = db;
    next();
});
var apiRouter = require('./api/routes/apiRoute.js');
var authRouter = require('./auth/routes/authRoute.js');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected to db");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

var publicDir = path.join(__dirname, "/public")

app.use(favicon(publicDir+"/pics/favicon.ico"));
app.use(express.static(publicDir));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/',function(req,res){
    res.render('index', {page_title: "Twisted Boutique"})
});
app.get('/Home', function(req, res) {
    res.render('index', {page_title: "Twisted Boutique"})
});
app.get('/About', function(req, res) {
    res.render('about', {page_title: "About - Twisted Boutique"})
});
app.get('/Contact', function(req, res) {
    res.render('contact', {page_title: "Contact - Twisted Boutique"})
});
app.get('/Shop', function(req, res) {
    res.render('catalog', {page_title: "Shop - Twisted Boutique"})
});
app.get('/Admin/', function(req, res) {
    res.render('admin/home');
});
app.get('/Admin/New', function(req, res) {
    res.render('admin/newproduct')
});
app.get('/Admin/View', function(req, res) {
    res.render('admin/viewproduct')
});
app.get('/Admin/Inventory', function(req, res) {
    res.render('admin/inventory')
});
app.get('/Admin/Supplies', function(req, res) {
    res.render('admin/supplies')
});
app.get('/Admin/Analytics', function(req, res) {
    res.render('admin/analyics')
});
app.get('/Admin/Users', function(req, res) {
    res.render('admin/users');
    // var db = req.db;
    // var collection = db.get("userList");
    // collection.find({},{},function(e, docs) {
    //     res.json(docs);
    //     console.log(docs);
    // })
});
app.get('/Admin/Orders', function(req, res) {
    res.render('admin/orders')
});
app.get('/Admin/Reviews', function(req, res) {
    res.render('admin/reviews')
});
app.get('/Login', function(req, res) {
    res.render('auth/login');
});
app.get('/CreateAccount', function(req, res) {
    res.render('auth/createaccount');
});

app.use('/API', apiRouter);
app.use('/Auth', authRouter);

app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000);
console.log("listening on port 3000");
