/*jshint esversion: 6 */
var express = require("express");
var router = express.Router();
var enrty_logic = require("../logic/entry_logic");
let logger = require('winston').loggers.get('entryForm');
let http = require('http');
let qs = require('querystring');

/* GET users listing. */
//'http://localhost:3000/entry_form/userlist'
router.get("/", function (req, res, next) {
  res.send("./public/sign_up");
});

router.get("/get_user", function (req, res, next) {
  let params = req.query;
  enrty_logic.getUser(params)
    .then(result => {
      logger.info(
        `[entryForm] get_user result => ${JSON.stringify(result, null, 4)}`
      );
      res.json(result);
    })
    .catch(err => {
      logger.error(
        `[entryForm] get_user err => ${JSON.stringify(err, null, 4)}`
      );
      res.json({
        error: err
      });
    })
});

router.get("/delete_user", function (req, res, next) {
  let params = req.query;
  enrty_logic.deleteUser(params)
    .then(result => {
      logger.info(
        `[entryForm] delete_user result => ${JSON.stringify(result, null, 4)}`
      );
      res.json(result);
    })
    .catch(err => {
      logger.error(
        `[entryForm] delete_user err => ${JSON.stringify(err, null, 4)}`
      );
      res.json({
        error: err
      });
    })
});

router.get("/user_list", (req, res, next) => {
 
  enrty_logic.getUserList()
    .then(result => {
      logger.info(
        `[entryForm] user_list result => ${JSON.stringify(result, null, 4)}`
      );
      res.json(result);
    })
    .catch(err => {
      logger.error(
        `[entryForm] user_list err => ${JSON.stringify(err, null, 4)}`
      );
      res.json({
        error: err
      });
    })
});


router.post("/new", (req, res, next) => {
  let params = req.body;
  logger.info(
    `[entryForm] new params => ${JSON.stringify(params, null, 4)}`
  );
  enrty_logic.createUser(params)
    .then(result => {
      logger.info(
        `[entryForm] new result => ${JSON.stringify(result, null, 4)}`
      );
      res.json(result);
    })
    .catch(err => {
      logger.error(`[entryForm] new err => ${JSON.stringify(err, null, 4)}`);
      res.json({
        error: err
      });
    });
});

module.exports = router;