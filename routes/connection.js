var mysql = require('mysql');
var util = require('util');

var conn = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user:process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DBNAME,
        waitForConnections : true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

var exe = util.promisify(conn.query).bind(conn);
 
module.exports = exe;
