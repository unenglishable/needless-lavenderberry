var mysql = require('mysql');

var Lolipop = module.exports = function lolipop (connection, table) {
  this.db = connection;
  this.fields = [];
}

Lolipop.prototype.unwrapDb = function (table, callback) {
  this.db.query('show columns from '+table, function (err, rows) {
    var tempFields = [];

    if (err) throw err;

    rows.forEach(function (row) {
      tempFields.push(row.Field);
    });
    this.fields = tempFields;
    console.log('this.fields = ');
    console.log(this.fields);
    callback();
  });
}

Lolipop.prototype.insert = function (item) {
  console.log(item);
  item.forEach(function (field) {
    console.log(field);
  });
  //connection.query('INSERT ');
}

Lolipop.prototype.printFields = function () {
  console.log('wut');
  console.log(this.fields);
}
