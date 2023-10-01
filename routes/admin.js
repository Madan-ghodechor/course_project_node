var express = require('express');
var router = express.Router();
var exe = require('./connection')


router.get("/",function(req,res) {
    res.render("admin/login.ejs");
});
router.post("/check_admin_login",async function (req,res){
    var data =await exe(`SELECT * FROM admin`);

    if(data[0].admin_email==req.body.admin_email)
    {
        if(data[0].admin_password==req.body.admin_password)
        {
            req.session.admin_id = data[0].admin_id;
            res.redirect('/admin/dashboard');
        }
        else
        {
            res.send(`
            <script>
                alert('Wrong Id Password');
                location.href = "/admin"
            </script>`
        )
        }
    }else
    {
        res.send(`
            <script>
                alert('Wrong Id Password');
                location.href = "/admin"
            </script>`
        )
    }
})

router.get("/dashboard", async (req,res)=>{
    if(req.session.admin_id!=undefined)
    {
        var data = await exe(`SELECT * FROM query_user ORDER BY Qu_id DESC`)
        var obj = {'data':data}
        res.render('admin/home.ejs',obj)
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }

})


// Slider's Routes
router.get("/manage_slider",async function(req,res)
{
    if(req.session.admin_id!=undefined){
        var data = await exe("SELECT * FROM slider");
        var obj = {'data':data};
        res.render("admin/manage_slider.ejs",obj);
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }
});
router.post("/save_slider", async (req,res)=>{
    if(req.session.admin_id!=undefined){     
        const today = new Date();
        var time = today.getTime();

        const title = req.body.title.replaceAll("'", "\\'");
        const btn_name = req.body.btn_name.replaceAll("'", "\\'");
        const btn_link = req.body.btn_link.replaceAll("'", "\\'");
        
        let filename = time+req.files.slider_img.name;
        req.files.slider_img.mv("public/uploads/"+filename);

        // await exe(`CREATE TABLE slider(slider_id INT PRIMARY KEY AUTO_INCREMENT,slider_image TEXT, slider_title TEXT, slider_button TEXT, btn_link TEXT)`);

        await exe(`INSERT INTO slider(slider_image , slider_title , slider_button , btn_link ) VALUES ('${filename}','${title}','${btn_name}','${btn_link}')`);

        res.redirect('/admin/manage_slider')
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }
})
router.get("/delete_slider/:id", async (req,res)=> {
    if(req.session.admin_id!=undefined){
        let id = req.params.id;
        await exe(`DELETE FROM slider WHERE slider_id = '${id}'`);
        res.redirect('/admin/manage_slider');
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }
})
router.get("/edit_slider/:id", async (req,res)=>{

    if(req.session.admin_id!=undefined){
        let id = req.params.id;
        var data = await exe(`SELECT * FROM slider WHERE slider_id = '${id}'`);
        var obj = {'data':data};
        res.render('admin/edit_slider.ejs',obj);
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }
})
router.post("/save_edit_slider/:id", async (req,res)=>{
    
    if(req.session.admin_id!=undefined){    
        let id = req.params.id;
        const today = new Date();
        var time = today.getTime();

        const title = req.body.title.replaceAll("'", "\\'");
        const btn_name = req.body.btn_name.replaceAll("'", "\\'");
        const btn_link = req.body.btn_link.replaceAll("'", "\\'");

        if(req.files!=null)
        {
            let filename = time+req.files.slider_img.name;
            req.files.slider_img.mv("public/uploads/"+filename);

            await exe(`UPDATE slider SET slider_image = '${filename}', slider_title = '${title}', slider_button = '${btn_name}',btn_link = '${btn_link}' WHERE slider_id = '${id}'`);
        
            res.redirect('/admin/manage_slider');
        }
        else{
            await exe(`UPDATE slider SET slider_title = '${title}', slider_button = '${btn_name}',btn_link = '${btn_link}' WHERE slider_id = '${id}'`);
        
            res.redirect('/admin/manage_slider');
        }
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }
})

