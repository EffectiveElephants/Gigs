const db = require('../index.js');

console.log('in models/model.js')

class Model {
  constructor(tablename) {
    this.tablename = tablename;
  }

  getAll() {
    let queryString = `SELECT * FROM ${this.tablename}`;
    return db.query(queryString);
  }

  get(option) {
    let queryString = `SELECT * FROM ${this.tablename} WHERE ${option}`;
    return db.query(queryString);
  }

  delete(option) {
    let queryString = `DELETE FROM ${this.tablename} WHERE ${option}`;
    return db.query(queryString);
  }
}

module.exports = Model;