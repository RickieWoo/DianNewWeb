/*jshint esversion: 6 */
const mongojs = require("mongojs");
let logger = require('winston').loggers.get('entryForm');

class EntryForm {
  constructor() {
    this.db = mongojs("entryForms", ["entryForms"]);
    this.likeWhatDB = mongojs("entryForms", ["likeWhat"]);
    this.hashKey = "phone";
  }

  getUserList() {
    return new Promise((resolve, reject) => {
      this.db.entryForms.find((err, docs) => {
        if (err) {
          logger.error(
            `[entryForm] DB getUserList err => ${JSON.stringify(err, null, 4)}`
          );
          reject(err);
        } else {
          resolve(docs);
        }
      })
    })
  }

  getUser(params) {
    return new Promise((resolve, reject) => {
      console.log('params:', params);
      if (!params[this.hashKey]) {
        logger.error(
          `[entryForm] DB getUser err => no hashKey inside`
        );
        reject({
          reason: "params error , no hashKey inside"
        });
      }
      let id = params[this.hashKey];
      this.db.entryForms.findOne({
        _id: id
      }, (err, docs) => {
        if (err) {
          logger.error(
            `[entryForm] DB getUser err => ${JSON.stringify(err, null, 4)}`
          );
          reject(err);
        } else {
          resolve(docs);
        }
      });
    })

  }

  deleteUser(params) {
    return new Promise((resolve, reject) => {
      console.log('params:', params);
      if (!params[this.hashKey]) {
        logger.error(
          `[entryForm] DB deleteUser err => no hashKey inside`
        );
        reject({
          reason: "params error , no hashKey inside"
        });
      }
      let queryParam = {
        phone: params
      };
      this.db.entryForms.remove(queryParam, (err, docs) => {
        if (err) {
          logger.error(
            `[entryForm] DB deleteUser err => ${JSON.stringify(err, null, 4)}`
          );
          reject(err);
        } else {
          resolve(docs);
        }
      });
    })
  }

  createUser(params) {
    return new Promise((resolve, reject) => {
      console.log('params:', params);
      if (!params[this.hashKey]) {
        logger.error(
          `[entryForm] DB createUser err => no hashKey inside`
        );
        reject({
          reason: "params error , no hashKey inside"
        });
      }
      this.db.entryForms.insert(params, (err, docs) => {
        if (err) {
          logger.error(
            `[entryForm] DB createUser err => ${JSON.stringify(err, null, 4)}`
          );
          reject(err);
        } else {
          resolve(docs);
        }
      });
    })
  }

  updateUser(params) {
    return new Promise((resolve, reject) => {
      if (!params[this.hashKey]) {
        logger.error(
          `[entryForm] DB updateUser err => no hashKey inside`
        );
        reject({
          reason: "params error , no hashKey inside"
        });
      }
      this.db.entryForms.update({
        _id: params.phone
      }, {
        $set: params
      }, {
        upsert: true
      }, (err, docs) => {
        if (err) {
          logger.error(
            `[entryForm] DB updateUser err => ${JSON.stringify(err, null, 4)}`
          );
          reject(err);
        } else {
          resolve(docs);
        }
      });


    })
  }
}
module.exports = EntryForm;