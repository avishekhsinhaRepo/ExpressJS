const path= require('path');
const express = require("express");
const helmet = require("helmet");
const cookkieParser = require("cookie-parser");
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(helmet());
app.use(cookkieParser());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"))


let storyRouter = require('./routes/story.router');

app.use("/story",storyRouter);


app.get('/login',(req,res,next)=>{
    res.locals.msg = '';
    const errorMsg  = req.query.msg;
    if(errorMsg == 'fail'){
        res.locals.msg = errorMsg;
    }
    res.render("login");
});


app.get('/logout',(req,res,next)=>{
    res.clearCookie("username");
    res.redirect("/login")
});
app.post('/process_login',(req,res,next)=>{
  const username = req.body.username;
  const password = req.body.password;
  if(password =='amit'){
      res.cookie("username",username);
      res.redirect("/welcome")
  }else{
    res.redirect("/login?msg=fail")
  }
});


app.get('/welcome',(req,res,next)=>{
    res.locals.username = req.cookies.username;
       res.render("welcome")
});

app.get('/story/:storyId',(req,res,next)=>{
    const storyId = req.params.storyId;
    res.send(`<h1>Story ${storyId}</h1>`)
});


app.listen(4000,()=>{
    console.log("Listening on Port 4000...");
})