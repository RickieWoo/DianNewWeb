/*jshint esversion: 6 */
var express = require('express');
var router = express.Router();
var request =require('request');
var fs = require('fs');//引用文件系统模块
var http=require('http');
var user=require('../models/entry_db').user;
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/DianTask1.htm");
});
router.get('/fontTask/picture/%E7%82%B9.png', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/fontTask/picture/%E7%82%B9.png");
});
router.get('/fontTask/picture/people.png', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/fontTask/picture/people.png");
});
router.get('/fontTask/picture/arrow.png', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/fontTask/picture/arrow.png");
});
router.get('/fontTask/picture/person.png', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/fontTask/picture/person.png");
});
router.get('/fontTask/picture/%E8%99%9A%E7%BA%BF%E7%99%BD.png', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/fontTask/picture/%E8%99%9A%E7%BA%BF%E7%99%BD.png");
});
router.get('/fontTask/picture/%E8%99%9A%E7%BA%BF%E6%A9%99%E5%85%A8.png', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/fontTask/picture/%E8%99%9A%E7%BA%BF%E6%A9%99%E5%85%A8.png");
});
router.get('/fontTask/picture/%E8%99%9A%E7%BA%BF%E6%A9%99%E5%8D%8A.png', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/fontTask/picture/%E8%99%9A%E7%BA%BF%E6%A9%99%E5%8D%8A.png");
});
router.get('/PWChalk.ttf', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/fontTask/picture/PWChalk.ttf");
});
router.get('/fontTask/picture/%E7%BA%BF.png', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/fontTask/picture/%E7%BA%BF.png");
});
router.get('/DianTask2.htm', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/DianTask2.htm");
});
router.get('/DianTask1.htm', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/DianTask1.htm");
});
router.get('/part2.htm', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/part2.htm");
});

router.get('/part3.htm', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/part3.htm");
});
router.get('/sign_up.htm', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile("./public/sign_up.htm");
});
module.exports = router;
