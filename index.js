var express = require('express');
var adminRoutes = require('./routes/admin');
var userRoutes = require('./routes/user');
var bodyparser = require("body-parser");
var uploads = require('express-fileupload');
var session = require('express-session');

var app = express();
app.use(express.static("public/"));
app.use(bodyparser.urlencoded({extended:true}));
app.use(uploads());
app.use(session({
    secret:"MADAN",
    resave: true,
    saveUninitialized: true
}));

app.use("/",userRoutes);
app.use("/admin",adminRoutes);

app.get("/", (req,res)=>{
    res.send("hello");
});

app.listen(4200);

// DB_DBNAME
// DB_PASSWORD
// DB_HOST
// DB_USERNAME