// Category's Routes
router.get("/manage_category", async (req,res)=>{
    if(req.session.admin_id!=undefined){
        var data = await exe(`SELECT * FROM categorys`);
        var obj = {'data':data}
        res.render('admin/category.ejs',obj)
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }
})
router.post("/save_category", async (req, res) => {
    if(req.session.admin_id!=undefined){
    // exe(`CREATE TABLE categorys(cat_id INT PRIMARY KEY AUTO_INCREMENT, cat_name TEXT, cat_details TEXT)`);

        const name = req.body.category_name.replaceAll("'", "\\'");
        const details = req.body.category_details.replaceAll("'", "\\'");

        await exe(`INSERT INTO categorys(cat_name, cat_details) VALUES ('${name}', '${details}')`);
        res.redirect("/admin/manage_category");
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }
});
router.get("/delete_category/:id", (req,res)=>{
    if(req.session.admin_id!=undefined){
        var id = req.params.id;
        exe(`DELETE FROM categorys WHERE cat_id = '${id}'`);
        res.redirect('/admin/manage_category')
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }
})
router.get("/edit_category/:id", async (req,res)=>{

    if(req.session.admin_id!=undefined){
        var id = req.params.id;
        var data = await exe(`SELECT * FROM categorys WHERE cat_id = '${id}'`);
        var obj = {'data':data};
        res.render('admin/edit_category.ejs',obj);
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }
})
router.post("/save_edit_category/:id", (req,res)=>{
    if(req.session.admin_id!=undefined){
        var id = req.params.id;
        const name = req.body.category_name.replaceAll("'", "\\'");
        const details = req.body.category_details.replaceAll("'", "\\'");
        exe(`UPDATE categorys SET cat_name = '${name}', cat_details = '${details}' WHERE cat_id = '${id}'`);
        res.redirect('/admin/manage_category')
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }
})

// Add Courses
router.get("/add_course", async (req,res)=>{
    if(req.session.admin_id!=undefined){
        var data = await exe(`SELECT * FROM categorys`);
        var obj = {'data':data}
        res.render('admin/add_course.ejs',obj);
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }
});
router.get("/course_list", async (req,res)=>{
    if(req.session.admin_id!=undefined){
        var da = await exe(`SELECT * FROM courses,categorys WHERE courses.course_category=categorys.cat_id`);
        var obj = {'da':da};
        res.render('admin/course_list.ejs',obj);
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }
});
router.get("/course_details/:id",async (req,res)=>{
    if(req.session.admin_id!=undefined){
        var id = req.params.id;
        var da =  {'da':await exe(`SELECT * FROM courses,categorys WHERE categorys.cat_id=courses.course_category AND course_id = '${id}'`)};
        res.render("admin/course_details.ejs",da);
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }
})
router.post("/save_course", (req,res)=>{
    if(req.session.admin_id!=undefined){
        const today = new Date();
        var time = today.getTime();

        var image_name = time+req.files.course_image.name;
        req.files.course_image.mv("public/uploads/"+image_name)
        var video_name ="";
        if(req.files.course_video != undefined)
        {
            video_name = time+req.files.course_video.name;
            req.files.course_video.mv("public/uploads/"+video_name)

        }
        // exe(`CREATE TABLE courses(course_id INT PRIMARY KEY AUTO_INCREMENT,course_name Text,course_category Text,course_duration Text,course_price Text,course_image text,course_video text,course_mentor Text,course_link Text,course_platform Text,course_details Text)`);

        var d = req.body;
        var course_name = d.course_name.replaceAll("'","\\'");
        var course_details = d.course_details.replaceAll("'","\\'");

        exe(`INSERT INTO courses(course_name,course_category,course_duration,course_price,course_image,course_video,course_mentor,course_link,course_platform,course_details) VALUES ('${course_name}','${d.course_category}','${d.course_duration}','${d.course_price}','${image_name}','${video_name}','${d.course_mentor}','${d.course_link}','${d.course_platform}','${course_details}')`);

        res.redirect('/admin/course_list')
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }
});
router.get("/edit_course/:id", async (req,res) =>{
    if(req.session.admin_id!=undefined){
        var id = req.params.id;
        var da = await exe(`SELECT * FROM categorys`);
        var data = await exe(`SELECT * FROM courses,categorys WHERE courses.course_category=categorys.cat_id AND course_id = '${id}'`);
        var obj = {'data':data,'da':da};
        res.render('admin/edit_courses.ejs',obj);
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }
});
router.get("/delete_course/:id", async (req,res) =>{
    if(req.session.admin_id!=undefined){
        var id = req.params.id;
        await exe(`DELETE FROM courses WHERE course_id = '${id}'`);
        res.redirect('/admin/course_list');
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }
});

