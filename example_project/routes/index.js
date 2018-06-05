/*jshint esversion: 6 */
var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs'); //引用文件系统模块
var http = require('http');
var user = require('../models/entry_db').user;
/* GET home page. */
router.get('/', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/index.html");
});
router.get('/static/css/app.bd576c422c493af9c3b0c11b227c4c72.css', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/static/css/app.bd576c422c493af9c3b0c11b227c4c72.css");
});
router.get('/static/css/app.bd576c422c493af9c3b0c11b227c4c72.css.map', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/static/css/app.bd576c422c493af9c3b0c11b227c4c72.css.map");
});
router.get('/static/fonts/element-icons.6f0a763.ttf', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/static/fonts/element-icons.6f0a763.ttf");
});
router.get('/static/js/app.8170d8eb3e5bd64ff30c.js', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/static/js/app.8170d8eb3e5bd64ff30c.js");
});
router.get('/static/js/app.8170d8eb3e5bd64ff30c.js.map', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/static/js/app.8170d8eb3e5bd64ff30c.js.map");
});
router.get('/static/js/manifest.69db1e8489eecd77d098.js', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/static/js/manifest.69db1e8489eecd77d098.js");
});
router.get('/static/js/manifest.69db1e8489eecd77d098.js.map', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/static/js/manifest.69db1e8489eecd77d098.js.map");
});
router.get('/static/js/manifest.69db1e8489eecd77d098.js.map', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/static/js/manifest.69db1e8489eecd77d098.js.map");
});
router.get('/static/js/vendor.1491973c9314706a4191.js', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/static/js/vendor.1491973c9314706a4191.js");
});
router.get('/static/js/vendor.1491973c9314706a4191.js.map', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/static/js/vendor.1491973c9314706a4191.js.map");
});

module.exports = router;