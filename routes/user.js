var express = require('express');
var router = express.Router();
var exe = require('./connection')

function login(req)
{
    if(req.session.user_id==undefined)
    {
        return false;
    }
    else{
        return true;
    }
}

function getDate()
{
    var today = new Date();
    var date=(today.getDate() < 10) ? "0"+today.getDate() : today.getDate();
    var month=(today.getMonth()+1 < 10) ? "0"+(today.getMonth()+1) : today.getMonth()+1;
    var year=today.getFullYear();
     return (year+'-'+month+'-'+date);
}

router.get("/",async (req,res)=>{
    var sliderData =await exe(`SELECT * FROM slider`);
    var courses = await exe(`SELECT * FROM courses ORDER BY course_id DESC LIMIT 8`);
    var obj = {
        'sliderData':sliderData,
        'courses':courses,
        'login':login(req)
    }
    res.render('user/index.ejs',obj)
});

router.get("/course_details/:id",async (req,res)=>{
    var id = req.params.id;
    var data = await exe(`SELECT * FROM courses WHERE course_id='${id}'`);
    var ispurchase = false;
    if(login(req))
    {
        var user_id = req.session.user_id;
        var purchase_course = await exe(`SELECT * FROM user_purchase WHERE user_id ='${user_id}' AND course_id = '${id}'`);
        if(purchase_course.length > 0)
        {
            ispurchase = true;
        }
    }

    var obj = {'data':data,'ispurchase':ispurchase,'login':login(req)};
    res.render('user/course_details.ejs',obj);
})
router.get("/courses", async (req,res)=>{
    var data = await exe(`SELECT * FROM courses`);
    var obj = {'data':data, 'login':login(req)};
    res.render('user/courses.ejs',obj)
}); 
router.get("/confirm_seat/:id",async (req,res)=>{
    if(req.session.user_id!=undefined)
    {
        var data = await exe(`SELECT * FROM courses WHERE course_id='${req.params.id}'`);
        var user_info = await exe(`SELECT * FROM user_tbl WHERE user_id = '${req.session.user_id}'`)
        var obj = { 'data':data,'user_info':user_info,'login':login(req)}
        res.render('user/confirm_seat.ejs',obj)
    }
    else
    {
        res.send(`
        <script>
            alert('login first');
            location.href ="/login"
        </script>`)
    }
});
router.post("/pay_course_fee/:course_id", async (req,res)=>{
    if(req.session.user_id!=undefined)
    {
        var course_id = req.params.course_id;
        var course_det = await exe(`SELECT * FROM courses WHERE course_id = '${course_id}'`);
        var amt = course_det[0].course_price;
        var user_id = req.session.user_id;

        var ymd = getDate()
    
        var sql = `INSERT INTO user_purchase(user_id , course_id , amount, purchase_date , transaction_id) VALUES ('${user_id}','${course_id}','${amt}','${ymd}', '${req.body.razorpay_payment_id}')`

        var data =await exe(sql);
        
        // exe(`CREATE TABLE user_purchase(purchase_id INT PRIMARY KEY AUTO_INCREMENT, user_id INT, course_id INT, amount INT, purchase_date TEXT, transaction_id VARCHAR(100))`);
        // res.send('user ID '+req.session.user_id +'<br> Course ID'+course_id);

        res.redirect("/my_courses");

    }
    else
    {
        res.send(`
        <script>
            alert('login first');
            location.href ="/login"
        </script>`)
    }
})

router.get("/my_courses",async (req,res)=>{
    var courses_list = await exe(`SELECT * FROM user_purchase,courses WHERE user_purchase.course_id = courses.course_id AND user_id = '${req.session.user_id}'`);
    var obj = {"courses_list":courses_list, 'login':login(req)}
    res.render('user/my_courses.ejs', obj);
})
router.get("/contact", async (req,res)=>{
    var obj = {'login':login(req)}
    res.render('user/contact.ejs',obj)
})
router.post("/save_query",async (req,res)=>{

    var Qu_query = req.body.Qu_query.replaceAll("'","\\'");

    // exe(`CREATE TABLE query_user(Qu_id INT PRIMARY KEY AUTO_INCREMENT,Qu_Fname TEXT,Qu_Lname TEXT,Qu_mobile TEXT, Qu_email TEXT, Qu_query TEXT)`)

    exe(`INSERT INTO query_user(Qu_Fname,Qu_Lname,Qu_mobile,Qu_email,Qu_query) VALUES ('${req.body.Qu_Fname}','${req.body.Qu_Lname}','${req.body.Qu_mobile}', '${req.body.Qu_email}','${Qu_query}')`);
    res.send(`
    <script>
        alert('Thank You For Showing Your Interest, Our team get to you as soon as Posible');
        location.href="/contact";
    </script>`)
})


router.get("/login",(req,res)=>{
    var obj ={'login':login(req)}
    res.render('user/login.ejs',obj)
})
router.post("/do_login", async (req,res)=>{
    var d = req.body;
    var data = await exe(`SELECT * FROM user_tbl WHERE user_mobile='${d.user_mobile}' AND user_password='${d.user_password}'`);
    if(data.length > 0)
    {
        req.session.user_id = data[0].user_id;
        res.redirect("/")
    }
    else
    {
        res.redirect("/login")
    }
})
router.get("/register",(req,res)=>{
    
    var obj ={'login':login(req)}
    res.render('user/register.ejs',obj)
})
router.post("/register_user", async (req,res)=>{
    var d = req.body;
    // var da = await exe(`CREATE TABLE user_tbl(user_id INT PRIMARY KEY AUTO_INCREMENT, user_name VARCHAR(30), user_mobile VARCHAR(30), user_email VARCHAR(30), user_password VARCHAR(30))`);
    var da = await exe(`INSERT INTO user_tbl(user_name, user_mobile, user_email, user_password) VALUES ('${d.user_name}','${d.user_mobile}','${d.user_email}','${d.user_password}')`);

    res.redirect('/login')
})
router.get("/logout",(req,res)=>{
    req.session.user_id = undefined;
    res.redirect("/login")
})
router.get("/edit_profile",async (req,res)=>{
    var sql = `SELECT * FROM user_tbl WHERE user_id='${req.session.user_id}'`;
    var data = await exe(sql);
    var obj = {'data':data,'login':login(req)}
    res.render('user/edit_profile.ejs',obj)
})
router.post("/update_user_info",async (req,res)=>{
    
    var sql = `UPDATE user_tbl SET user_name='${req.body.user_name}', user_mobile = '${req.body.user_mobile}', user_email='${req.body.user_email}', user_password='${req.body.user_password}' WHERE user_id='${req.session.user_id}'`;
    res.redirect('/profile') 
})
router.get("/profile",async (req,res)=>{
    var sql = `SELECT * FROM user_tbl WHERE user_id='${req.session.user_id}'`;
    var data = await exe(sql);
    var obj = {'data':data,'login':login(req)}
    res.render('user/profile.ejs', obj)
})
module.exports = router;