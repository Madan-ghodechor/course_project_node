var mysql = require('mysql');
var util = require('util');

var conn = mysql.createConnection(
    {
        host:'bj9iowyng8jqd76ejzva-mysql.services.clever-cloud.com', // localhost
        user:'u50uq0aawxrffglr', // root
        password:'o3YGb4O69bHU1L2Zbwkh',  // ''
        database:'bj9iowyng8jqd76ejzva'
    }
);

var exe = util.promisify(conn.query).bind(conn);
 
module.exports = exe;