router.post("/save_edit_course/:id", (req,res)=>{
    if(req.session.admin_id!=undefined){
        var id = req.params.id;
        var details = req.body.course_details.replaceAll("'","\\'");
        var d = req.body;
        const today = new Date();
        var time = today.getTime();

        if(req.files!=null)
        {
            var image,video;
            if(req.files.course_image!=undefined && req.files.course_video!=undefined)
            {
                image = time+req.files.course_image.name
                video = time+req.files.course_video.name
                req.files.course_image.mv("public/uploads/"+image);
                req.files.course_video.mv("public/uploads/"+video);

                exe(`UPDATE courses SET course_name='${d.course_name}',course_category='${d.course_category}',course_duration='${d.course_duration}',course_price='${d.course_price}',course_mentor='${d.course_mentor}',course_link='${d.course_link}',course_platform='${d.course_platform}',course_details='${details}',course_image='${image}',course_video='${video}' WHERE course_id = '${id}' `);
                res.redirect("/admin/course_list")
            }
            else if(req.files.course_video!=undefined){
                video = time+req.files.course_video.name;
                req.files.course_video.mv('public/uploads/'+video);
                exe(`UPDATE courses SET course_name='${d.course_name}',course_category='${d.course_category}',course_duration='${d.course_duration}',course_price='${d.course_price}',course_mentor='${d.course_mentor}',course_link='${d.course_link}',course_platform='${d.course_platform}',course_details='${details}',course_video='${video}' WHERE course_id = '${id}' `);
                res.redirect("/admin/course_list")
            }
            else{
                image = time+req.files.course_image.name;
                req.files.course_image.mv('public/uploads/'+image);
                exe(`UPDATE courses SET course_name='${d.course_name}',course_category='${d.course_category}',course_duration='${d.course_duration}',course_price='${d.course_price}',course_mentor='${d.course_mentor}',course_link='${d.course_link}',course_platform='${d.course_platform}',course_details='${details}',course_image='${image}' WHERE course_id = '${id}' `);
                res.redirect("/admin/course_list")
            }
        }
        else
        {
            exe(`UPDATE courses SET course_name='${d.course_name}',course_category='${d.course_category}',course_duration='${d.course_duration}',course_price='${d.course_price}',course_mentor='${d.course_mentor}',course_link='${d.course_link}',course_platform='${d.course_platform}',course_details='${details}' WHERE course_id = '${id}' `);
            res.redirect("/admin/course_list")
        }
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }
})

router.get("/all_users", async (req,res)=>{
    if(req.session.admin_id!=undefined){
        var sql = `SELECT * FROM user_tbl`;
        var data = await exe(sql);
        var obj = { "data": data}
        res.render("admin/all_users.ejs", obj)
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }
})
router.get("/sold_courses",async (req,res)=>{

    if(req.session.admin_id!=undefined){
        var sql = `SELECT user_name,course_name,purchase_date,amount,transaction_id FROM user_tbl,courses,user_purchase WHERE courses.course_id=user_purchase.course_id AND user_purchase.user_id = user_tbl.user_id`;
        var data = await exe(sql);

        var obj = { "data": data }
        res.render('admin/sold_courses.ejs', obj)
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }
})
router.post("/sold_courses", async (req,res)=>{
    if(req.session.admin_id!=undefined){
        var sql = `SELECT user_name,course_name,purchase_date,amount,transaction_id FROM user_tbl,courses,user_purchase WHERE courses.course_id=user_purchase.course_id AND user_purchase.user_id = user_tbl.user_id AND purchase_date BETWEEN '${req.body.start_date}' AND '${req.body.end_date}'`;
        var data = await exe(sql);
        var obj = { "data":data}
        res.render('admin/sold_courses.ejs', obj)
    }
    else
    {
        res.send(`
        <script>
            alert('You Are Very चलाख 👌 Bro But Login Required 😎');
            location.href ="/admin";
        </script>`)
    }
})


module.exports = router;


// for date data filteration
// SELECT * FROM `user_purchase` WHERE purchase_date BETWEEN '2023-02-03' AND '2023-09-08';

// if(req.session.admin_id!='')
// {
//     res.render('admin/home.ejs');
// }
// else
// {
//     res.send(`
//     <script>
//         alert('You Are Very चलाख 👌 Bro But Login Required 😎');
//         location.href ="/admin"
//     </script>`)
// }