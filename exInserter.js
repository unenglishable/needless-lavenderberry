var mysql = require('mysql');
var lolipop = require('./lolipop');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'lavenderberry',
  password: '_n4rcol3PSY',
  database: 'needless'
});
var table = 'test_table';

connection.connect();

var loli = new lolipop(connection);
loli.unwrapDb(table, function () {
  loli.printFields();
});

//loli.insert({
//  'first': 'Fake',
//  'last': 'Person',
//  'age': 0,
//  'uselessness': 100
//});

connection.end();
