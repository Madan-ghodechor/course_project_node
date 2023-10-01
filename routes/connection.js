var mysql = require('mysql');
var util = require('util');

var conn = mysql.createConnection(
    {
        host: 'bj9iowyng8jqd76ejzva-mysql.services.clever-cloud.com',
        user: 'u50uq0aawxrffglr',
        password: 'o3YGb4O69bHU1L2Zbwkh',
        database: 'bj9iowyng8jqd76ejzva',
        waitForConnections : true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

var exe = util.promisify(conn.query).bind(conn);
 
module.exports = exe;
