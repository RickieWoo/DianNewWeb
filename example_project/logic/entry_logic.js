/*jshint esversion: 6 */
let entryDB = new(require("../models/entry_db"))();
let logger = require('winston').loggers.get('entryForm');

exports.createUser = function (params) {
  return new Promise((resolve, reject) => {
    //_validateParams
    logger.info(`[entryForm] createUser params => ${JSON.stringify(params, null, 4)}`);
    if (params.phone) {
      params._id = params.phone;
    } else {
      logger.error(`[entryForm] createUser params error, no phone => ${JSON.stringify(params, null, 4)}`);
      reject({
        reason: 'no phone inside params'
      })
    }
    entryDB.updateUser(params)
      .then(result => {
        logger.info(`[entryForm] updateUser result => ${JSON.stringify(result, null, 4)}`);
        resolve(result);
      })
      .catch(error => {
        logger.error(`[entryForm] updateUser result => ${JSON.stringify(error, null, 4)}`);
        reject(error);
      });
    // entryDB
    //   .getUser(params)
    //   .then( result=> {
    //     console.log('result: ', result);
    //     if (result) {
    //     console.log('result: ', result);
    //     entryDB.updateUser(params)
    //       .then(result => {
    //         logger.info( `[entryForm] createUser result => ${JSON.stringify(result, null, 4)}` );
    //         resolve(result);
    //       })  
    //       .catch(error => {
    //         logger.error( `[entryForm] createUser result => ${JSON.stringify(error, null, 4)}` );
    //         reject(error);
    //       });
    //     } else {
    //       entryDB
    //       .createUser(params)
    //       .then(result => {
    //         logger.info( `[entryForm] createUser result => ${JSON.stringify(result, null, 4)}` );
    //         resolve(result);
    //       })  
    //       .catch(error => {
    //         logger.error( `[entryForm] createUser result => ${JSON.stringify(error, null, 4)}` );
    //         reject(error);
    //       });
    //     }
    //   })
  });
};
exports.getUserList = function () {
  return new Promise((resolve, reject) => {
    entryDB.getUserList()
      .then(result => {
        console.log('result: ', result);
        logger.info(`[entryForm] getUserList result => ${JSON.stringify(result, null, 4)}`);
        resolve(result);
      })
      .catch(error => {
        console.log('error: ', error);
        logger.error(`[entryForm] getUserList result => ${JSON.stringify(error, null, 4)}`);
        reject(error);
      });
  });
};
exports.getUser = function (params) {
  return new Promise((resolve, reject) => {
    //_validateParams
    entryDB
      .getUser(params)
      .then(result => {
        logger.info(`[entryForm] getUser result => ${JSON.stringify(result, null, 4)}`);
        resolve(result);
      })
      .catch(error => {
        logger.error(`[entryForm] getUser error => ${JSON.stringify(error, null, 4)}`);
        reject(error);
      });
  });
};
exports.deleteUser = function (params) {
  return new Promise((resolve, reject) => {
    //_validateParams
    entryDB
      .deleteUser(params)
      .then(result => {
        logger.info(`[entryForm] deleteUser result => ${JSON.stringify(result, null, 4)}`);
        resolve(result);
      })
      .catch(error => {
        logger.error(`[entryForm] deleteUser error => ${JSON.stringify(error, null, 4)}`);
        reject(error);
      });
  });
};