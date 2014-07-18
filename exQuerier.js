var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'lavenderberry',
  database: 'needless',
  password: '_n4rcol3PSY'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.query('SHOW columns FROM test_table', function (err, rows, fields) {
  if(err) throw err;

  console.log('Columns from test_table:');
  rows.forEach(function(row) {
    console.log(row.Field);
  });
});

connection.query('SELECT * FROM test_table', function (err, rows, fields) {
  if (err) throw err;

  console.log('Query response: ', rows);
});

connection.end();
